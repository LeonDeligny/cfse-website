<?php
/**
 * Minimal index for cfse-website theme.
 */
if ( ! defined( 'ABSPATH' ) ) { exit; }

get_header();
?>
<main id="site-content">
    <h1><?php bloginfo( 'name' ); ?></h1>
    <p><?php bloginfo( 'description' ); ?></p>
</main>
<?php
get_footer();
