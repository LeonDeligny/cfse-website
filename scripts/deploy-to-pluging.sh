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

cd "$REPO_DIR"

# find plugin php source
if [ -f "wp-pluging.php" ]; then
  PLUGIN_PHP_SRC="wp-pluging.php"
elif [ -f "${PLUGIN}.php" ]; then
  PLUGIN_PHP_SRC="${PLUGIN}.php"
else
  echo "Error: plugin php (wp-pluging.php or ${PLUGIN}.php) not found in $REPO_DIR" >&2
  exit 1
fi

TARGET_DIR="$WP_PLUGINS/$PLUGIN"

BUILD_PERFORMED=0
if command -v npm >/dev/null 2>&1; then
  echo "Running npm ci and build..."
  npm ci --legacy-peer-deps
  npm run build -- --base "$BASE_PATH"
  BUILD_PERFORMED=1
else
  echo "npm not found — ensure $BUILD_DIR/ exists in the repo before running."
fi

if [ ! -d "$BUILD_DIR" ]; then
  echo "Error: build directory '$BUILD_DIR' not found in $REPO_DIR" >&2
  exit 1
fi

echo "target: $TARGET_DIR"
ls -ld "$TARGET_DIR" "$TARGET_DIR/dist" 2>/dev/null || true

# show owner/perm info
stat -c "%U %G %a %n" "$TARGET_DIR" "$TARGET_DIR/dist" 2>/dev/null || true

# test if you can create a file there
touch "$TARGET_DIR/dist/.deploy-test" 2>/dev/null && echo "write ok" || echo "cannot write to $TARGET_DIR/dist"
rm -f "$TARGET_DIR/dist/.deploy-test" 2>/dev/null || true

rsync -av --delete --chmod=Du=rwx,Dg=rx,Do=rx,Fu=rw,Fg=r,Fo=r \
  --exclude='node_modules/' --exclude='.git/' --exclude='src/' --exclude='public/' \
  ./dist/ "$TARGET_DIR/dist/" || { echo "rsync failed"; exit 1; }

echo "Plugin deployed to $TARGET_DIR"
echo "Activate plugin in WP Admin → Plugins (or use wp-cli)."