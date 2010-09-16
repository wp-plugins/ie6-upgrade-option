var userLang = (navigator.language) ? navigator.language : navigator.userLanguage; 
/*
UPLOAD THE FILES INTO the js/ie6 directory into your root
INSERT THIS LINES BELOW INTO YOUR HTML FILE, RIGHT AFTER THE <BODY> TAG
<!--[if lte IE 6]>
<script src="/js/ie6/warning.js"></script>
<script>window.onload=function(){ie6("/js/ie6/")}</script>
<![endif]-->

*/

userLang = userLang.substring(0,2);
 switch (userLang)
{

// English
default:
var 
  msg1 = "Did you know this version of Internet Explorer is out of date?",
  msg2 = "We no longer support Internet Explorer 6. Things are bound to be broken and perhaps unusable. We recommend an upgrade to a newer version of Internet Explorer or another web browser. A list of the most popular web browsers can be found below",
  msg3 = "Just click on the icons to get to the download page",
  msg4 = "By closing this window you acknowledge that your experience on this website will be degraded",
  msg5 = "CLOSE";
break

// Replace the default English with your language translation above
// Hungarian
case  (userLang = "hu") :
var 
  msg1 = "Tud róla, hogy az ön böngészője elavult? (Internet Explorer)",
  msg2 = "A lehető legjobb eredmény eléréséhez, javasoljuk a böngésző frissítését. Jelenlegi állapotában, gépe veszélynek van kitéve az esetleges kártevő támadásokkal szemben, a hiányzó javítások miatt. Az alábbi lista tartalmazza a legnépszerűbb ingyenesen elérhető programokat.",
  msg3 = "Az ikonokra kattintva juthat el a letöltő oldalukra",
  msg4 = "A figyelmeztetés bezárásával elfogadja, hogy a megjelenítés esetleges hibáit ",
  msg5 = "Figyelmeztetés bezárása";
break

// Swedish courtesy of Jimmy ( http://www.angrycreative.se/ ) nice site!
case  (userLang = "sv") :
var
  //msg1 = "Visste du att denna versionen av Internet Explorer är föråldrad?", change to this new message
  msg1 = "Visste du att denna versionen av Internet Explorer är utdaterad?",
  msg2 = "Denna webbplats stödjer inte Internet Explorer 6. Sidan kommer sannolikt vara trasig eller till och med oandvändbar. Vi rekommenderar att du uppgraderar till en nyare version av Internet Explorer eller en annan webbläsare. En lista på de mest populära webbläsarna kan ses nedanför",
  msg3 = "Klicka bara på ikonen för att komma till nedladdningssidan",
  msg4 = "Genom att stänga detta fönster bekräftar du att du förstår att din upplevelse av denna webbplats inte är optimal.",
  msg5 = "STÄNG";
break

// Spanish courtesy of: Melvis Leon 
case  (userLang = "es") :
var 
  msg1 = "¿Sabías que esta versión del Internet Explorer esta desactualizada?",
  msg2 = "Este sitio web no es compatible con Internet Explorer 6. Algunas cosas podrían ver se mal y tal vez no funcionar. Se recomienda la actualización a una versión más reciente del Internet Explorer u otro navegador web. Debajo se encuentra una lista de los navegadores web más populares.",
  msg3 = "Solo tienes que hacer clic sobre el icono para ir a la página de descarga",
  msg4 = "Al cerrar esta ventana usted reconoce que su experiencia en este website será degradada",
  msg5 = "CERRAR";
break


// German
case  (userLang = "de") :
var 
  msg1 = "Wissen Sie, dass Ihr Internet Explorer nicht mehr aktuell ist?",
  msg2 = "Um unsere Webseite bestmöglich zu nutzen, empfehlen wir Ihnen Ihren Browser auf eine aktuellere Version zu aktualisieren oder einen anderen Webbrowser zu nutzen. Eine Liste der populärsten Browser finden Sie weiter unten.",
  msg3 = "Klicken Sie auf eines der Symbole um auf die Download-Seite zu gelangen",
  msg4 = "By closing this window you acknowledge that your experience on this website will be degraded",
  msg5 = "Schliessen";
break

} 
 
