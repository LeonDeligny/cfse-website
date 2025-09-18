#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_DIR="${1:-$(cd "$SCRIPT_DIR/.." && pwd)}"

PLUGIN="${PLUGIN:-cfse-website}"
WP_PLUGINS="${WP_PLUGINS:-/home/clients/bf34dad1d93f6c3f3d631220de829f6c3f3d631220de829f6c3f3d631220de829fda/web/wp-content/plugins}"

cd "$REPO_DIR"

# plugin php source (must contain plugin header)
if [ -f "wp-pluging.php" ]; then
  PLUGIN_PHP_SRC="wp-pluging.php"
elif [ -f "${PLUGIN}.php" ]; then
  PLUGIN_PHP_SRC="${PLUGIN}.php"
else
  echo "Error: plugin php (wp-pluging.php or ${PLUGIN}.php) not found in $REPO_DIR" >&2
  exit 1
fi

mkdir -p "$WP_PLUGINS/$PLUGIN"

# copy/rename plugin file
cp -f "$PLUGIN_PHP_SRC" "$WP_PLUGINS/$PLUGIN/$PLUGIN.php"

# copy built files (dist) into plugin/dist
if [ ! -d "dist" ]; then
  echo "Error: dist/ not found in $REPO_DIR — build first (npm run build)" >&2
  exit 1
fi

rsync -av --delete --chmod=Du=rwx,Dg=rx,Do=rx,Fu=rw,Fg=r,Fo=r ./dist/ "$WP_PLUGINS/$PLUGIN/dist/"

echo "Plugin deployed to $WP_PLUGINS/$PLUGIN"
echo "Activate it in WP Admin → Plugins (or use wp-cli)."