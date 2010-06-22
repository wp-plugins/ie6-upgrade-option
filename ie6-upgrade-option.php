<?php
/*
Plugin Name: IE6 Upgrade Option
Plugin URI: http://www.doc4design.com/plugins/ie6-upgrade
Description: Generates an optional IE6 upgrade message as a plugin with output only for MSIE browsers
Version: 1.5
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

class ie6option {
	
	function add_footer() {
		ob_start();
		echo "<!--[if lte IE 6]>";
		echo '<script src="' . plugins_url("ie6-upgrade-option/warning.js") . '"></script>';
		echo '<script>window.onload=function(){ie6("' . plugins_url("ie6-upgrade-option/images/") . '")}</script>';
		echo "<![endif]-->";
		ob_get_contents();
	}	
}

// Only display the code if MSIE Browser
$browser = strtolower($_SERVER['HTTP_USER_AGENT']);  
if(ereg("msie", $browser)){
	$plugin_dir = basename(dirname(__FILE__));
	load_plugin_textdomain('ie6option', 'wp-content/plugins/' . $plugin_dir, $plugin_dir );
	
	$obj_ie6option = new ie6option();
	add_action('wp_footer', array($obj_ie6option, 'add_footer'));	
}
?>