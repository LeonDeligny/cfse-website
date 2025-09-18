#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_DIR="${1:-$(cd "$SCRIPT_DIR/.." && pwd)}"
# Usage: ./deploy-to-pluging.sh [repo_dir] [wp_plugins_dir]  OR override with env vars:
# PLUGIN - plugin folder name (default: cfse-website)
# WP_PLUGINS - wordpress plugins directory
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

# ensure target folder exists (fail with helpful message if permission denied)
if ! mkdir -p "$WP_PLUGINS/$PLUGIN" 2>/dev/null; then
  echo "Cannot create target plugin directory: $WP_PLUGINS/$PLUGIN" >&2
  echo "Options:" >&2
  echo "  - run with a writable WP_PLUGINS path: WP_PLUGINS=/path/to/wp/wp-content/plugins ./scripts/deploy-to-pluging.sh" >&2
  echo "  - run with sudo if allowed: sudo WP_PLUGINS=$WP_PLUGINS ./scripts/deploy-to-pluging.sh" >&2
  exit 1
fi

# copy/rename plugin file
cp -f "$PLUGIN_PHP_SRC" "$WP_PLUGINS/$PLUGIN/$PLUGIN.php"

# ensure build exists
if [ ! -d "dist" ]; then
  echo "Error: dist/ not found in $REPO_DIR — run npm run build first" >&2
  exit 1
fi

# rsync dist -> plugin/dist. keep perms readable for webserver, exclude repo folders
rsync -av --delete --chmod=Du=rwx,Dg=rx,Do=rx,Fu=rw,Fg=r,Fo=r \
  --exclude='node_modules/' --exclude='.git/' --exclude='src/' --exclude='public/' \
  ./dist/ "$WP_PLUGINS/$PLUGIN/dist/" || { echo "rsync failed"; exit 1; }

echo "Plugin deployed to $WP_PLUGINS/$PLUGIN"
echo "Activate plugin in WP Admin → Plugins (or use wp-cli)."
```// filepath: /home/cfse2/Leon/cfse-website/scripts/deploy-to-pluging.sh
#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_DIR="${1:-$(cd "$SCRIPT_DIR/.." && pwd)}"
# Usage: ./deploy-to-pluging.sh [repo_dir] [wp_plugins_dir]  OR override with env vars:
# PLUGIN - plugin folder name (default: cfse-website)
# WP_PLUGINS - wordpress plugins directory
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

# ensure target folder exists (fail with helpful message if permission denied)
if ! mkdir -p "$WP_PLUGINS/$PLUGIN" 2>/dev/null; then
  echo "Cannot create target plugin directory: $WP_PLUGINS/$PLUGIN" >&2
  echo "Options:" >&2
  echo "  - run with a writable WP_PLUGINS path: WP_PLUGINS=/path/to/wp/wp-content/plugins ./scripts/deploy-to-pluging.sh" >&2
  echo "  - run with sudo if allowed: sudo WP_PLUGINS=$WP_PLUGINS ./scripts/deploy-to-pluging.sh" >&2
  exit 1
fi

# copy/rename plugin file
cp -f "$PLUGIN_PHP_SRC" "$WP_PLUGINS/$PLUGIN/$PLUGIN.php"

# ensure build exists
if [ ! -d "dist" ]; then
  echo "Error: dist/ not found in $REPO_DIR — run npm run build first" >&2
  exit 1
fi

# rsync dist -> plugin/dist. keep perms readable for webserver, exclude repo folders
rsync -av --delete --chmod=Du=rwx,Dg=rx,Do=rx,Fu=rw,Fg=r,Fo=r \
  --exclude='node_modules/' --exclude='.git/' --exclude='src/' --exclude='public/' \
  ./dist/ "$WP_PLUGINS/$PLUGIN/dist/" || { echo "rsync failed"; exit 1; }

echo "Plugin deployed to $WP_PLUGINS/$PLUGIN"
echo "Activate plugin in WP Admin → Plugins (or use wp-cli)."