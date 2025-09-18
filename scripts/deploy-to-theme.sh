#!/usr/bin/env bash
set -euo pipefail
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_DIR="${1:-$(pwd)}"
THEME_DIR="~/web/wp-content/themes/cfse-website"
BUILD_DIR="dist"

echo "Repo: $REPO_DIR"
echo "Theme: $THEME_DIR"

cd "$REPO_DIR"

# build if npm present
BUILD_PERFORMED=0
if command -v npm >/dev/null 2>&1; then
  echo "Running npm ci and build..."
  npm ci --legacy-peer-deps
  npm run build -- --base /wp-content/themes/cfse-website/
  BUILD_PERFORMED=1
else
  echo "npm not found — ensure you built locally and copied $BUILD_DIR/ into the repo."
fi

# ensure build exists
if [ ! -d "$BUILD_DIR" ]; then
  echo "Error: $BUILD_DIR not found in $REPO_DIR" >&2
  exit 1
fi

# create target and sync
mkdir -p "$THEME_DIR"
echo "Syncing $BUILD_DIR -> $THEME_DIR"
rsync -a --delete "${BUILD_DIR}/" "$THEME_DIR/"

# cleanup local build only if we performed it
if [ "$BUILD_PERFORMED" -eq 1 ]; then
  rm -rf "$BUILD_DIR"
fi

# permissions note
if command -v sudo >/dev/null 2>&1 && sudo -n true 2>/dev/null; then
  sudo chown -R www-data:www-data "$THEME_DIR"
  sudo find "$THEME_DIR" -type d -exec chmod 755 {} \;
  sudo find "$THEME_DIR" -type f -exec chmod 644 {} \;
else
  echo "Note: cannot run sudo without password. If needed, ask host or run:"
  echo "  sudo chown -R www-data:www-data '$THEME_DIR'"
  echo "  sudo find '$THEME_DIR' -type d -exec chmod 755 {} \\;"
  echo "  sudo find '$THEME_DIR' -type f -exec chmod 644 {} \\;"
fi

echo "Deployed to $THEME_DIR"