=== IE6 Upgrade Option ===
Contributors: Doc4, Free the Foxes
Donate link: http://www.doc4design.com/donate
Tags: ie6, internet explorer, internet explorer 6, ie6 warning, ie6 message, no ie6, no more ie6, ie6 upgrade, explorer upgrade, internet explorer upgrade, internet explorer message, ie6 close button, explorer destroyer, browser warning message, browser warning, ie7, ie8, opera, firefox, safari, chrome, google chrome
Requires at least: 2.8
Tested up to: 3.1
Stable tag: 2.0


== Description ==

= Plugin URL =
http://www.doc4design.com/plugins/ie6-upgrade/

With version 2.0 IE6 Upgrade Option utilizes the 25K script created by Free the Foxes: http://www.freethefoxes.com/ as a WordPress plugin. I originally preferred another, smaller 7K script but it's limits had clearly been met in terms of language support ease-of-use and options for warning messages on browsers other than IE6. We have kept the original, large warning message design with a newer script in the backend. 

The warning message is displayed using a Lightbox effect hovering over the page content. The idea is to display a warning message, simply and politely informing the user that their browser is out of date while providing links to download newer, more optimal browser choices. Optional browser links included are: IE8, Firefox, Opera, Safari, and Chrome. While this plugin was originally intended for use with IE6 it has now been expanded, due to popular demand, to include a warning message capable of being displayed in any browser. Don't like Firefox? Simply adjust the FTF rating and ask your users to use IE8. This is not limited to a a single browser either, feel free to turn on the warning for IE6, IE7 and Chrome simultaneously.

The web page will remain visible through the transparent Lightbox effect and the user is faced with the option of closing the window agreeing that their experience may be severely degraded. The javascript then installs a cookie preventing the window from appearing again. The script is loaded in the site footer in two ways: selectively (as in the case of the basic setup) or permanent (if using multiple browsers or browsers other than IE6).

To change the text to reflect the language of your choice simply open the "lang" folder and create your own .json file to replace the default message, then be sure to add your new language code to the ie6-upgrade-option.php file. Current quick translations include: English, German, Spanish, Hungarian, Swedish, Brazilian Portuguese, Dutch and Norwegian Bokm&aring;l.


== Screenshots ==
View Screenshots:
http://www.doc4design.com/plugins/ie6-upgrade
 

== Installation ==
=Install=
1. Download the plugin and expand it.
2. Copy the ie6-ppgrade-option folder into your plugins folder ( wp-content/plugins ).
3. Log-in to the WordPress administration panel and visit the Plugins page.
4. Locate the ie6-upgrade-option plugin and click on the activate link.

= Translations =
1. Open the "lang" folder and duplicate one of the language files.
2. Alter the warning message to the language of your choice.
3. Change the file name to your language code: "en.json" for English.
4. Upload the file into the "lang" folder.
5. Open the "ie6-upgrade-option.php" file.
6. Change line 60 by replacing the "en.json" url with your new language file name.

= Additional Browser Warnings =
Browser warnings can be applied to browsers other than IE6 by following a few simple instructions in the "ie6-upgrade-option.php" file.


== Changelog ==

=2.0=
* Instituted a newer script via Free The Foxes
* Better, easier language support
* Warning messages for singular or multiple browsers

= 1.9 =
* Added Dutch Translation courtesy of: Marc Verbeeck&oslash;y
* Added Brazilian Portuguese Translation courtesy of: Raoni


= 1.7 =
* Added Spanish Translations courtesy of: Melvis Leon
* Added Swedish Translations courtesy of: Jimmy

= 1.1 =
* Includes z-index value of 3000 to keep the lightbox on top of objects


== Other Notes ==

= Recent Donations = 
* Bill Hollings


= Translations =
* Dutch: Marc Verbeeck - http://www.rodenbachschool.be/
* Norwegian Bokm&aring;l: Kjetil Flekk&oslash;y - http://www.kjetil@dolcevita.no
* Brazilian Portuguese: Raoni - http://www.agenciaad.com.br
* Spanish: Melvis Leon
* Swedish: Jimmy - http://www.angrycreative.se/
