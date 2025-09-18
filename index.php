<?php
/* Theme Name: CFSE Website (Built) */
$theme_dir = get_stylesheet_directory();
$theme_url = get_stylesheet_directory_uri();
$manifest_path = $theme_dir . '/.vite/manifest.json';
$manifest = file_exists($manifest_path) ? json_decode(file_get_contents($manifest_path), true) : [];

function asset_url_from_manifest($file, $theme_url) {
  if (!$file) return null;
  return (strpos($file, 'assets/') !== false) ? rtrim($theme_url, '/') . '/' . $file : rtrim($theme_url, '/') . '/assets/' . $file;
}

function vite_find_entry($manifest) {
  foreach ($manifest as $key => $meta) {
    if (!empty($meta['isEntry'])) return $meta;
    if (stripos($key, 'index.html') !== false) return $meta;
  }
  foreach ($manifest as $meta) return $meta;
  return null;
}

$entry = vite_find_entry($manifest);
$js = $entry && !empty($entry['file']) ? asset_url_from_manifest($entry['file'], $theme_url) : $theme_url . '/assets/index.js';
$css = $entry && !empty($entry['css'][0]) ? asset_url_from_manifest($entry['css'][0], $theme_url) : $theme_url . '/assets/index.css';
?><!doctype html>
<html <?php language_attributes(); ?>>
<head>
  <meta charset="<?php bloginfo('charset'); ?>">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <?php wp_head(); ?>
  <?php if ($css): ?><link rel="stylesheet" href="<?php echo esc_url($css); ?>"><?php endif; ?>
</head>
<body <?php body_class(); ?>>
  <div id="root"></div>
  <?php if ($js): ?><script src="<?php echo esc_url($js); ?>" defer></script><?php endif; ?>
  <?php wp_footer(); ?>
</body>
</html>