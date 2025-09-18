#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_DIR="${1:-$(cd "$SCRIPT_DIR/.." && pwd)}"
THEME_DIR="${2:-${THEME_DIR:-$REPO_DIR}}"
BUILD_DIR="dist"
BASE_PATH="${BASE:-/wp-content/themes/$(basename "$THEME_DIR")/}"

echo "Repo: $REPO_DIR"
echo "Theme: $THEME_DIR"
echo "Build dir: $BUILD_DIR"
echo "Vite base: $BASE_PATH"

cd "$REPO_DIR"

BUILD_PERFORMED=0
if command -v npm >/dev/null 2>&1; then
  echo "Running npm ci and build..."
  npm ci --legacy-peer-deps
  npm run build -- --base
  BUILD_PERFORMED=1
else
  echo "npm not found — ensure $BUILD_DIR/ exists in the repo before running."
fi

if [ ! -d "$BUILD_DIR" ]; then
  echo "Error: build directory '$BUILD_DIR' not found in $REPO_DIR" >&2
  exit 1
fi

command -v rsync >/dev/null 2>&1 || { echo "rsync required but not found"; exit 1; }

# Ensure dist is in the theme directory before syncing
if [ "$BUILD_DIR" != "$THEME_DIR/$BUILD_DIR" ]; then
  echo "Moving build output to theme directory..."
  rm -rf "$THEME_DIR/$BUILD_DIR"
  mv "$BUILD_DIR" "$THEME_DIR/"
fi

TMPDIR="$(mktemp -d)"
trap 'rm -rf "$TMPDIR"' EXIT

echo "Copying build to temporary directory..."
rsync -a --delete --partial "$THEME_DIR/$BUILD_DIR/" "$TMPDIR/" || { echo "rsync -> tmp failed"; exit 1; }

echo "Syncing temporary copy to theme folder..."
rsync -a --delete "$TMPDIR/" "$THEME_DIR/" || { echo "rsync -> theme failed"; exit 1; }

# optional cleanup of local build if we produced it
if [ "$BUILD_PERFORMED" -eq 1 ]; then
  rm -rf "$THEME_DIR/$BUILD_DIR"
fi

if command -v sudo >/dev/null 2>&1 && sudo -n true 2>/dev/null; then
  echo "Fixing ownership and permissions..."
  sudo chown -R www-data:www-data "$THEME_DIR"
  sudo find "$THEME_DIR" -type d -exec chmod 755 {} \;
  sudo find "$THEME_DIR" -type f -exec chmod 644 {} \;
else
  echo "Note: cannot run sudo without password. To fix permissions, run as privileged user:"
  echo "  sudo chown -R www-data:www-data '$THEME_DIR'"
  echo "  sudo find '$THEME_DIR' -type d -exec chmod 755 {} \\;"
  echo "  sudo find '$THEME_DIR' -type f -exec chmod 644 {} \\;"
fi

echo "Deployed to $THEME_DIR"
