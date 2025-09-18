<?php
// Enqueue built Vite assets using manifest and optionally serve SPA for all front-end routes.

function cfse_enqueue_spa_assets() {
  $manifest_path = get_stylesheet_directory() . '/.vite/manifest.json';
  $base_url = get_stylesheet_directory_uri() . '/assets/';

  if ( ! file_exists( $manifest_path ) ) {
    return;
  }

  $manifest = json_decode( file_get_contents( $manifest_path ), true );
  if ( ! is_array( $manifest ) || empty( $manifest ) ) {
    return;
  }

  $entry = null;
  foreach ( $manifest as $key => $meta ) {
    if ( ! empty( $meta['isEntry'] ) || stripos( $key, 'index.html' ) !== false ) {
      $entry = $meta;
      break;
    }
  }
  if ( ! $entry ) {
    $entry = reset( $manifest );
  }

  if ( ! empty( $entry['css'][0] ) ) {
    wp_enqueue_style( 'cfse-spa-css', $base_url . ltrim( $entry['css'][0], '/' ), array(), null );
  }
  if ( ! empty( $entry['file'] ) ) {
    wp_enqueue_script( 'cfse-spa-js', $base_url . ltrim( $entry['file'], '/' ), array(), null, true );
  }
}
add_action( 'wp_enqueue_scripts', 'cfse_enqueue_spa_assets', 5 );

// Serve SPA for all non-admin requests (uncomment to enable)
add_action( 'template_redirect', function() {
  if ( is_admin() || ( defined( 'REST_REQUEST' ) && REST_REQUEST ) || ( function_exists('wp_doing_ajax') && wp_doing_ajax() ) ) {
    return;
  }

  status_header(200);
  nocache_headers();

  echo '<!doctype html><html><head><meta charset="' . get_option('blog_charset') . '"><meta name="viewport" content="width=device-width,initial-scale=1">';
  wp_head();
  echo '</head><body' . ( function_exists('body_class') ? ' class="' . join(' ', get_body_class()) . '"' : '' ) . '>';
  echo '<div id="root"></div>';
  wp_footer();
  echo '</body></html>';
  exit;
});