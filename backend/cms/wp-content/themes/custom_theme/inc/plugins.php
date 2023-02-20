<?php
/**
 *
 * Include require plugins the TGM Plugin Activation.
 *
 * @package CustomTheme
 *
 */

require_once get_stylesheet_directory() . '/inc/class-tgm-plugin-activation.php';

function custom_theme_require_plugins()
{
    $plugins = array(

        array(
            'name'               => 'WPGraphql',
            'slug'               => 'wp-graphql',
            'source'             => get_stylesheet_directory() . '/plugins/wp-graphql.1.13.8.zip',
            'required'           => false, // this plugin is required
            'external_url'       => 'https://br.wordpress.org/plugins/wp-graphql/', // page of my plugin
            'force_deactivation' => true, // deactivate this plugin when the user switches to another theme
        ),

    );

    $config = array( /* The array to configure TGM Plugin Activation */ );

    tgmpa($plugins, $config);
}

add_action('tgmpa_register', 'custom_theme_require_plugins');