var br1 = "Internet Explorer 8+",
 br2 = "Firefox 3+",
 br3 = "Safari 3+",
 br4 = "Opera 10+",
 br5 = "Chrome 2.0+",
 url1 = "http://www.microsoft.com/windows/Internet-explorer/",
 url2 = "http://www.mozilla.com/firefox/",
 url3 = "http://www.apple.com/safari/download/",
 url4 = "http://www.opera.com/download/",
 url5 = "http://www.google.com/chrome/",
 imgPath;

function ie6(str) {
    if (readCookie('ie6close') == "true") return;
    
    imgPath = str;
    var _body = document.getElementsByTagName('body')[0];
    var _d = document.createElement('div');
    var _l = document.createElement('div');
    var _h = document.createElement('h1');
    var _p1 = document.createElement('p');
    var _p2 = document.createElement('p');
    var _ul = document.createElement('ul');
    var _li1 = document.createElement('li');
    var _li2 = document.createElement('li');
    var _li3 = document.createElement('li');
    var _li4 = document.createElement('li');
    var _li5 = document.createElement('li');
    var _ico1 = document.createElement('div');
    var _ico2 = document.createElement('div');
    var _ico3 = document.createElement('div');
    var _ico4 = document.createElement('div');
    var _ico5 = document.createElement('div');
    var _lit1 = document.createElement('div');
    var _lit2 = document.createElement('div');
    var _lit3 = document.createElement('div');
    var _lit4 = document.createElement('div');
    var _lit5 = document.createElement('div');
    var _close = document.createElement('div');
    var _closel = document.createElement('a');

    _body.appendChild(_l);
    _body.appendChild(_d);
    _d.appendChild(_h);
    _d.appendChild(_p1);
    _d.appendChild(_p2);
    _d.appendChild(_ul);
    _d.appendChild(_close);
    _close.appendChild(_closel);
    _ul.appendChild(_li1);
    _ul.appendChild(_li2);
    _ul.appendChild(_li3);
    _ul.appendChild(_li4);
    _ul.appendChild(_li5);
    _li1.appendChild(_ico1);
    _li2.appendChild(_ico2);
    _li3.appendChild(_ico3);
    _li4.appendChild(_ico4);
    _li5.appendChild(_ico5);
    _li1.appendChild(_lit1);
    _li2.appendChild(_lit2);
    _li3.appendChild(_lit3);
    _li4.appendChild(_lit4);
    _li5.appendChild(_lit5);
    _d.setAttribute('id','_d');
    _l.setAttribute('id','_l');
    _h.setAttribute('id','_h');
    _p1.setAttribute('id','_p1');
    _p2.setAttribute('id','_p2');
    _ul.setAttribute('id','_ul');
    _li1.setAttribute('id','_li1');
    _li2.setAttribute('id','_li2');
    _li3.setAttribute('id','_li3');
    _li4.setAttribute('id','_li4');
    _li5.setAttribute('id','_li5');
    _ico1.setAttribute('id','_ico1');
    _ico2.setAttribute('id','_ico2');
    _ico3.setAttribute('id','_ico3');
    _ico4.setAttribute('id','_ico4');
    _ico5.setAttribute('id','_ico5');
    _lit1.setAttribute('id','_lit1');
    _lit2.setAttribute('id','_lit2');
    _lit3.setAttribute('id','_lit3');
    _lit4.setAttribute('id','_lit4');
    _lit5.setAttribute('id','_lit5');
    _close.setAttribute('id','_close');
    _closel.setAttribute('id','_closel');
    _closel.setAttribute('href','#');

    var _width = document.documentElement.clientWidth;
    var _height = document.documentElement.clientHeight;

    var _dl = document.getElementById('_l');
    _dl.style.width =  _width+"px";
    _dl.style.height = _height+"px";
    _dl.style.position = "absolute";
    _dl.style.top = "0px";
    _dl.style.left = "0px";
    _dl.style.filter = "alpha(opacity=50)";
    _dl.style.background = "#fff";

    var _dd = document.getElementById('_d');
    _ddw = 650;
    _ddh = 260;
    _dd.style.width = _ddw+"px";    
    _dd.style.height = _ddh+"px";
    _dd.style.position = "absolute";
    _dd.style.top1 = ((_height-_ddh)*0.2)+"px";
    _dd.style.left1 = ((_width-_ddw)/2)+"px";
	_dd.style.top = 160+"px";
    _dd.style.left = 00+"px";
    _dd.style.padding = "20px";
    _dd.style.background = "#fff";
	_dd.style.zIndex = "3000";
    _dd.style.border = "1px solid #ccc";
    _dd.style.fontFamily = "'Lucida Grande','Lucida Sans Unicode',Arial,Verdana,sans-serif";
    _dd.style.listStyleType = "none";
    _dd.style.color = "#4F4F4F";
    _dd.style.fontSize = "12px";
    _h.appendChild(document.createTextNode(msg1));
	
	
	if (_dd.style.top1>=_dd.style.top){_dd.style.top=_dd.style.top1;}
	if (_dd.style.left1>=_dd.style.left){_dd.style.left=_dd.style.left1;}
	
    var _hd = document.getElementById('_h');
    _hd.style.display = "block";
    _hd.style.fontSize = "1.3em";
    _hd.style.margin = "0 00.5em 10px";
    _hd.style.color = "#333";
    _hd.style.fontFamily = "Helvetica,Arial,sans-serif";
    _hd.style.fontWeight = "bold";
    _p1.appendChild(document.createTextNode(msg2));

    var _p1d = document.getElementById('_p1');
    _p1d.style.margin = "0 0 1em 10px";
    _p2.appendChild(document.createTextNode(msg3));

    var _p2d = document.getElementById('_p2');
    _p2d.style.margin = "0 0 1em 10px";

    var _uld = document.getElementById('_ul');
    _uld.style.listStyleImage = "none";
    _uld.style.listStylePosition = "outside";
    _uld.style.listStyleType = "none";
    _uld.style.margin = "0px auto";
    _uld.style.padding = "0px";
    _uld.style.paddingLeft = "10px";

    var _li1d = document.getElementById('_li1');
    var _li2d = document.getElementById('_li2');
    var _li3d = document.getElementById('_li3');
    var _li4d = document.getElementById('_li4');
    var _li5d = document.getElementById('_li5');
    var _li1ds = _li1d.style;
    var _li2ds = _li2d.style;
    var _li3ds = _li3d.style;
    var _li4ds = _li4d.style;
    var _li5ds = _li5d.style;

    _li1ds.background = _li2ds.background = _li3ds.background = _li4ds.background = _li5ds.background = "transparent url('"+imgPath+"background_browser.gif') no-repeat scroll left top";
    _li1ds.cursor = _li2ds.cursor = _li3ds.cursor = _li4ds.cursor = _li5ds.cursor = "pointer";
    _li1d.onclick = function() {window.location = url1 };
     _li2d.onclick = function() {window.location = url2 };
     _li3d.onclick = function() {window.location = url3 };
     _li4d.onclick = function() {window.location = url4 };
     _li5d.onclick = function() {window.location = url5 };
     _li1ds.styleFloat = _li2ds.styleFloat = _li3ds.styleFloat = _li4ds.styleFloat = _li5ds.styleFloat = "left";
    _li1ds.width = _li2ds.width = _li3ds.width = _li4ds.width = _li5ds.width = "120px";
    _li1ds.height = _li2ds.height = _li3ds.height = _li4ds.height = _li5ds.height = "122px";
    _li1ds.margin = _li2ds.margin = _li3ds.margin = _li4ds.margin = _li5ds.margin = "0 10px 10px 0";
    
    var _ico1d = document.getElementById('_ico1');
    var _ico2d = document.getElementById('_ico2');
    var _ico3d = document.getElementById('_ico3');
    var _ico4d = document.getElementById('_ico4');
    var _ico5d = document.getElementById('_ico5');
    var _ico1ds = _ico1d.style;
    var _ico2ds = _ico2d.style;
    var _ico3ds = _ico3d.style;
    var _ico4ds = _ico4d.style;
    var _ico5ds = _ico5d.style;
    
    _ico1ds.width = _ico2ds.width = _ico3ds.width = _ico4ds.width = _ico5ds.width = "100px";
    _ico1ds.height = _ico2ds.height = _ico3ds.height = _ico4ds.height = _ico5ds.height = "100px";
    _ico1ds.margin = _ico2ds.margin = _ico3ds.margin = _ico4ds.margin = _ico5ds.margin = "1px auto";
    _ico1ds.background = "transparent url('"+imgPath+"browser_ie.gif') no-repeat scroll left top";
    _ico2ds.background = "transparent url('"+imgPath+"browser_firefox.gif') no-repeat scroll left top";
    _ico3ds.background = "transparent url('"+imgPath+"browser_safari.gif') no-repeat scroll left top";
    _ico4ds.background = "transparent url('"+imgPath+"browser_opera.gif') no-repeat scroll left top";
    _ico5ds.background = "transparent url('"+imgPath+"browser_chrome.gif') no-repeat scroll left top";
    _lit1.appendChild(document.createTextNode(br1));
    _lit2.appendChild(document.createTextNode(br2));
    _lit3.appendChild(document.createTextNode(br3));
    _lit4.appendChild(document.createTextNode(br4));
    _lit5.appendChild(document.createTextNode(br5));
    
    var _lit1d = document.getElementById('_lit1');
    var _lit2d = document.getElementById('_lit2');
    var _lit3d = document.getElementById('_lit3');
    var _lit4d = document.getElementById('_lit4');
    var _lit5d = document.getElementById('_lit5');
    var _lit1ds = _lit1d.style;
    var _lit2ds = _lit2d.style;
    var _lit3ds = _lit3d.style;
    var _lit4ds = _lit4d.style;
    var _lit5ds = _lit5d.style;
    
    _lit1ds.color = _lit2ds.color = _lit3ds.color = _lit4ds.color = _lit5ds.color = "#808080";
    _lit1ds.fontSize = _lit2ds.fontSize = _lit3ds.fontSize = _lit4ds.fontSize = _lit5ds.fontSize = "0.8em";
    _lit1ds.height = _lit2ds.height = _lit3ds.height = _lit4ds.height = _lit5ds.height = "18px";
    _lit1ds.lineHeight = _lit2ds.lineHeight = _lit3ds.lineHeight = _lit4ds.lineHeight = _lit5ds.lineHeight = "17px";
    _lit1ds.margin = _lit2ds.margin = _lit3ds.margin = _lit4ds.margin = _lit5ds.margin = "1px auto";
    _lit1ds.width = _lit2ds.width = _lit3ds.width = _lit4ds.width = _lit5ds.width = "118px";
    _lit1ds.textAlign = _lit2ds.textAlign = _lit3ds.textAlign = _lit4ds.textAlign = _lit5ds.textAlign = "center";
    
    var _closed = document.getElementById('_close');
    var _closeld = document.getElementById('_closel');
    var _closeds = _closed.style;
    var _closelds = _closeld.style;
    
	_closeds.margin = "0 0 0 10px";
	_closelds.border = "3px solid #EBEBEB";
	_closelds.background = "#2D2D2D";
    _closelds.color = "#FFF";
    _closelds.display = "block";
	_closelds.font = "bold 15px Georgia,serif";
    _closelds.width = "110px";
    _closelds.width = "110px";
	_closelds.padding = "10px 0";
	_closelds.textAlign = "center";
	_closelds.margin = "0 0 10px";
    
    _closed.appendChild(document.createTextNode(msg4));
    _closeld.appendChild(document.createTextNode(msg5));
    
    _closeld.onmouseover = function() {
        _closelds.border = "3px solid #EBEBEB";
		_closelds.background = "#2D2D2D";
    	_closelds.color = "#FFF";
    	_closelds.display = "block";
		_closelds.font = "bold 15px Georgia,serif";
    	_closelds.width = "110px";
		_closelds.padding = "10px 0";
		_closelds.textAlign = "center";
		_closelds.textDecoration = "none";
		_closelds.margin = "12px 0 10px 0";
    };
    
    _closeld.onmouseout = function() {
        _closelds.border = "3px solid #EBEBEB";
		_closelds.background = "#2D2D2D";
    	_closelds.color = "#FFF";
    	_closelds.display = "block";
		_closelds.font = "bold 15px Georgia,serif";
    	_closelds.width = "110px";
		_closelds.padding = "10px 0";
		_closelds.textAlign = "center";
		_closelds.textDecoration = "none";
		_closelds.margin = "12px 0 10px 0";
    };
    
    _closeld.onclick = function() {
        _l.style.display = "none";
        _d.style.display = "none";
        document.cookie = 'ie6close=true; expires=; path=/';
        createCookie('ie6close','true','30');
    };
};

function createCookie(name,value,days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime()+(days*24*60*60*1000));
        var expires = "; expires="+date.toGMTString();
    }
    else var expires = "";
    document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function eraseCookie(name) {
    createCookie(name,"",-1);
}