<?php
/* Theme Name: CFSE Website (Built) */
$theme_dir = get_stylesheet_directory();
$theme_url = get_stylesheet_directory_uri();
$manifest_path = $theme_dir . '/.vite/manifest.json';
$manifest = file_exists($manifest_path) ? json_decode(file_get_contents($manifest_path), true) : [];
function vite_asset($name, $manifest, $theme_url) {
  if (!empty($manifest[$name]['file'])) return $theme_url . '/assets/' . $manifest[$name]['file'];
  return $theme_url . '/assets/' . $name;
}
?><!doctype html>
<html <?php language_attributes(); ?>>
<head>
  <meta charset="<?php bloginfo('charset'); ?>">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <?php wp_head(); ?>
  <link rel="stylesheet" href="<?php echo esc_url( vite_asset('index.css', $manifest, $theme_url) ); ?>">
</head>
<body <?php body_class(); ?>>
  <div id="root"></div>
  <script src="<?php echo esc_url( vite_asset('index.js', $manifest, $theme_url) ); ?>" defer></script>
  <?php wp_footer(); ?>
</body>
</html>
PHP