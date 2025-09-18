#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_DIR="${1:-$(cd "$SCRIPT_DIR/.." && pwd)}"
PLUGIN="${PLUGIN:-cfse-website}"
WP_PLUGINS="${2:-${WP_PLUGINS:-/home/clients/bf34dad1d93f6c3f3d631220de829f6c3f3d631220de829f6c3f3d631220de829fda/web/wp-content/plugins}}"

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

# If repo is already the target plugin directory, skip creating/copying
if [ "$TARGET_DIR" != "$REPO_DIR" ]; then
  if ! mkdir -p "$TARGET_DIR" 2>/dev/null; then
    echo "Cannot create target plugin directory: $TARGET_DIR" >&2
    echo "Run with a writable WP_PLUGINS path or with sudo." >&2
    exit 1
  fi
  cp -f "$PLUGIN_PHP_SRC" "$TARGET_DIR/$PLUGIN.php"
else
  echo "Repo is the plugin target ($REPO_DIR). Skipping plugin file copy."
fi

# ensure build exists
if [ ! -d "dist" ]; then
  echo "Error: dist/ not found in $REPO_DIR — run npm run build first" >&2
  exit 1
fi

rsync -av --delete --chmod=Du=rwx,Dg=rx,Do=rx,Fu=rw,Fg=r,Fo=r \
  --exclude='node_modules/' --exclude='.git/' --exclude='src/' --exclude='public/' \
  ./dist/ "$TARGET_DIR/dist/" || { echo "rsync failed"; exit 1; }

echo "Plugin deployed to $TARGET_DIR"
echo "Activate plugin in WP Admin → Plugins (or use wp-cli)."