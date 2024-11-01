<?php

/*
  Plugin Name: Word count with double-byte character
  Description: Existing word count of post content on admin page does not support double-byte character such as Korean, Japanese and Chinese. The fix would process the input string byte by byte so every single double-byte character would be counted toward a word count, while the count of word composite of single bytes won't be affected.
  Author: Ydoow
  Version: 1.0.0  
 */

function use_doublebyte_wordcount() {
	if (!defined("PLUGIN_SCRIPT_PATH")) define("PLUGIN_SCRIPT_PATH", plugins_url( 'word-count.js', __FILE__ ));
    wp_deregister_script('word-count');
    wp_register_script('word-count', PLUGIN_SCRIPT_PATH);
	wp_localize_script( 'word-count', 'wordCountL10n', array('count' => __('Word count: %d')));
}

add_action('init', 'use_doublebyte_wordcount', 99);