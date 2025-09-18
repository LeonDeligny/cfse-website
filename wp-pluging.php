<?php
/**
 * Plugin Name: CFSE SPA Loader
 * Description: Serve the built SPA from plugins/cfse-spa/dist/
 * Version: 1.0
 * Author: CFSE
 */
if ( ! defined( 'ABSPATH' ) ) exit;

function cfse_spa_manifest() {
    $f = plugin_dir_path(__FILE__) . 'dist/.vite/manifest.json';
    return file_exists($f) ? json_decode(file_get_contents($f), true) : null;
}

function cfse_spa_enqueue() {
    $manifest = cfse_spa_manifest();
    $base = plugin_dir_url(__FILE__) . 'dist/assets/';
    if ( is_array($manifest) && $manifest ) {
        $entry = null;
        foreach ( $manifest as $k => $m ) { if (!empty($m['isEntry']) || stripos($k,'index.html')!==false) { $entry=$m; break; } }
        if (!$entry) $entry = reset($manifest);
        if (!empty($entry['css'][0])) wp_enqueue_style('cfse-spa-css', plugin_dir_url(__FILE__).'dist/'.ltrim($entry['css'][0],'/'));
        if (!empty($entry['file'])) wp_enqueue_script('cfse-spa-js', plugin_dir_url(__FILE__).'dist/'.ltrim($entry['file'],'/'), array(), null, true );
    } else {
        wp_enqueue_style('cfse-spa-css', $base . 'index.css');
        wp_enqueue_script('cfse-spa-js', $base . 'index.js', array(), null, true);
    }
}
add_action('wp_enqueue_scripts','cfse_spa_enqueue',5);

add_action('template_redirect', function(){
    if ( is_admin() || ( defined('REST_REQUEST') && REST_REQUEST ) || ( function_exists('wp_doing_ajax') && wp_doing_ajax() ) ) return;
    status_header(200); nocache_headers();
    echo '<!doctype html><html><head><meta charset="'.get_option('blog_charset').'"><meta name="viewport" content="width=device-width,initial-scale=1">';
    wp_head(); echo '</head><body><div id="root"></div>'; wp_footer(); echo '</body></html>';
    exit;
});