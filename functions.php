<?php 

// подключение стилей и скриптов

add_action( 'wp_enqueue_scripts', 'poster_scripts');

function poster_scripts() {
	wp_enqueue_style ('main-css', get_stylesheet_uri());
    wp_enqueue_style ('poster-css', get_template_directory_uri() . '/styles/index.css', array('main-css'), null );
    wp_enqueue_script ('poster-js', get_template_directory_uri() . '/scripts/index.js', array(), false, true );
}

?>