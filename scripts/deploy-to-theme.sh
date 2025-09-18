#!/usr/bin/env bash
set -euo pipefail
REPO_DIR="${1:-$(pwd)}"
THEME_DIR="~/web/wp-content/themes/cfse-website"

cd "$REPO_DIR"

# install & build (skip install step if npm missing)
if command -v npm >/dev/null 2>&1; then
  npm ci --legacy-peer-deps
  npm run build -- --base /wp-content/themes/cfse-website/
else
  echo "npm not found — ensure you built locally and copied dist/"
fi

# copy build into theme root (manifest and assets must live at theme root)
rsync -a --delete dist/ "$THEME_DIR/"

# optional cleanup
rm -rf dist

# try to fix ownership/permissions only if sudo works without password
if command -v sudo >/dev/null 2>&1 && sudo -n true 2>/dev/null; then
  sudo chown -R www-data:www-data "$THEME_DIR"
  sudo find "$THEME_DIR" -type d -exec chmod 755 {} \;
  sudo find "$THEME_DIR" -type f -exec chmod 644 {} \;
else
  echo "Note: sudo not available without password — you may need to set ownership/permissions via your host panel or ask support:"
  echo "  chown -R www-data:www-data $THEME_DIR"
  echo "  find $THEME_DIR -type d -exec chmod 755 {} \\;"
  echo "  find $THEME_DIR -type f -exec chmod 644 {} \\;"
fi

echo "Deployed to $THEME_DIR"