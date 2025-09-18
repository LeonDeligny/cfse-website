#!/usr/bin/env bash
set -euo pipefail

PLUGIN=cfse-website
WP_PLUGINS="/home/clients/bf34dad1d93f6c3f3d631220de829f6c3f3d631220de829f6c3f3d631220de829fda/web/wp-content/plugins"

mkdir -p "$WP_PLUGINS/$PLUGIN"
# rename and copy plugin php
cp wp-pluging.php "$WP_PLUGINS/$PLUGIN/$PLUGIN.php"
# copy built files
rsync -av --chmod=Du=rwx,Dg=rx,Do=rx,Fu=rw,Fg=r,Fo=r ./dist/ "$WP_PLUGINS/$PLUGIN/dist/"