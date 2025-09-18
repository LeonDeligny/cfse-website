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