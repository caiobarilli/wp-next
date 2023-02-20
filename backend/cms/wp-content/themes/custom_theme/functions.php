<?php

/**
 *
 * App functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package CustomTheme
 *
*/

/*------------------------------------*\
    External Modules/Files
\*------------------------------------*/

require_once get_stylesheet_directory() . '/inc/plugins.php';

/*------------------------------------*\
    Theme
\*------------------------------------*/

define('THEME_VERSION', wp_get_theme()->get('Version'));

// Theme Support
if (function_exists('add_theme_support')) {
    add_theme_support('post-thumbnails');
}
