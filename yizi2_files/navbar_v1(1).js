/* var yzzNav = new YzzNavigate("c_sublinks");
yzzNav.run();
switch(document.location.host.split('.')[0]) {
	case 'card': break;
	case 'bbs': break;
	default:cCheckLogin();
}
cLoadEvent();
if(('/' === document.location.pathname && ('qt.yzz.cn' !== document.location.hostname)) || 'http://news.yzz.cn/ku/' === document.location.href) {
document.write('<style type="text/css">#QT{ width:119px; height:202px; position:fixed; _position:absolute; overflow:hidden; z-index:99;}#QT img{ display:block; width:119px; height:202px; border:none;}#QT .qtClose{ position:absolute; top:0; right:0; cursor:pointer;}</style><div id="QT"><span class="qtClose" onclick="qtClose(\'QT\')">¡Á</span><a href="http://qt.yzz.cn/" target="_blank"><img src="http://www.yzz.cn/home/theme/2013/03/img/qt.gif" ></a></div>');
(function(){
var _qt=document.getElementById("QT");
var wleft=(window.screen.width-980)/2+980;
var wtop=(document.documentElement.clientHeight-_qt.offsetHeight)/2+60;
var srtop=0;
_qt.style.cssText="left:"+wleft+"px;display:block;top:"+wtop+"px";
function qtScrolling(){
	srtop=document.body.scrollTop||document.documentElement.scrollTop;
	if (!-[1,]&&!window.XMLHttpRequest) {
		srtop=srtop+wtop;
		_qt.style.top=srtop;
	}
}
function addEvent(obj, e, add) {
	if (!obj || !e || !add) {
		return false;
	}
	if(window.addEventListener) { 
		obj.addEventListener(e, add, false);
	} else {
		obj.attachEvent('on' + e, add);       
	}
}
addEvent(window, 'scroll', qtScrolling);
})()
function qtClose(thisqt){
	document.getElementById(thisqt).style.display="none";
}
}
*/