#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_DIR="${1:-$(cd "$SCRIPT_DIR/.." && pwd)}"
PLUGIN="${PLUGIN:-cfse-website}"
WP_PLUGINS="${2:-${WP_PLUGINS:-/home/clients/bf34dad1d93f6c3f3d631220de829f6c3f3d631220de829f6c3f3d631220de829fda/web/wp-content/plugins}}"
BUILD_DIR="dist"
BASE_PATH="${BASE_PATH:-/wp-content/plugins/${PLUGIN}/dist/}"

echo "Repo: $REPO_DIR"
echo "Plugin name: $PLUGIN"
echo "Target WP plugins dir: $WP_PLUGINS"
echo "Build dir: $BUILD_DIR"
echo "Vite base: $BASE_PATH"

cd "$REPO_DIR"

# find plugin php source
if [ -f "wp-pluging.php" ]; then
  PLUGIN_PHP_SRC="wp-pluging.php"
elif [ -f "${PLUGIN}.php" ]; then
  PLUGIN_PHP_SRC="${PLUGIN}.php"
elif [ -f "cfse-website.php" ]; then
  PLUGIN_PHP_SRC="cfse-website.php"
else
  echo "Error: plugin php (wp-pluging.php or ${PLUGIN}.php) not found in $REPO_DIR" >&2
  exit 1
fi

TARGET_DIR="$WP_PLUGINS/$PLUGIN"

# If target differs from repo, ensure target directory exists and is creatable
if [ "$TARGET_DIR" != "$REPO_DIR" ]; then
  if ! mkdir -p "$TARGET_DIR" 2>/dev/null; then
    echo "Cannot create target plugin directory: $TARGET_DIR" >&2
    echo "Options:" >&2
    echo "  - Run with a writable WP_PLUGINS path: WP_PLUGINS=/path/to/wp/wp-content/plugins ./scripts/deploy-to-pluging.sh" >&2
    echo "  - Or run the script with sudo if allowed: sudo WP_PLUGINS=$WP_PLUGINS ./scripts/deploy-to-pluging.sh" >&2
    exit 1
  fi
  cp -f "$PLUGIN_PHP_SRC" "$TARGET_DIR/$PLUGIN.php"
else
  echo "Repo is the plugin target ($REPO_DIR). Skipping plugin file copy."
fi

# Build if possible
BUILD_PERFORMED=0
if command -v npm >/dev/null 2>&1; then
  echo "Running npm ci and build..."
  npm ci --legacy-peer-deps
  npm run build -- --base "$BASE_PATH"
  BUILD_PERFORMED=1
else
  echo "npm not found — ensure $BUILD_DIR/ is present in the repo before running."
fi

if [ ! -d "$BUILD_DIR" ]; then
  echo "Error: build directory '$BUILD_DIR' not found in $REPO_DIR" >&2
  exit 1
fi

# Verify we can write to target (try to create dist dir)
if ! mkdir -p "$TARGET_DIR/dist" 2>/dev/null; then
  echo "Cannot create or write to $TARGET_DIR/dist (permission denied)" >&2
  echo "Either choose a WP_PLUGINS path you own or ask host to grant write access." >&2
  exit 1
fi

# quick write test
if ! touch "$TARGET_DIR/dist/.deploy-test" 2>/dev/null; then
  echo "Cannot write into $TARGET_DIR/dist (permission denied)" >&2
  echo "Either choose a WP_PLUGINS path you own or ask host to grant write access." >&2
  exit 1
fi
rm -f "$TARGET_DIR/dist/.deploy-test"

# sync build -> plugin/dist (make files world-readable so webserver can serve them)
rsync -av --delete --chmod=Du=rwx,Dg=rx,Do=rx,Fu=rw,Fg=r,Fo=r \
  --exclude='node_modules/' --exclude='.git/' --exclude='src/' --exclude='public/' \
  "./$BUILD_DIR/" "$TARGET_DIR/dist/" || { echo "rsync failed"; exit 1; }

echo "Plugin deployed to $TARGET_DIR"
if [ "$BUILD_PERFORMED" -eq 1 ]; then
  echo "Build performed and deployed."
else
  echo "Existing build deployed."
fi
echo "Activate plugin in WP Admin → Plugins (or use wp-cli)."
