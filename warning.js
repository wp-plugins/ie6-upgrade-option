function ftf() {
	var b = this,
	o = false,
	m = "",
	k = 3,
	e = {
		text_download: "Download",
		text_upgrade_now: "Upgrade Now",
		text_you: "YOU",
		button_continue: "Continue Anyway",
		button_close: "Close",
		text_you_are_using: "You are using",
		message_failed: "It is strongly recommended that you use an alternative browser.",
		message_acceptable: "Not bad. Try using our other recommendations.",
		message_recommended: "Good choice. Stick with it.",
		message_error: "Sorry, something went wrong. We're fixing it.",
		status_loading: "Loading...",
		status_approved: "Browser Approved.",
		status_acceptable: "Browser Acceptable.",
		status_failed: "Browser Failed.",
		link_check: "Check"
	},
	j = {
		download: {
			firefox: "http://www.mozilla.com/en-US/firefox/firefox.html",
			chrome: "http://www.google.com/chrome/index.html?hl=en-GB&brand=CHMA&utm_campaign=en_gb&utm_source=en_gb-ha-apac-in-bk&utm_medium=ha",
			opera: "http://www.opera.com/download/",
			safari: "http://www.apple.com/safari/download/",
			ie8: "http://www.microsoft.com/windows/internet-explorer/worldwide-sites.aspx"
		}
	};
	b.instance_name = "ftf";
	b.output_to = "ftf_link";
	b.lang = "en";
	b.icon_size = "regular";
	b.css_external = "";
	b.lang_external = "";
	b.onload = true;
	b.analytics = true;
	b.onlyonce = false;
	b.rate_firefox = 1;
	b.rate_chrome = 1;
	b.rate_safari = 1;
	b.rate_opera = 2;
	b.rate_ie6 = 3;
	b.rate_ie7 = 3;
	b.rate_ie8 = 2;
	b.get_obj = function (a) {
		return document.getElementById(a)
	};
	b.get_cookie = function (a) {
		if (document.cookie.length > 0) {
			cookiestart = document.cookie.indexOf(a + "=");
			if (cookiestart != -1) {
				cookiestart = cookiestart + a.length + 1;
				cookieend = document.cookie.indexOf(";", cookiestart);
				if (cookieend == -1) cookieend = document.cookie.length;
				return unescape(document.cookie.substring(cookiestart, cookieend))
			}
		}
		return null
	};
	b.set_cookie = function (a, d, c) {
		if (navigator.cookieEnabled) {
			var f = new Date;
			f.setDate(f.getDate() + c);
			document.cookie = a + "=" + escape(d) + (c == null ? "": ";expires=" + f.toGMTString())
		}
	};
	b.get_wh = function () {
		var a = 0,
		d = 0;
		if (typeof window.innerWidth == "number") {
			a = window.innerWidth;
			d = window.innerHeight
		} else if (document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight)) {
			a = document.documentElement.clientWidth;
			d = document.documentElement.clientHeight
		} else if (document.body && (document.body.clientWidth || document.body.clientHeight)) {
			a = document.body.clientWidth;
			d = document.body.clientHeight
		}
		return [a, d]
	};
	b.get_scroll = function () {
		var a = 0,
		d = 0;
		if (typeof window.pageYOffset == "number") {
			d = window.pageYOffset;
			a = window.pageXOffset
		} else if (document.body && (document.body.scrollLeft || document.body.scrollTop)) {
			d = document.body.scrollTop;
			a = document.body.scrollLeft
		} else if (document.documentElement && (document.documentElement.scrollLeft || document.documentElement.scrollTop)) {
			d = document.documentElement.scrollTop;
			a = document.documentElement.scrollLeft
		}
		return [a, d]
	};
	b.check = function () {
		if (document.getElementById("ftf_page") != null) {
			var a = b.get_scroll()[1] + b.get_wh()[1];
			document.getElementById("ftf_page").style.display = "block";
			document.getElementById("ftf_page").style.top = "0px";
			document.getElementById("ftf_page").style.height = a + "px"
		}
		scroll(0, 0);
		o = true
	};
	b.close_modal = function () {
		document.getElementById("ftf_page").style.display = "none";
		o = false
	};
	b.continue_anyway = function () {
		b.set_cookie("ftf_popup", "Shown", 365);
		b.close_modal()
	};
	b.get_browser_version = function (a, d) {
		var c = "";
		if (/firefox[\/\s](\d+\.\d+)/.test(navigator.userAgent.toLowerCase())) c = RegExp.$1;
		else if (/msie (\d+\.\d+);/.test(navigator.userAgent.toLowerCase())) c = RegExp.$1;
		else if (RegExp(" AppleWebKit/").test(navigator.userAgent)) {
			c = navigator.userAgent;
			var f = c.indexOf("Safari"),
			g = c.substr(0, f).lastIndexOf("/") + 1;
			c = c.substr(g, f - g);
			navigator.userAgent.toLowerCase().indexOf("chrome");
			c = c
		} else if (RegExp("Opera/").test(navigator.userAgent)) {
			c = navigator.userAgent;
			f = c.indexOf("Version/");
			c = c = c.substr(f + 8, 6)
		} else c = navigator.appVersion;
		if (a) {
			array_version = c.split(".");
			if (array_version.length > 1) {
				c = array_version[0];
				if (d) c += ".";
				c += array_version[1]
			}
		}
		return c
	};
	b.get_browser_name = function () {
		var a = "Unknown";
		if (b.is_firefox) a = "Firefox";
		if (b.is_ie()) a = "Internet Explorer";
		if (b.is_opera()) a = "Opera";
		if (b.is_chrome()) a = "Chrome";
		if (b.is_safari()) a = "Safari";
		return a
	};
	b.is_ie = function () {
		var a = false;
		if (/msie (\d+\.\d+);/.test(navigator.userAgent.toLowerCase())) if (new Number(RegExp.$1) > 0) a = true;
		return a
	};
	b.is_ie6 = function () {
		var a = false;
		if (/msie (\d+\.\d+);/.test(navigator.userAgent.toLowerCase())) if (new Number(RegExp.$1) == 6) a = true;
		return a
	};
	b.is_ie7 = function () {
		var a = false;
		if (/msie (\d+\.\d+);/.test(navigator.userAgent.toLowerCase())) if (new Number(RegExp.$1) == 7) a = true;
		return a
	};
	b.is_ie8 = function () {
		var a = false;
		if (/msie (\d+\.\d+);/.test(navigator.userAgent.toLowerCase())) if (new Number(RegExp.$1) == 8) a = true;
		return a
	};
	b.is_firefox = function () {
		var a = false;
		if (/firefox[\/\s](\d+\.\d+)/.test(navigator.userAgent.toLowerCase())) if (new Number(RegExp.$1) >= 0) a = true;
		return a
	};
	b.is_safari = function () {
		var a = false;
		a = navigator.userAgent.toLowerCase().indexOf("chrome") > -1;
		if (/safari[\/\s](\d+\.\d+)/.test(navigator.userAgent.toLowerCase())) {
			var d = new Number(RegExp.$1);
			a = !a && d > 0 ? true: false
		}
		return a
	};
	b.is_chrome = function () {
		var a = false;
		return a = navigator.userAgent.toLowerCase().indexOf("chrome") > -1
	};
	b.is_opera = function () {
		var a = false;
		if (/opera[\/\s](\d+\.\d+)/.test(navigator.userAgent.toLowerCase())) if (new Number(RegExp.$1) > 0) a = true;
		return a
	};
	b.css = function () {
		var a = document.createElement("link");
		b.css_external != "" ? a.setAttribute("href", b.css_external) : a.setAttribute("href", "http://code.freethefoxes.com/latest.css");
		a.setAttribute("rel", "stylesheet");
		a.setAttribute("type", "text/css");
		document.body.appendChild(a)
	};
	b.footer = function () {
		if (document.getElementById(b.output_to) == null) {
			var a = document.createElement("span");
			a.setAttribute("id", "ftf_link");
			a.innerHTML = e.status_loading;
			document.body.appendChild(a)
		}
	};
	b.build = function () {
		var a = [],
		d = ftf.base_url;
		//d = "http://code.freethefoxes.com/" + b.icon_size;
		m = b.get_browser_name() + " " + b.get_browser_version(true, true);
		Browsers = [];
		Browsers[Browsers.length] = b.browser("FireFox", b.rate_firefox, d + "firefox.gif", j.download.firefox, " 3.6", b.is_firefox());
		Browsers[Browsers.length] = b.browser("Chrome", b.rate_chrome, d + "chrome.gif", j.download.chrome, " 4.1", b.is_chrome());
		Browsers[Browsers.length] = b.browser("Safari", b.rate_safari, d + "safari.gif", j.download.safari, " 4.0", b.is_safari());
		Browsers[Browsers.length] = b.browser("Opera", b.rate_opera, d + "opera.gif", j.download.opera, " 10.62", b.is_opera());
		Browsers[Browsers.length] = b.is_ie6() ? b.browser("Internet Explorer", b.rate_ie6, d + "/ie6.gif", j.download.ie8, " 8.0", b.is_ie6()) : b.is_ie7() ? b.browser("Internet Explorer", b.rate_ie7, d + "/ie7.gif", j.download.ie8, "8.0", b.is_ie7()) : b.browser("Internet Explorer", b.rate_ie8, d + "/ie8.gif", j.download.ie8, "8.0", b.is_ie8());
		var c = [],
		f = [],
		g = [];
		for (i = 0; i < Browsers.length; i++) {
			browser = Browsers[i];
			switch (k) {
			case 1:
				c.push(Browsers[i]);
				break;
			case 2:
				f.push(Browsers[i]);
				break;
			case 3:
				g.push(Browsers[i]);
				break;
			default:
				g.push(Browsers[i]);
				break
			}
		}
		d = document.createElement("div");
		d.setAttribute("id", "ftf_page");
		a.push('<div id="ftf_background" onclick="' + b.instance_name + '.close_modal()"></div>');
		a.push('<div id="ftf_outer">');
		a.push('<div id="ftf_inner" >');
		switch (k) {
		case 1:
			a.push('<div id="ftf_header" class="ftf_recommended">');
			a.push(e.text_you_are_using + ' <span class="ftf_browser_name">' + m + "</span><br />");
			a.push(e.message_recommended);
			a.push("</div>");
			a.push('<div class="ftf_description">');
			a.push(e.message_description);
			a.push(e.message_warning);
			a.push("</div>");
			break;
		case 2:
			a.push('<div id="ftf_header" class="ftf_acceptable">');
			a.push(e.text_you_are_using + ' <span class="ftf_browser_name">' + m + "</span><br />");
			a.push(e.message_acceptable);
			a.push("</div>");
			a.push('<div class="ftf_description">');
			a.push(e.message_description);
			a.push(e.message_warning);
			a.push("</div>");
			break;
		case 3:
			a.push('<div id="ftf_header" class="ftf_failed">');
			a.push(e.text_you_are_using + ' <span class="ftf_browser_name">' + m + "</span><br />");
			a.push(e.message_failed);
			a.push("</div>");
			a.push('<div class="ftf_description">');
			a.push(e.message_description);
			a.push(e.message_warning);
			a.push("</div>");
			break;
		default:
			a.push('<div id="ftf_header" class="ftf_failed">');
			a.push(e.message_error);
			a.push("</div>");
			a.push('<div class="ftf_description">');
			a.push(e.message_description);
			a.push(e.message_warning);
			a.push("</div>");
			break
		}
		a.push('<div id="ftf_body_outer">');
		a.push('<div id="ftf_body_inner">');
		a.push(c.join(" "));
		a.push(f.join(" "));
		a.push(g.join(" "));
		a.push("</div>");
		a.push("</div>");
		a.push('<div id="ftf_footer">');
		//a.push('<div class="ftf_left"><a href="http://www.freethefoxes.com" target=_blank>FreeTheFoxes.com</a></div>');
		a.push('<div class="ftf_right"><a href="Javascript:' + b.instance_name + '.continue_anyway()">');
		ftf_popup_shown = b.get_cookie("ftf_popup");
		ftf_popup_shown == null || ftf_popup_shown == "" ? a.push(e.button_continue) : a.push(e.button_close);
		a.push("</a></div>");
		a.push("<br />");
		a.push("</div>");
		a.push("</div>");
		a.push("</div>");
		c = document.getElementById(b.output_to);
		f = [];
		switch (k) {
		case 1:
			f.push(e.status_approved);
			break;
		case 2:
			f.push(e.status_acceptable);
			break;
		case 3:
			f.push(e.status_failed);
			break;
		default:
			f.push("FTF Error");
			break
		}
		f.push(" <a href='Javascript:" + b.instance_name + ".check();'>" + e.link_check + "</a>");
		if (c == null) {
			g = document.createElement("div");
			g.setAttribute("id", "ftf_link");
			g.innerHTML = e.status_loading;
			document.body.appendChild(g)
		}
		c.innerHTML = f.join(" ");
		if (b.analytics) {
			c = [];
			c.push("browserName=" + b.get_browser_name());
			c.push("&appCodeName= " + navigator.appCodeName);
			c.push("&appVersion= " + navigator.appVersion);
			c.push("&appMinorVersion= " + b.get_browser_version(true, true));
			c.push("&appName= " + navigator.appName);
			c.push("&cookieEnabled= " + navigator.cookieEnabled);
			c.push("&cpuClass= " + navigator.cpuClass);
			c.push("&platform= " + navigator.platform);
			c.push("&appCodeName= " + navigator.appCodeName);
			c.push("&plugins= " + navigator.plugins);
			c.push("&systemLanguage= " + navigator.systemLanguage);
			c.push("&userAgent= " + navigator.userAgent);
			c.push("&userLanguage= " + navigator.userLanguage);
			c.push("&width= " + screen.width);
			c.push("&height= " + screen.height);
			a.push("<span style='display:none'><img src='http://code.freethefoxes.com/hit.php?" + c.join(" ") + "'/></span>")
		}
		d.innerHTML = a.join(" ");
		document.body.appendChild(d);
		d.style.display = "none";
		setTimeout(function () {
			var n = b.get_cookie("ftf_popup") == "Shown";
			if (b.onload && k == 3) if (!b.onlyonce || b.onlyonce && !n) b.check()
		},
		0)
	};
	b.browser = function (a, d, c, f, g, n) {
		var h = [],
		l = "ftf_browser_link";
		switch (d) {
		case 1:
			l += " recommended";
			break;
		case 2:
			l += " appectable";
			break;
		case 3:
			l += " failed";
			break
		}
		if (n) {
			k = d;
			l += " you"
		}
		h.push('<a href="' + f + '" class="' + l + '" target="_blank" onclick="setTimeout(function(){' + b.instance_name + '.close_modal();},1000);">');
		h.push('<div class="ftf_browser_icon"><img src="' + c + '" border="0" /></div>');
		h.push('<div class="ftf_browser_name">' + a + g +"</div>");
		//h.push('<div class="ftf_browser_version">latest v' + g + "</div>");
		//if (n) Number(g) > b.get_browser_version(true, true) ? h.push('<div class="ftf_browser_download"><b>' + e.text_upgrade_now + "</b></div>") : h.push('<div class="ftf_browser_download"><b>' + e.text_you + "</b></div>");
		//else if (d < 3) d == 1 ? h.push('<div class="ftf_browser_download"><b>' + e.text_download + "</b></div>") : h.push('<div class="ftf_browser_download">' + e.text_download + "</div>");
		//else h.push('<div class="ftf_browser_download">&nbsp;</div>');
		h.push("</a>");
		return h.join(" ")
	};
	b.init = function () {
		if (b.lang_external.length != 0) {
			b.ajax();
			setTimeout(function () {
				b.css();
				b.footer();
				b.build()
			},
			1E3)
		} else setTimeout(function () {
			b.css();
			b.footer();
			b.build()
		},
		500)
	};
	b.ajax = function () {
		var a = window.XMLHttpRequest ? new XMLHttpRequest: new ActiveXObject("Microsoft.XMLHTTP");
		a.open("get", b.lang_external, true);
		a.setRequestHeader("Content-Type", "application/json");
		a.onreadystatechange = function () {
			if (a.readyState == 4) if (a.status == 200) e = eval("(" + a.responseText + ")")
		};
		a.send("")
	}
};