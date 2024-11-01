=== Word count with double-byte character ===
Contributors: ydoow
Donate link: /
Tags: double-byte, character, word-count, korean, japanese, chinese
Requires at least: 2.9
Tested up to: 3.9
Stable tag: 1.0.0
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

Fixed the word count of post content on your admin page.

== Description ==
Existing word count of post content on admin page does not support double-byte character such as Korean, Japanese and Chinese. The fix would process the input string byte by byte so every single double-byte character would be counted toward a word count, while the count of word composite of single bytes won't be affected.

== Installation ==
1. Unzip `word-count-with-double-byte-character.1.0.0.zip`
2. Upload the folder `doublebyte-wordcount` to the `/wp-content/plugins/` directory
3. Activate the plugin through the 'Plugins' menu in WordPress
4. Go to the post content and the word count below the content should work now.

== Changelog ==
= 1.0.0 =
* First release.
