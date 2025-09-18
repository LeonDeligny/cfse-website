<?php
function cfse_enqueue_vite_assets() {
    $dist_dir = get_template_directory() . '/dist';
    $manifest_candidates = array(
        $dist_dir . '/manifest.json',
        $dist_dir . '/.vite/manifest.json',
    );

    $manifest_path = null;
    foreach ( $manifest_candidates as $p ) {
        if ( file_exists( $p ) ) { $manifest_path = $p; break; }
    }
    if ( ! $manifest_path ) { return; }

    $m = json_decode( file_get_contents( $manifest_path ), true );
    if ( empty( $m ) ) { return; }

    // pick the first entry (usually "index.html")
    $entry_key = array_key_first( $m );
    $entry = $m[ $entry_key ];

    if ( isset( $entry['css'] ) ) {
        foreach ( $entry['css'] as $css ) {
            $css_path = ltrim( $css, '/' );
            wp_enqueue_style(
                'cfse-style-' . md5( $css_path ),
                get_template_directory_uri() . '/dist/' . $css_path,
                array(),
                filemtime( $dist_dir . '/' . $css_path )
            );
        }
    }

    if ( isset( $entry['file'] ) ) {
        $js_path = ltrim( $entry['file'], '/' );
        wp_enqueue_script(
            'cfse-main',
            get_template_directory_uri() . '/dist/' . $js_path,
            array(),
            filemtime( $dist_dir . '/' . $js_path ),
            true
        );
    }
}
add_action( 'wp_enqueue_scripts', 'cfse_enqueue_vite_assets' );