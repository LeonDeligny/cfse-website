define('FS_CHMOD_FILE', 0644);
define('FS_CHMOD_DIR', 0755);

<?php
<?php
/*
Plugin Name: CFSE Plugin
Description: Minimal scaffold — replace with your plugin code.
Version: 0.1
Author: Leon Deligny
*/

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

register_activation_hook( __FILE__, function() {
    // Activation tasks (optional)
    add_option( 'my_plugin_activated_at', time() );
});

add_action( 'init', function() {
    // Example: ensure plugin is loaded
    // add_action, shortcode, CPT, etc. go here.
});