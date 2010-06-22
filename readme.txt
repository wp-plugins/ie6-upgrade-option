=== IE6 Upgrade Option ===
Contributors: Doc4, mihai.ile
Donate link: http://www.doc4design.com/donate
Tags: ie6, internet explorer, internet explorer 6, ie6 warning, ie6 message, no ie6, no more ie6, ie6 upgrade, explorer upgrade, internet explorer upgrade, internet explorer message, ie6 close button, explorer destroyer
Requires at least: 2.8
Tested up to: 3.0
Stable tag: 1.6


== Description ==

IE6 Upgrade Option utilizes the 7.9kb script created by mihai.ile: http://code.google.com/p/ie6-upgrade-warning/ as a WordPress plugin. I preferred this script over the many alternatives due to the fact that the message is displayed with a Lightbox effect and not placed at the top of the code forcing content down and drastically altering the page appearance. This plugin displays a warning message, simply and politely informing the user that their browser is out of date and providing links to download newer browsers. Links included are: IE8, Firefox, Opera, Safari, and Chrome. 

The web page remains visible through a transparent, Lightbox effect in the background and the user has the option of closing the window agreeing that their experience may be severely degraded. The javascript then installs a cookie preventing the window from appearing again, unless the cookies are cleared. The script is added to the footer of the HTML only if the browser is detected as being an MSIE browser, notably Internet Explorer 6.

To change the copy to reflect a language of your choice simply open the warning.js file and replace the default message text. Current quick translations include: English, German, Hungarian, Spanish and Swedish.


== Screenshots ==

View Screenshots:
http://www.doc4design.com/plugins/ie6-upgrade
 

== Installation ==

To install the plugin just follow these simple steps:

1. Download the plugin and expand it.
2. Copy the IE6-Upgrade-Option folder into your plugins folder ( wp-content/plugins ).
3. Log-in to the WordPress administration panel and visit the Plugins page.
4. Locate the IE6-Upgrade-Option plugin and click on the activate link.
5. The message can be modified by opening the warning.js file and altering   
   Lines: 16-20 (Hungarian) Lines: 24-28 (German) or Lines: 32-36 (English)

== Changelog ==

= 1.1 =
* Includes z-index value of 3000 to keep the lightbox on top of objects
* Includes Spanish translation courtesy of: Melvis Leon
¥ Includes Swedish translation courtesy of: Jimmy (http://www.angrycreative.se/)