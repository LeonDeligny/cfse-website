#!/usr/bin/env bash
set -euo pipefail
REPO_DIR="${1:-$(pwd)}"
THEME_DIR="/wp-content/themes/cfse-website"

cd "$REPO_DIR"

# install & build (server may need --legacy-peer-deps)
npm ci --legacy-peer-deps
npm run build -- --base /wp-content/themes/cfse-website/

# copy build into theme root (manifest and assets must live at theme root)
cp -a dist/. "$THEME_DIR/"

# optional cleanup
rm -rf dist

# fix ownership/permissions for webserver
sudo chown -R www-data:www-data "$THEME_DIR"
sudo find "$THEME_DIR" -type d -exec chmod 755 {} \;
sudo find "$THEME_DIR" -type f -exec chmod 644 {} \;

echo "Deployed to $THEME_DIR"