<?php
/*
Plugin Name: IE6 Upgrade Option
Plugin URI: http://www.doc4design.com/plugins/ie6-upgrade
Description: Generates an optional IE6 upgrade message as a plugin with output only for MSIE browsers
Version: 2.0
Author: Doc4
Author URI: http://www.doc4design.com
*/

/******************************************************************************

Copyright 2010  Doc4 : info@doc4design.com

This program is free software; you can redistribute it and/or
modify it under the terms of the GNU General Public License
as published by the Free Software Foundation; either version 2
of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program; if not, write to the Free Software
Foundation, Inc., 59 Temple Place, Suite 330, Boston, MA  02111-1307  USA
The license is also available at http://www.gnu.org/copyleft/gpl.html

*********************************************************************************/



add_action('wp_footer','add_footer');

	function add_footer() {
		ob_start();

		echo '<div id="ftf_link"></div>';
		echo '<script src="' . plugins_url("ie6-upgrade-option/warning.js") . '"></script>';
		echo '<script type="text/javascript" charset="ISO-8859-1"> 
				var ftf = new ftf();
 
 				ftf.instance_name 	= "ftf"; 
 
				// This is the url for the images
				ftf.base_url	= "' . plugins_url("ie6-upgrade-option/images/") . '";
 
				ftf.output_to 	 	= "ftf_link"; 
  
				// Replace the English translation with your .json file
				ftf.lang_external	 	 = "' . plugins_url("ie6-upgrade-option/lang/en.json") . '";
 
				// Would you like the script to automatically popup onload?
				ftf.onload 			= true;
 		
				// Not used with this plugin please leave as false
				ftf.analytics 		= false;
 
				// This will only display the popup onload once and is not persistent throughout the site.
				// Requires onload to be set to true as well.
				ftf.onlyonce 		= true;
 
				// The url for the css styles
				ftf.css_external 		= "' . plugins_url("ie6-upgrade-option/style.css") . '";
 
				/*
				The following are the three different approval levels you may set to specific browsers:
					1 = Pass/Recommended
					2 = Pass/Acceptable
					3 = Fail - Displays Warning Message
 
				The following are the default values for each browser but can be easily changed by 
				resetting the values using the following method.
				*/
				ftf.rate_firefox 	= 1; // Firefox
				ftf.rate_chrome 	= 1; // Google Chrome
				ftf.rate_safari		= 1; // Safari
				ftf.rate_opera 		= 2; // Opera
				ftf.rate_ie6 		= 3; // Internet Explorer 6.0
				ftf.rate_ie7 		= 3; // Internet Explorer 7.0
				ftf.rate_ie8 		= 2; // Internet Explorer 8.0
 
				// Execute
				ftf.init();
				</script>';


		ob_get_contents();
	}	




// Never comment out the php ending tag below or the sky will fall on your head
?>