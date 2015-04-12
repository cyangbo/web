/*
 *  @update: 去掉右下角强弹三次的约定
 *           修改右下角弹窗广告位置(由上面移动到下面)
              
             修改右下角浮窗zIndex,使其在对联广告之下
 *  @time:   2014-04-04 13:54:25
 *  @updatVia:  Yaolulin
 *  @email:     yaolulin\@//\\yezizhu.com
 *
 **/


/*base query*/
//获取document下的class
function getClass(parent,sclass){
    var classelem=[];
    var aelm=parent.getElementsByTagName('*');
    for(var i=0; i<aelm.length;i++){
        if(aelm[i].className==sclass  || aelm[i].className.indexOf(sclass+' ') != -1){
            classelem.push(aelm[i]);
        }
    }
    return classelem;
}

function vquery(vag){
    //window.onload=vag;
    //成员属性，一个数组用来存放节点(面向对象)
    this.elements=[];
    switch (typeof vag)
    {
        //typeof function
        case 'function':
            addEvent(window,'load',vag);//load是方法，onload是事件
            break;
        //typeof id
        case 'string':
            switch(vag.charAt(0)){
                case '#':
                    var obj=document.getElementById(vag.substring(1));
                    this.elements.push(obj);
                    break;
                case '.': 
                    //返回的数组
                    this.elements=getClass(document,vag.substring(1));
                    break;
                default: //TagName
                    this.elements=document.getElementsByTagName(vag);
                    break;
            }
            break;
        //如果传进来的是一个对象
        case 'object':
            this.elements.push(vag);
    }
    return this.elements;
}

//add selectClass //用于选择class
function selectClass(vag){
    
    this.elements=[];
    if(vag.charAt(0) == '.'){
        
        this.elements=getAllClass(document,vag.substring(1));
        
    }
    return this.elements;
}

function getAllClass(parent,sclass){
    
    var classelem=[];
    var aelm=parent.getElementsByTagName('*');
    for(var i=0; i<aelm.length;i++){
        if(aelm[i].className==sclass  || aelm[i].className.indexOf(sclass) != -1){
            
            classelem.push(aelm[i]);
        }
    }
    
    return classelem;
}
/*base quert end*/









if (typeof(Yzz) == 'undefined')
    var Yzz = {
        $: function(id) {
            return document.getElementById(id);
        }
    };

Yzz.yktj = {
    scrollTop: function() {
        if (!document.body.scrollTop)
            return document.documentElement.scrollTop;
        else
            return document.body.scrollTop;
    },
    getWidthAndHeight: function() { // shawl.qiu code, return Array
        var myWidth = 0,
            myHeight = 0;
        if (typeof(window.innerWidth) == 'number') { //Non-IE
            myWidth = window.innerWidth;
            myHeight = window.innerHeight;
        } else if (document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight)) { //IE 6
            myWidth = document.documentElement.clientWidth;
            myHeight = document.documentElement.clientHeight;
        } else if (document.body && (document.body.clientWidth || document.body.clientHeight)) { //IE 4
            myWidth = document.body.clientWidth;
            myHeight = document.body.clientHeight;
        }
        return {
            width: myWidth,
            height: myHeight
        };
    },
    setCookie: function(NameOfCookie, value, expiredays) {
        var ExpireDate = new Date();
        ExpireDate.setTime(ExpireDate.getTime() + (expiredays * 3600000));
        document.cookie = NameOfCookie + "=" + escape(value) + ";domain=" + escape(document.location.href.match(/^http\:\/\/\w+\.yzz\.cn\//) ? "yzz.cn" : "yezizhu.com") + ";path=/" + ((expiredays == null) ? "" : "; expires=" + ExpireDate.toGMTString());
    },

    //获取cookie值
    getCookie: function(NameOfCookie) {
        if (document.cookie.length > 0) {
            begin = document.cookie.indexOf(NameOfCookie + "=");
            if (begin != -1) {
                begin += NameOfCookie.length + 1; //cookie值的初始位置
                end = document.cookie.indexOf(";", begin); //结束位置
                if (end == -1) end = document.cookie.length; //没有;则end为字符串结束位置
                return unescape(document.cookie.substring(begin, end));
            }
        }
        return null;
    },

    //删除cookie
    delCookie: function(NameOfCookie) {
        if (Yzz.yktj.getCookie(NameOfCookie)) {
            document.cookie = NameOfCookie + "=" +
                "; expires=Thu, 01-Jan-70 00:00:01 GMT";
        }
    },
    indexOf: function(source, target) {
        for (var i in source) {
            if (source[i] == target)
                return i;
        }

        return -1;
    },
    getElem: function(o, on) {
        if (!o) return;
        if (-1 === o.indexOf("http")) {
            o = 'http://yktj.yzz.cn' + o;
        }
        o = unescape(o);
        var home_full_screen_ad = '';
        switch (o.substr(o.length - 3)) {
            case 'swf':
                {
                    home_full_screen_ad += '<embed id="AdSame_Flash528" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" wmode="transparent" type="application/x-shockwave-flash" wmode="transparent" src="' + o + '" ' + on + ' ></embed>';
                }
                break;
            default:
                {
                    home_full_screen_ad += '<img src="' + o + '" ' + on + ' />';
                }
        }
        return home_full_screen_ad;
    },
    addEvent: function(obj, e, add) {
        if (!obj || !e || !add) {
            return false;
        }
        if (window.addEventListener) {
            obj.addEventListener(e, add, false);
        } else {
            obj.attachEvent('on' + e, add);
        }
    },
    creElm: function(o, t, a) {
        var b = document.createElement(t || 'div');
        for (var p in o) {
            p == 'style' ? b[p].cssText = o[p] : b[p] = o[p];
        }
        return (a || document.body).appendChild(b, (a || document.body).lastChild);
    }
}

var yzz_global_icast_timer; // 视频广告自动隐藏的计数器
var mds_location = document.location.href.split('/');
var match = mds_location[mds_location.length - 1].match(/^index\.[a-z]{3,5}$|^home\.[a-z]{3,5}$|^default\.[a-z]{3,5}$|^forum\.[a-z]{3,5}$/);
var is_index_page = mds_location.length == 4 && (mds_location[mds_location.length - 1] == '' || match != null);

var green_list = ['ku'];
if (mds_location.length == 5 && Yzz.yktj.indexOf(green_list, mds_location[mds_location.length - 2]) > -1 && (mds_location[mds_location.length - 1] == '' || match != null)) {
    is_index_page = true;
}

function yzz_play_icast() {
    document.getElementById("yzz_mini_cls_btmicon").style.display = "none";
    document.getElementById("iCast").style.display = "block";
    try {
        clearTimeout(yzz_global_icast_timer);
    } catch (e) {}
    yzz_global_icast_timer = setTimeout(function() {
        close_icast();
    }, 60000);
}

function yzz_end_icast() {
    document.getElementById("iCast").parentNode.removeChild(document.getElementById("iCast"));
    document.getElementById("yzz_mini_cls_btmicon").parentNode.removeChild(document.getElementById("yzz_mini_cls_btmicon"));
    try {
        Sound.stop();
    } catch (e) {}
    try {
        clearTimeout(yzz_global_icast_timer);
    } catch (e) {}
}

function close_icast() {
    document.getElementById("iCast").style.display = "none";
    document.getElementById("yzz_mini_cls_btmicon").style.display = "block";
    try {
        Sound.stop();
    } catch (e) {};
    try {
        clearTimeout(yzz_global_icast_timer);
    } catch (e) {};
}
/*
function displayiCastVideo(ggids, g_yzz_usedAD) {
    var jsCont = '<div id="iCast" style="position:absolute;width:292px;height:255px;right:5px;bottom:10px;z-index:101;overflow:hidden;background:url(http://www.yzz.cn/home/theme/default/img/iCast_new.png) no-repeat;">' + '<h4 style="height:20px;line-height:20px;font-size:12px;text-align:center;color:#FFF;">叶子猪视频广告</h4>' + '<span style="left:255px;width:18px;height:18px;overflow:hidden;position:absolute;top:2px;cursor:pointer" title="关闭" id="icast_close_button" onclick="close_icast(this)"></span>' + '<div style="width:290px;height:230px;padding:0 1px;overflow:hidden;background:#000;position:relative;">' + '<a href="' + getLnk8ggid(ggids[0], g_yzz_usedAD) + '" target="_blank" style="display:block;position:absolute;width:100%;height:210px;background:url(about:blank) no-repeat right bottom;"></a>' + Yzz.yktj.getElem(g_yzz_usedAD[ggids[0]].src, 'style="width:290px; height:230px;"') + '</div>' + '</div>' + '<div id="yzz_mini_cls_btmicon" style="position:fixed; _position:absolute; bottom:0px; right:0pt; z-index:70; _top:expression(eval(document.documentElement.scrollTop+document.documentElement.clientHeight-this.offsetHeight-8)); overflow:hidden; width:25px; height:190px; display: block; background:url(http://yktj.yzz.cn/htmldata/images/yzz_iconBtm.jpg) no-repeat right bottom; display:none;">' + '<a target="_blank" href="' + getLnk8ggid(ggids[1], g_yzz_usedAD) + '" style="background:url(about:blank) no-repeat right bottom; display:block; overflow:hidden; width:25px; height:150px;"></a>' + Yzz.yktj.getElem(g_yzz_usedAD[ggids[1]].src, 'style="width:25px; height:150px;"') + +'<span style="display:block; overflow:hidden; width:23px; height:22px; cursor:pointer;" onClick="yzz_play_icast();"></span>' + '<span style="display:block; overflow:hidden; width:23px; height:14px; cursor:pointer;" onClick="yzz_end_icast();"></span>' + '</div>';

    document.write(jsCont);

    var iCastHeight = Yzz.yktj.getWidthAndHeight().height - 275;
    window.onscroll = function() {
        setTimeout(function() {
            Yzz.$('iCast').style.top = (Yzz.yktj.scrollTop() + iCastHeight) + "px";
        }, 100);
    }
    yzz_global_icast_timer = setTimeout(function() {
        close_icast();
    }, 60000);
} */




function displayiCastVideo(ggids, g_yzz_usedAD) {
    var jsCont = '<div id="iCast" style="position:absolute;width:292px;height:255px;right:5px;bottom:10px;z-index:101;overflow:hidden;background:url(http://www.yzz.cn/home/theme/default/img/iCast_new.png) no-repeat;">' + '<h4 style="height:20px;line-height:20px;font-size:12px;text-align:center;color:#FFF;">叶子猪视频广告</h4>' + '<span style="left:255px;width:18px;height:18px;overflow:hidden;position:absolute;top:2px;cursor:pointer" title="关闭" id="icast_close_button" onclick="close_icast(this)"></span>' + '<div style="width:290px;height:230px;padding:0 1px;overflow:hidden;background:#000;position:relative;">' + '<a href="' + getLnk8ggid(ggids[0], g_yzz_usedAD) + '" target="_blank" style="display:block;position:absolute;width:100%;height:210px;*background:#FFF;*filter:alpha(opacity=0);"></a>' + '<embed width="290" height="230" flashvars="file=http://yktj.yzz.cn' + g_yzz_usedAD[ggids[0]].src + '&amp;autoStart=true&amp;repeat=true" pluginspage="http://www.macromedia.com/go/getflashplayer" src="http://www.yzz.cn/swfplayer/flvplayer_secure.swf" type="application/x-shockwave-flash" wmode="transparent" menu="false" quality="high" />' + '</div>' + '</div>' + '<div id="yzz_mini_cls_btmicon" style="position:fixed; _position:absolute; bottom:238px; right:0pt; z-index:70; _top:expression(eval(document.documentElement.scrollTop+document.documentElement.clientHeight-this.offsetHeight-230-8)); overflow:hidden; width:25px; height:190px; display: block; background:url(http://yktj.yzz.cn/htmldata/images/yzz_iconBtm.jpg) no-repeat right bottom; display:none;">' + '<a target="_blank" href="' + getLnk8ggid(ggids[0], g_yzz_usedAD) + '" style="background:url(http://yktj.yzz.cn' + g_yzz_usedAD[ggids[1]].src + ') no-repeat right bottom; display:block; overflow:hidden; width:25px; height:150px;"></a>' + '<span style="display:block; overflow:hidden; width:23px; height:22px; cursor:pointer;" onClick="yzz_play_icast();"></span>' + '<span style="display:block; overflow:hidden; width:23px; height:14px; cursor:pointer;" onClick="yzz_end_icast();"></span>' + '</div>';

    document.write(jsCont);
    
    /*
    *  230 为视窗广告高度
    *  255 为视频广告高度
    */
    var iCastHeight = Yzz.yktj.getWidthAndHeight().height - 230 - 255;
    
    
    var _scroll = window.onscroll;
    
    function fixiCastVideo(){
        setTimeout(function() {
            Yzz.$('iCast').style.top = (Yzz.yktj.scrollTop() + iCastHeight) + "px";
        }, 100);
    }
    
    try{
        window.addEventListener('scroll',fixiCastVideo,false);
    }catch(e){
        window.attachEvent("onscroll",fixiCastVideo);
    }
    
    /*
    
    window.onscroll = function() {
        setTimeout(function() {
            Yzz.$('iCast').style.top = (Yzz.yktj.scrollTop() + iCastHeight) + "px";
        }, 100);
    }
    */
    
    
    yzz_global_icast_timer = setTimeout(function() {
        close_icast();
    }, 60000);
}

// eof 视频广告

var mediaTimeouter_left, mediaTimeouter_right; // 视窗广告自动隐藏的计数器

function closeMediaHun(sign) {
    if ('undefined' === typeof sign) sign = 'left';
    sign = (sign == 'left' ? 'left' : 'right');
    if (sign == 'left') {
        if (mediaTimeouter_left) clearTimeout(mediaTimeouter_left);
    } else {
        if (mediaTimeouter_right) clearTimeout(mediaTimeouter_right);
    }
    document.getElementById("media_float_" + sign).style.display = "none";
    document.getElementById("yzz_mini_cls_btmicon_" + sign).style.display = "block";
}

function closeminBig_media(sign) {
    if ('undefined' === typeof sign) sign = 'left';
    sign = (sign == 'left' ? 'left' : 'right');
    document.getElementById("media_float_" + sign).parentNode.removeChild(document.getElementById("media_float_" + sign));
    document.getElementById("yzz_mini_cls_btmicon_" + sign).style.display = "none";
    try {
        if (sign == 'left') {
            if (mediaTimeouter_left) clearTimeout(mediaTimeouter_left);
        } else {
            if (mediaTimeouter_right) clearTimeout(mediaTimeouter_right);
        }
    } catch (e) {}
}

function replayMediaBigFlash(sign) {
    if ('undefined' === typeof sign) sign = 'left';
    sign = (sign == 'left' ? 'left' : 'right');
    document.getElementById("media_float_" + sign).style.display = "block";
    document.getElementById("yzz_mini_cls_btmicon_" + sign).style.display = "none";
    if (sign == 'left') {
        mediaTimeouter_left = setTimeout(function() {
            closeMediaHun(sign)
        }, 25000);
    } else {
        mediaTimeouter_right = setTimeout(function() {
            closeMediaHun(sign)
        }, 25000);
    }
}

function displayMiniMedia(ggids, g_yzz_usedAD, sign) {
    if ('undefined' === typeof sign) sign = 'left';
    sign = (sign == 'left' ? 'left' : 'right');
    //默认显示大
    var showbig = true;
    if ('xx.yzz.cn' == document.location.host) {
        var xx_show_displayMiniMedia_name = 'xx_displayMiniMedia_' + sign;
        var xx_setCookie = function(NameOfCookie, value, expiredays) {
            var ExpireDate = new Date();
            ExpireDate.setTime(ExpireDate.getTime() + (expiredays * 3600000));
            document.cookie = NameOfCookie + "=" + escape(value) + ";domain=" + escape(document.location.host) + ";path=/" + ((expiredays == null) ? "" : "; expires=" + ExpireDate.toGMTString());
        }
        var r = Yzz.yktj.getCookie(xx_show_displayMiniMedia_name);
        try {
            var aid = document.location.pathname.match(/\/([\d]+)[\.|\_]/)[1];
            aid = 'undefined' === typeof aid ? 0 : aid;
            if (aid) {
                if (!r) {
                    xx_setCookie(xx_show_displayMiniMedia_name, aid, 1);
                } else {
                    if (r != aid) {
                        xx_setCookie(xx_show_displayMiniMedia_name, aid, 1);
                    } else {
                        showbig = false;
                    }
                }
            }
        } catch (e) {}
    }
    var jsCont = '<div id="media_float_' + sign + '" style="position:absolute;width:290px;height:230px;' + sign + ':5px;bottom:10px;z-index:9999;overflow:hidden;display:' + (showbig ? 'block' : 'none') + '">' + '<div id="sy_iCast" style="background:#000;">' + '<a href="' + getLnk8ggid(ggids[0], g_yzz_usedAD) + '" target="_blank" style="display:block;position:absolute;width:100%;height:230px;background:url(about:blank) no-repeat right bottom;"></a>' + Yzz.yktj.getElem(g_yzz_usedAD[ggids[0]].src, 'style="width:290px; height:230px;"') + '</div>' + '<span onClick="closeMediaHun(\'' + sign + '\');" title="关闭" style="color:#fff;text-align:center;height:22px;' + sign + ':5px;width: 22px; overflow: hidden; position: absolute; top: 2px; cursor: pointer;background:url(http://www.yzz.cn/home/theme/default/img/gif_close.gif) no-repeat;"></span>' + '</div>' + '<div id="yzz_mini_cls_btmicon_' + sign + '" style="position:fixed; _position:absolute; bottom:0px; ' + sign + ':0pt; z-index:70; _top:expression(eval(document.documentElement.scrollTop+document.documentElement.clientHeight-this.offsetHeight-8)); overflow:hidden; width:25px; height:190px; background:url(http://yktj.yzz.cn/htmldata/images/yzz_iconBtm.jpg) no-repeat right bottom; display:' + (!showbig ? 'block' : 'none') + ';">' + '<a target="_blank" href="' + getLnk8ggid(ggids[1], g_yzz_usedAD) + '" style="background:url(about:blank) no-repeat right bottom; display:block; overflow:hidden; width:25px; height:150px;position:absolute;top:0;left:0;z-index:100;text-indent:-999em;">&nbsp;</a>' + Yzz.yktj.getElem(g_yzz_usedAD[ggids[1]].src, 'style="width:25px; height:150px;position:relative;z-index:1;"') + '<span style="display:block; overflow:hidden; width:23px; height:22px; cursor:pointer;" onClick="replayMediaBigFlash(\'' + sign + '\');"></span>' + '<span style="display:block; overflow:hidden; width:23px; height:14px; cursor:pointer;" onClick="closeminBig_media(\'' + sign + '\');"></span>' + '</div>';

    document.write(jsCont);

    if (sign == 'left') {
        mediaTimeouter_left = setTimeout(function() {
            closeMediaHun(sign)
        }, 25000);
    } else {
        mediaTimeouter_right = setTimeout(function() {
            closeMediaHun(sign)
        }, 25000);
    }

    var iCastHeight = Yzz.yktj.getWidthAndHeight().height - 230;

    window.onscroll = function() {
        setTimeout(function() {
            if (Yzz.$('media_float_left'))
                Yzz.$('media_float_left').style.top = (Yzz.yktj.scrollTop() + iCastHeight) + "px";
            if (Yzz.$('media_float_right'))
                Yzz.$('media_float_right').style.top = (Yzz.yktj.scrollTop() + iCastHeight) + "px";
        }, 100);
    }
}

/**
* @author Yaolulin
* @time   2014-10-16 11:43:41
* @descprition 首页右下角备用浮窗广告  如果没有上广告，则展示默认的15666手游通微信
*
*
**/
function renderSYT(){
    return;//去除广告 2015/1/19
    var sign = 'right';
    //默认显示大
    var showbig = true;

    
    var jsCont = [];
    
    jsCont.push('<div id="media_float_' + sign + '" style="position:absolute;width:250px;height:290px;' + sign + ':5px;bottom:10px;z-index:9999;overflow:hidden;display:' + (showbig ? 'block' : 'none') + '">');
    jsCont.push('<div id="sy_iCast">');
    jsCont.push(Yzz.yktj.getElem( "http://common.yzz.cn/ad_resc/15666_wx_ad.swf", 'style="width:250px; height:290px;"'));
    jsCont.push('</div>');
    jsCont.push('<span onClick="closeMediaHun(\'' + sign + '\');" title="关闭" style="color:#fff;text-align:center;height:22px;' + sign + ':5px;width: 22px; overflow: hidden; position: absolute; top: 2px; cursor: pointer;background:url(http://www.yzz.cn/home/theme/default/img/gif_close.gif) no-repeat;"></span>');
    jsCont.push('</div>');
    jsCont.push('<div id="yzz_mini_cls_btmicon_' + sign + '" style="position:fixed; _position:absolute; bottom:0px; ' + sign + ':0pt; z-index:70; _top:expression(eval(document.documentElement.scrollTop+document.documentElement.clientHeight-this.offsetHeight-8)); overflow:hidden; width:25px; height:190px; background:url(http://yktj.yzz.cn/htmldata/images/yzz_iconBtm.jpg) no-repeat right bottom; display:' + (!showbig ? 'block' : 'none') + ';">' + Yzz.yktj.getElem("http://common.yzz.cn/ad_resc/15666_wx_small.jpg", 'style="width:25px; height:150px;position:relative;z-index:1;"') + '<span style="display:block; overflow:hidden; width:23px; height:22px; cursor:pointer;" onClick="replayMediaBigFlash(\'' + sign + '\');"></span>' + '<span style="display:block; overflow:hidden; width:23px; height:14px; cursor:pointer;" onClick="closeminBig_media(\'' + sign + '\');"></span>' + '</div>');
    
    document.write(jsCont.join(''));

    var iCastHeight = Yzz.yktj.getWidthAndHeight().height - 290;

    window.onscroll = function() {
        setTimeout(function() {
            if (Yzz.$('media_float_left'))
                Yzz.$('media_float_left').style.top = (Yzz.yktj.scrollTop() + iCastHeight) + "px";
            if (Yzz.$('media_float_right'))
                Yzz.$('media_float_right').style.top = (Yzz.yktj.scrollTop() + iCastHeight) + "px";
        }, 100);
    }

}


// eof 视窗广告


var cTimeouter, home_full_screen_ad_html, home_full_screen_ad; // 动态全屏广告(特大)的计数器

function show_full_screen() {
    if (document.getElementById('bg-shade-block')) {
        var d = document.getElementById('bg-shade-block').style.display;
        document.getElementById('bg-shade-block').style.display = 'block';
        document.getElementById('bg-shade-block').style.height = document.getElementById('bg-shade-block').clientHeight - 36 + 'px';
        document.getElementById('bg-shade-block').style.display = d;
    }
    document.getElementById('big').style.display = 'block';
    document.getElementById('big').innerHTML = home_full_screen_ad;
    document.getElementById('home_full_screen_ad').style.display = 'none';

    cTimeouter = setTimeout(closeBig, 8000);
}

function closeBig() {
    if (cTimeouter) clearTimeout(cTimeouter);
    if (document.getElementById('bg-shade-block')) {
        var d = document.getElementById('bg-shade-block').style.display;
        document.getElementById('bg-shade-block').style.display = 'block';
        document.getElementById('bg-shade-block').style.height = document.getElementById('bg-shade-block').clientHeight + 36 + 'px';
        document.getElementById('bg-shade-block').style.display = d;
    }
    document.getElementById('big').style.display = 'none';
    document.getElementById('big').innerHTML = '';

    //new area
    document.getElementById('home_full_screen_ad').innerHTML = home_full_screen_ad_html;
    document.getElementById('home_full_screen_ad').style.display = 'block';
    document.getElementById('home_full_screen_ad').style.clear = 'both';
    //取消button
}

function displayXBigScreenAd(ggids, g_yzz_usedAD, bLarge) {
    var showtime = 0,
        closetime = 8000;
    if (document.getElementById('showSlideAD_big')) {
        showtime += 9100;
        closetime += 9100;
    }
    try {
        var width = parseInt(document.getElementById('home_full_screen_ad').style.width);
    } catch (e) {
        var width = 950;
    }
    width = width < 950 ? 950 : width;
    home_full_screen_ad_html = '<a href="' + getLnk8ggid(ggids[0], g_yzz_usedAD) + '" style="width:' + width + 'px;height:30px;position:absolute;top:0;left:0px;background:url(\'about:blank\') no-repeat scroll right bottom transparent" target="_blank"></a>' + Yzz.yktj.getElem(g_yzz_usedAD[ggids[1]].src, 'style="width:' + width + 'px;height:30px;border:0;"') + '<span style="width:30px;line-height:30px;position:absolute;top:0;right:0;background:url(http://www.yzz.cn/home/theme/default/img/abg.gif) no-repeat;text-align:center;cursor:pointer;" onclick="show_full_screen()">&nbsp;</span>';
    home_full_screen_ad = '<a href="' + getLnk8ggid(ggids[0], g_yzz_usedAD) + '" style="display:block;position:absolute;width:' + (bLarge ? 778 : 450) + 'px;height:' + (bLarge ? 540 : 260) + 'px;background:url(about:blank) no-repeat;" target="_blank"></a>' + Yzz.yktj.getElem(g_yzz_usedAD[ggids[0]].src, 'style="width:' + (bLarge ? 778 : 450) + 'px;height:' + (bLarge ? 540 : 260) + 'px;"') + '<span onclick="closeBig()" style="' + (bLarge ? 'background:#eee;bottom:5px;' : 'display:block;bottom:0px;width:25px;line-height:20px;color:#fff;background:#000;') + 'position:absolute;right:0;cursor:pointer;">关闭</span>';

    var o = {};
    o.id = 'big';
    o.innerHTML = home_full_screen_ad;
    o.style = 'position:absolute;top:50%;left:50%;overflow:hidden;z-index:100;background:#000;margin-left:-' + (bLarge ? 385 : 225) + 'px;margin-top:-' + (bLarge ? 225 : 130) + 'px;width:' + (bLarge ? 778 : 450) + 'px;height:' + (bLarge ? 540 : 260) + 'px;';
    setTimeout(function() {
        Yzz.yktj.creElm(o, 'div');
    }, showtime);
    cTimeouter = setTimeout(closeBig, closetime);
}

function displayXBigScreenAdGame(ggids, g_yzz_usedAD, bLarge) {
    var showtime = 0,
        closetime = 8000;
    if (document.getElementById('showSlideAD_big')) {
        showtime += 9100;
        closetime += 9100;
    }
    if (!document.getElementById('home_full_screen_ad')) {
        document.write('<div id="home_full_screen_ad" class="index_video_ad_contracted" style="position:fixed; _position:absolute; bottom:0px; right:0px; z-index:100; _top:expression(eval(document.documentElement.scrollTop+document.documentElement.clientHeight-this.offsetHeight-8)); overflow:hidden; width:25px; height:190px; background:url(http://gd.969g.com/pa/upload/images/common/video_ad_btn.jpg) no-repeat right bottom;display:none;"></div>');
    }
    //显示模板
    home_full_screen_ad = '<a href="' + getLnk8ggid(ggids[0], g_yzz_usedAD) + '" style="display:block;position:absolute;width:' + (bLarge ? 778 : 450) + 'px;height:' + (bLarge ? 540 : 260) + 'px;background:url(about:blank) no-repeat;" target="_blank"></a>' + Yzz.yktj.getElem(g_yzz_usedAD[ggids[0]].src, 'style="width:' + (bLarge ? 778 : 450) + 'px;height:' + (bLarge ? 540 : 260) + 'px;"') + Yzz.yktj.getElem(g_yzz_usedAD[ggids[0]].src, 'style="width:' + (bLarge ? 778 : 450) + 'px;height:' + (bLarge ? 540 : 260) + 'px;"') + '<span onclick="closeBig()" style="' + (bLarge ? 'background:#eee;bottom:5px;' : 'display:block;bottom:0px;width:25px;line-height:20px;color:#fff;background:#000;') + 'position:absolute;right:0;cursor:pointer;">关闭</span>';
    //收起来模板
    home_full_screen_ad_html = '<div style="position: relative;overflow: hidden;"><a href="' + getLnk8ggid(ggids[0], g_yzz_usedAD) + '" style="background:url(about:blank) no-repeat;display:block;left: 0px; top: 0px; width: 25px; height: 150px; position: absolute; z-index: 102;"></a>' + Yzz.yktj.getElem(g_yzz_usedAD[ggids[1]].src, 'style="left: 0;top: 0;z-index: 101; width: 25px; height: 150px;"') + '</div><span id="popup_gg_replay" class="replay" onclick="show_full_screen()" style="cursor: pointer;display: block;height: 22px;line-height: 50;overflow: hidden;width: 25px;">重播</span><span id="popup_gg_mini_close" onclick="document.getElementById(\'home_full_screen_ad\').style.display=\'none\';" class="close" style="cursor: pointer;display: block;height: 14px;line-height: 50;overflow: hidden;width: 25px;">关闭</span>';

    var o = {};
    o.id = 'big';
    o.innerHTML = home_full_screen_ad;
    o.style = 'position:absolute;top:50%;left:50%;overflow:hidden;z-index:100;background:#000;margin-left:-' + (bLarge ? 385 : 225) + 'px;margin-top:-' + (bLarge ? 225 : 130) + 'px;width:' + (bLarge ? 778 : 450) + 'px;height:' + (bLarge ? 540 : 260) + 'px;';
    setTimeout(function() {
        Yzz.yktj.creElm(o, 'div');
    }, showtime);
    cTimeouter = setTimeout(closeBig, closetime);
}
// eof 动态全屏广告(特大,大)

var g_yzz_toprgtad_OfW, g_yzz_toprgtad_OfH, g_yzz_toprgtad_CfW, g_yzz_toprgtad_CfH, g_yzz_toprgtad_ieN, g_yzz_toprgtad_ffN, g_yzz_toprgtad_siyeIMG, g_yzz_toprgtad_siyeURL, siyeIMG, siyeURL;

function ctrl(arg) {
    if (arg == 'open') {
        if (document.all) {
            document.getElementById(g_yzz_toprgtad_ieN).SetVariable('imge_url', g_yzz_toprgtad_siyeIMG);
            document.getElementById(g_yzz_toprgtad_ieN).SetVariable('get_url', g_yzz_toprgtad_siyeURL);
            document.getElementById(g_yzz_toprgtad_ieN).style.width = g_yzz_toprgtad_OfW;
            document.getElementById(g_yzz_toprgtad_ieN).style.height = g_yzz_toprgtad_OfH;
        } else {
            document.getElementById(g_yzz_toprgtad_ffN).SetVariable('imge_url', g_yzz_toprgtad_siyeIMG);
            document.getElementById(g_yzz_toprgtad_ffN).SetVariable('get_url', g_yzz_toprgtad_siyeURL);
            document.getElementById(g_yzz_toprgtad_ffN).style.width = g_yzz_toprgtad_OfW;
            document.getElementById(g_yzz_toprgtad_ffN).style.height = g_yzz_toprgtad_OfH;
        }
        document.getElementById('loadE').style.width = g_yzz_toprgtad_OfW;
        document.getElementById('loadE').style.height = g_yzz_toprgtad_OfH;
        return 1;
    }
    if (arg == 'close') {
        if (document.all) {
            document.getElementById(g_yzz_toprgtad_ieN).SetVariable('imge_url', g_yzz_toprgtad_siyeIMG);
            document.getElementById(g_yzz_toprgtad_ieN).SetVariable('get_url', g_yzz_toprgtad_siyeURL);
            //  document.getElementById(g_yzz_toprgtad_ieN).style.width = g_yzz_toprgtad_CfW;
            //  document.getElementById(g_yzz_toprgtad_ieN).style.height = g_yzz_toprgtad_CfH;
        } else {
            document.getElementById(g_yzz_toprgtad_ffN).SetVariable('imge_url', g_yzz_toprgtad_siyeIMG);
            document.getElementById(g_yzz_toprgtad_ffN).SetVariable('get_url', g_yzz_toprgtad_siyeURL);
            //  document.getElementById(g_yzz_toprgtad_ffN).style.width = g_yzz_toprgtad_CfW;
            //  document.getElementById(g_yzz_toprgtad_ffN).style.height = g_yzz_toprgtad_CfH;
        }
        document.getElementById('loadE').style.width = g_yzz_toprgtad_CfW;
        document.getElementById('loadE').style.height = g_yzz_toprgtad_CfH;
        return 1;
    }
}

function img() {
    if (document.all) {
        document.getElementById(g_yzz_toprgtad_ieN).SetVariable('imge_url', g_yzz_toprgtad_siyeIMG);
        document.getElementById(g_yzz_toprgtad_ieN).SetVariable('get_url', g_yzz_toprgtad_siyeURL);
    } else {
        document.getElementById(g_yzz_toprgtad_ffN).SetVariable('imge_url', g_yzz_toprgtad_siyeIMG);
        document.getElementById(g_yzz_toprgtad_ffN).SetVariable('get_url', g_yzz_toprgtad_siyeURL);
    }
}

function rgtSiyeAD(ggids, g_yzz_usedAD) {
    g_yzz_toprgtad_OfW = '300px';
    g_yzz_toprgtad_OfH = '300px';
    g_yzz_toprgtad_CfW = '65px';
    g_yzz_toprgtad_CfH = '65px';
    g_yzz_toprgtad_ieN = 'toprgtswfobja';
    g_yzz_toprgtad_ffN = 'toprgtswfobjb';
    siyeIMG = g_yzz_toprgtad_siyeIMG = 'http://yktj.yzz.cn' + g_yzz_usedAD[ggids[0]].src;
    siyeURL = g_yzz_toprgtad_siyeURL = getLnk8ggid(ggids[0], g_yzz_usedAD);

    var jsCont = '<div id="loadE" style="z-index:101;position:absolute;top:0;right:0; overflow:hidden;width:300px;height:300px;background:transparent;"><div style="position:relative;">' + '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,19,0" width="300" height="300" id="toprgtswfobja" style="top:0px;right:0;position:absolute">' + '<param name="movie" value="http://www.yzz.cn/swfplayer/5.3.swf" />' + '<param name="quality" value="high" />' + '<param name="wmode" value="transparent" />' + '<embed id="toprgtswfobjb" src="http://www.yzz.cn/swfplayer/5.3.swf" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" wmode="transparent" type="application/x-shockwave-flash" width="300" height="300"></embed>' + '</object>' + '</div></div>';

    document.write(jsCont);
}
var globalggids;

function lAD(ggids) {
    if ('undefined' !== typeof ggids && ggids) {
        globalggids = ggids;
    }
    if (!globalggids) {
        return;
    }
    var showId = 'showlAD';
    var showId2 = 'showlAD2';
    var hiddenId = 'hiddenlAD';
    var o = {};
    if (!document.getElementById(showId)) {
        o.innerHTML = '<div id="' + showId + '" style="position: absolute; width: 650px; height: 100px; bottom: 0px; z-index: 2000; left: 200px;"><a href="' + getLnk8ggid(globalggids[0], g_yzz_usedAD) + '" target="_blank" style="display:block;position:absolute;width:650px;height:100px;background:url(about:blank) no-repeat;"></a>' + Yzz.yktj.getElem(g_yzz_usedAD[globalggids[0]].src, 'style="width:650px;height:100px;"') + '<a target="_self" onclick="lAD();" style="cursor: pointer;position: absolute;right: 0;top: 0;width: 45px;height: 18px;background: #fff;color: #000;font-weight: bold;text-decoration: none;padding:0;margin:0;line-height:19px;"><img src="http://i2.img.969g.com/yt/imgx2013/09/12/1_134552_f9ca1_lit.png" style="width:45px;height:18px"></a></div><div id="' + showId2 + '" style="position: absolute; width: 150px; height: 220px; bottom: 0px; z-index: 2000; left: 50px;"><a href="' + getLnk8ggid(globalggids[1], g_yzz_usedAD) + '" target="_blank" style="display:block;position:absolute;width:150px;height:220px;background:url(about:blank) no-repeat;"></a>' + Yzz.yktj.getElem(g_yzz_usedAD[globalggids[1]].src, 'style="width:150px;height:220px;"') + '</div>';

        if (document.getElementById(hiddenId))
            document.getElementById(hiddenId).parentNode.removeChild(document.getElementById(hiddenId));
    } else {
        o.innerHTML = '<div id="' + hiddenId + '" style="position: absolute; width: 150px; height: 160px; bottom: 0px; z-index: 2000; left: 50px;"><a href="' + getLnk8ggid(globalggids[2], g_yzz_usedAD) + '" target="_blank" style="display:block;position:absolute;width:150px;height:160px;background:url(about:blank) no-repeat;"></a>' + Yzz.yktj.getElem(g_yzz_usedAD[globalggids[2]].src, 'style="width:150px;height:160px;"') + '<a target="_self" onclick="document.getElementById(\'' + hiddenId + '\').style.display=\'none\';" style="cursor: pointer;position: absolute;bottom: 0;width: 45px;height: 18px;background: #fff;color: #000;font-weight: bold;text-decoration: none;padding:0;margin:0;line-height:19px;left: 0;"><img src="http://i2.img.969g.com/yt/imgx2013/09/12/1_134552_f9ca1_lit.png" style="width:45px;height:18px"></a><a target="_self" onclick="lAD();" style="cursor: pointer;position: absolute;bottom: 0;width: 45px;height: 18px;background: #fff;color: #000;font-weight: bold;text-decoration: none;padding:0;margin:0;line-height:19px;right: 0;"><img src="http://i2.img.969g.com/yt/imgx2013/09/12/1_134646_50773_lit.png" style="width:45px;height:18px"></a></div>';
        if (document.getElementById(showId))
            document.getElementById(showId).parentNode.removeChild(document.getElementById(showId));
        if (document.getElementById(showId2))
            document.getElementById(showId2).parentNode.removeChild(document.getElementById(showId2));
    }
    if ('undefined' !== typeof o) {
        o.style = "left:0;bottom:0;position: fixed;z-index:999;_position:absolute;_bottom:auto;_top:expression(eval(document.documentElement.scrollTop+document.documentElement.clientHeight-this.offsetHeight-(parseInt(this.currentStyle.marginTop,10)||0)-(parseInt(this.currentStyle.marginBottom,10)||0)));";
        Yzz.yktj.creElm(o, 'div');
    }
}

// eof 右上角斯页广告

var g_yzz_usedAD = {"6266":{"visible":0},"6267":{"visible":0},"6268":{"visible":0},"6269":{"visible":0},"6270":{"visible":0},"6271":{"visible":0},"6327":{"visible":0},"6328":{"visible":0},"6326":{"visible":0},"6325":{"visible":0},"6316":{"visible":0},"6318":{"visible":0},"6317":{"artid":"52254","addr":"http%3A%2F%2Fssg.haha33.com%2Fkf1%2Findex.html%3Fshow_id%3D97","src":"\/pa\/upload\/images\/2015_04\/e64836930cb47aebbaedacc9be092b6b.swf","visible":1},"6319":{"artid":"52255","addr":"http%3A%2F%2Fssg.haha33.com%2Fkf1%2Findex.html%3Fshow_id%3D97","src":"\/pa\/upload\/images\/2015_04\/01cb34ec039610d1ee450d6febb29ffb.gif","visible":1},"6300":{"visible":0},"6301":{"visible":0},"6309":{"artid":"49179","addr":"http%3A%2F%2Flt.baiyou100.com%2Fmod%2Fs.asp%3Fid%3D117%26amp%3Bu%3D1909001.asp","src":"\/pa\/upload\/images\/2013_04\/55b9fe5e14940dd5304fa63b61a91441.jpeg","visible":0},"6314":{"visible":0},"6315":{"visible":0},"6302":{"artid":"52291","addr":"http%3A%2F%2Fssg.haha33.com%2Fkf1%2Findex.html%3Fshow_id%3D97","src":"\/pa\/upload\/images\/2015_04\/02f9ef0a8042a8c23a3c2a9a670be57c.jpg","visible":1},"6320":{"artid":"52292","addr":"http%3A%2F%2Fssg.haha33.com%2Fkf1%2Findex.html%3Fshow_id%3D97","src":"\/pa\/upload\/images\/2015_04\/936ae0160161d67bc378d5029c869abb.jpg","visible":1},"6297":{"visible":0},"6304":{"visible":0},"6305":{"visible":0},"6311":{"visible":0},"6306":{"visible":0},"6310":{"visible":0},"6307":{"visible":0},"6312":{"visible":0},"6308":{"visible":0},"6313":{"visible":0},"6303":{"visible":0},"6298":{"visible":0},"6299":{"artid":"52273","addr":"http%3A%2F%2Fssg.haha33.com%2Fkf1%2Findex.html%3Fshow_id%3D97","src":"\/pa\/upload\/images\/2015_04\/538ad3fef55937864701f558c6b7f507.jpg","visible":1},"6160":{"artid":"46786","addr":"http%3A%2F%2Fbbs.yzz.cn%2Fviewthread.php%3Ftid%3D2939282%26page%3D1%26extra%3D","src":"\/pa\/upload\/images\/2011_01\/6504e738edc0c7f4eda041bd50494ffd.jpg","visible":0},"6264":{"visible":0},"6263":{"visible":0},"6159":{"visible":0},"6401":{"visible":0},"6403":{"visible":0},"6335":{"visible":0},"6336":{"visible":0},"6334":{"artid":"49185","addr":"http%3A%2F%2Fact.yzz.cn%2Fs%2F2013%2F10years_zt%2F","src":"\/pa\/upload\/images\/2013_04\/711d48d375ad0bb483b38a3e84623f71.jpeg","visible":0},"6333":{"visible":0},"6180":{"artid":"46753","addr":"http%3A%2F%2Fdl.yezizhu.com%2Fspecial%2Fcartoontopic%2Findex.html","src":"\/pa\/upload\/images\/2010_12\/6697d1c0b398c00d3639543897edcc0f.jpg","visible":0},"6179":{"artid":"46754","addr":"http%3A%2F%2Fdl.yezizhu.com%2Fspecial%2Fcartoontopic%2Findex.html","src":"\/pa\/upload\/images\/2010_12\/bbbb4f5c4e62fdfd70e654b6e2371e25.jpg","visible":0},"6357":{"visible":0},"6356":{"visible":0},"6414":{"artid":"52647","addr":"http%3A%2F%2Fmy.15666.com%2F","src":"\/pa\/upload\/images\/2015_03\/6036395e666ef5037cf143cd3976f2ae.jpg","visible":1},"6388":{"artid":"52646","addr":"http%3A%2F%2Fmy.15666.com%2F","src":"\/pa\/upload\/images\/2015_04\/844d219b7e606ac5c324ea470e0a4c66.jpg","visible":1},"6339":{"visible":0},"6340":{"visible":0},"6338":{"visible":0},"6337":{"visible":0},"6188":{"visible":0},"6214":{"visible":0},"6187":{"visible":0},"6215":{"visible":0},"6186":{"artid":"46732","addr":"http%3A%2F%2Fnews.yzz.cn%2Fzt%2F2010%2F11%2Fyzz%2F","src":"\/pa\/upload\/images\/2010_12\/cb4b4b05d1356c03584cc608dd46be6d.swf","visible":0},"6212":{"artid":"46734","addr":"http%3A%2F%2Fnews.yzz.cn%2Fzt%2F2010%2F11%2Fyzz%2F","src":"\/pa\/upload\/images\/2010_12\/fca3051c2e2bb3a0c22b667fc88e2bde.jpg","visible":0},"6185":{"visible":0},"6213":{"visible":0},"6396":{"visible":0},"6397":{"visible":0},"6398":{"visible":0},"6399":{"visible":0},"6394":{"visible":0},"6395":{"visible":0},"6392":{"visible":0},"6393":{"visible":0},"6416":{"visible":0},"6415":{"visible":0},"6347":{"visible":0},"6348":{"visible":0},"6346":{"visible":0},"6345":{"visible":0},"6231":{"artid":"46884","addr":"http%3A%2F%2Fnews.yzz.cn%2Findustrynews%2F","src":"\/pa\/upload\/images\/2011_03\/9c96b50d5a77da94b2c0a1b7ef61bc64.jpg","visible":0},"6232":{"artid":"46885","addr":"http%3A%2F%2Fdl.yzz.cn%2F","src":"\/pa\/upload\/images\/2011_09\/a6c8bd8e3e3029db6fb3c88e0cc604f7.jpg","visible":0},"6233":{"artid":"46886","addr":"http%3A%2F%2Fdl.yzz.cn%2F","src":"\/pa\/upload\/images\/2011_03\/5561362c80ace6ea89c0e24f917c274b.jpg","visible":0},"6234":{"artid":"46887","addr":"http%3A%2F%2Fnews.yzz.cn%2F","src":"\/pa\/upload\/images\/2011_03\/80a2b78ce2d6c6cec81d499852705e17.jpg","visible":0},"6235":{"artid":"46888","addr":"http%3A%2F%2Fnewgame.yzz.cn%2F","src":"\/pa\/upload\/images\/2011_03\/f95e0f0c6fa95743c09c19b4b5f36f26.jpg","visible":0},"6236":{"artid":"46889","addr":"http%3A%2F%2Fpc.yzz.cn%2Fzt%2Fphoto%2F01%2F","src":"\/pa\/upload\/images\/2011_03\/d3ddb19f02403f049ad415470d82cba6.jpg","visible":0},"6169":{"artid":"52287","addr":"http%3A%2F%2Fssg.haha33.com%2Fkf1%2Findex.html%3Fshow_id%3D97","src":"\/pa\/upload\/images\/2015_04\/5d9f0e7d4cef188f8fa45c9fe05c667f.jpg","visible":1},"6170":{"artid":"52274","addr":"http%3A%2F%2Fssg.haha33.com%2Fkf1%2Findex.html%3Fshow_id%3D97","src":"\/pa\/upload\/images\/2015_04\/17c95d435567857a565000a811d81994.jpg","visible":1},"6166":{"artid":"51508","addr":"http%3A%2F%2Fssg.haha33.com%2Fkf1%2Findex.html%3Fshow_id%3D97","src":"\/pa\/upload\/images\/2015_03\/d9ee740c869744d051c135a717da8057.jpg","visible":0},"6165":{"artid":"52160","addr":"http%3A%2F%2Fmy.15666.com%2F","src":"\/pa\/upload\/images\/2015_03\/f597a1040524ca25cfb2c573e9c2a5d8.jpg","visible":0},"6168":{"artid":"51510","addr":"http%3A%2F%2Fwww.haha33.com%2Fxwssgzol%2Fkf1%2Findex.html%3Fshow_id%3D156","src":"\/pa\/upload\/images\/2015_04\/15a1cca35bc82535cbb67f313fd84351.jpg","visible":0},"6167":{"artid":"52161","addr":"http%3A%2F%2Fmy.15666.com%2F","src":"\/pa\/upload\/images\/2015_03\/e5ed1c55d86f791e60f8c2735a5460e9.jpg","visible":0},"6412":{"visible":0},"6413":{"visible":0},"6261":{"artid":"52395","addr":"http%3A%2F%2Fssg.haha33.com%2Fkf1%2Findex.html%3Fshow_id%3D97","src":"\/pa\/upload\/images\/2015_04\/c950fc61ed5e3e4c702cab89e28318e1.jpg","visible":1},"6351":{"visible":0},"6352":{"visible":0},"6350":{"visible":0},"6349":{"visible":0},"6243":{"visible":0},"6408":{"visible":0},"6409":{"visible":0},"6411":{"visible":0},"6262":{"artid":"52271","addr":"http%3A%2F%2Fssg.haha33.com%2Fkf1%2Findex.html%3Fshow_id%3D97","src":"\/pa\/upload\/images\/2015_04\/36fe439037eb76aed8e36d533c180218.jpg","visible":1},"6389":{"artid":"52704","addr":"http%3A%2F%2Fwww.c3online.com.cn","src":"\/pa\/upload\/images\/2015_04\/3e021bd4441bd4e23ab26534dcb8eb0a.jpg","visible":1},"6176":{"artid":"52238","addr":"http%3A%2F%2Fssg.haha33.com%2Fkf1%2Findex.html%3Fshow_id%3D97","src":"\/pa\/upload\/images\/2015_04\/f8a932ac95502e842abf9d5639e10ff0.jpg","visible":1},"6224":{"artid":"52239","addr":"http%3A%2F%2Fssg.haha33.com%2Fkf1%2Findex.html%3Fshow_id%3D97","src":"\/pa\/upload\/images\/2015_04\/aaa4ffff6b1e2f1e846901f097558e8e.jpg","visible":1},"6175":{"artid":"49927","addr":"http%3A%2F%2Ft.qq.com%2Fyezizhu001","src":"\/pa\/upload\/images\/2013_10\/7597ef5b5bb6c797dcb011431ed2e6f8.jpg","visible":0},"6371":{"visible":0},"6281":{"visible":0},"6280":{"visible":0},"6324":{"visible":0},"6181":{"artid":"46747","addr":"http%3A%2F%2Fe3.96pk.com%2F96pk%2F532%2F540%2F1828%2F1828.html%3F96pkid%3D13835","src":"\/pa\/upload\/images\/2011_05\/bc4368e6abcfd00fe8373bef57cede5a.swf","visible":0},"6321":{"visible":0},"6322":{"visible":0},"6190":{"visible":0},"6226":{"visible":0},"6189":{"visible":0},"6227":{"visible":0},"6192":{"visible":0},"6228":{"visible":0},"6191":{"visible":0},"6229":{"visible":0},"6381":{"visible":0},"6382":{"visible":0},"6383":{"visible":0},"6384":{"visible":0},"6376":{"visible":0},"6375":{"visible":0},"6390":{"visible":0},"6377":{"artid":"50660","addr":"http%3A%2F%2Fwww.15666.com%2Fsycyz%2F","src":"\/pa\/upload\/images\/2014_08\/67ae74e55548ff59b21de99d88503023.jpg","visible":0},"6378":{"artid":"49929","addr":"http%3A%2F%2Ft.qq.com%2Fyezizhu001","src":"\/pa\/upload\/images\/2013_10\/15e701611e579354ccb68074f9ddba40.jpg","visible":0},"6372":{"artid":"51871","addr":"http%3A%2F%2Fssg.haha33.com%2Fkf1%2Findex.html%3Fshow_id%3D97","src":"\/pa\/upload\/images\/2015_03\/e3dc3f01fdd090cd08711efad8015918.jpg","visible":0},"6373":{"artid":"51870","addr":"http%3A%2F%2Fssg.haha33.com%2Fkf1%2Findex.html%3Fshow_id%3D97","src":"\/pa\/upload\/images\/2015_03\/c5ef7e8e717328a7747a75f3b865fc13.jpg","visible":0},"6374":{"visible":0},"6164":{"artid":"46756","addr":"http%3A%2F%2Fwebgame.yzz.cn%2F","src":"\/pa\/upload\/images\/2010_12\/687f69a2b1c812c24fc0555178091eb0.jpg","visible":0},"6163":{"artid":"46757","addr":"http%3A%2F%2Fwebgame.yzz.cn%2F","src":"\/pa\/upload\/images\/2010_12\/692081a4b638dd2fecf348d3d4e881b2.jpg","visible":0},"6391":{"visible":0},"6385":{"visible":0},"6387":{"visible":0},"6386":{"visible":0},"6284":{"visible":0},"6193":{"visible":0},"6331":{"visible":0},"6332":{"visible":0},"6330":{"visible":0},"6329":{"visible":0},"6240":{"visible":0},"6241":{"artid":"46897","addr":"http%3A%2F%2Fpc.yzz.cn%2F","src":"\/pa\/upload\/images\/2011_02\/c4de68c25afcdfc2940e4a72e5a14336.gif","visible":0},"6194":{"artid":"52659","addr":"http%3A%2F%2Fport.duoyi.com%2Frewrite%2Fa.py%3Ffromid%3D250720009","src":"\/pa\/upload\/images\/2015_04\/1e3cd206488ea6bde69bb63313cb0ed3.jpg","visible":1},"6242":{"artid":"46898","addr":"http%3A%2F%2Fdl.yzz.cn%2F","src":"\/pa\/upload\/images\/2011_02\/767d51cc7d731c4459f328616df5c045.jpg","visible":0},"6195":{"artid":"52507","addr":"http%3A%2F%2Fgad.netease.com%2Fmmad%2Fclick%3Fs%3Deaj24MtM8XJc3wJVyt1ooZ6oiWI%253D%26project_id%3D10038023%26monitor_type%3D4","src":"\/pa\/upload\/images\/2015_04\/bbb6cd280e9b2300aa7b8931c96e50d3.jpg","visible":1},"6196":{"artid":"52705","addr":"http%3A%2F%2Fwww.c3online.com.cn","src":"\/pa\/upload\/images\/2015_04\/6d6954218e7eb5d38c6f805e4d37248f.jpg","visible":1},"6197":{"artid":"52658","addr":"http%3A%2F%2Fm.yzz.cn%2Fdown%2Fbaidu%2Fappsearch_AndroidPhone_1-0-22-44_1008001a.apk","src":"\/pa\/upload\/images\/2015_04\/e960393cf1206a157e85f734fa806754.jpg","visible":1},"6251":{"visible":0},"6291":{"artid":"52400","addr":"http%3A%2F%2Fport.duoyi.com%2Frewrite%2Fa.py%3Ffromid%3D130736109","src":"\/pa\/upload\/images\/2015_03\/a6886422e319b1bc0633ea8515849c9e.jpg","visible":1},"6292":{"artid":"52401","addr":"http%3A%2F%2Fport.duoyi.com%2Frewrite%2Fa.py%3Ffromid%3D130736109","src":"\/pa\/upload\/images\/2015_03\/100bffa125087e62e65d56b755845b22.swf","visible":1},"6365":{"visible":0},"6366":{"visible":0},"6367":{"visible":0},"6368":{"visible":0},"6369":{"visible":0},"6358":{"visible":0},"6359":{"visible":0},"6355":{"visible":0},"6363":{"visible":0},"6364":{"visible":0},"6360":{"visible":0},"6370":{"artid":"49930","addr":"http%3A%2F%2Ft.qq.com%2Fyezizhu001","src":"\/pa\/upload\/images\/2013_10\/014f07666f7058b4cabd8995f9cb47e7.jpg","visible":0},"6283":{"visible":0},"6216":{"visible":0},"6218":{"visible":0},"6220":{"artid":"46763","addr":"http%3A%2F%2Fdl.yzz.cn%2F","src":"\/pa\/upload\/images\/2011_02\/271616a624945857c1a8a6a3f30f3cf3.jpg","visible":0},"6237":{"artid":"46890","addr":"http%3A%2F%2Fdl.yzz.cn%2F","src":"\/pa\/upload\/images\/2011_02\/27870bd431f3acfb380b988bdfe955dc.jpg","visible":0},"6222":{"artid":"46764","addr":"http%3A%2F%2Fdl.yezizhu.com%2F","src":"\/pa\/upload\/images\/2010_12\/4deb6e8d79fa30924308ddd81f7016b2.jpg","visible":0},"6217":{"visible":0},"6219":{"visible":0},"6221":{"visible":0},"6239":{"artid":"46891","addr":"http%3A%2F%2Fnews.yzz.cn%2F","src":"\/pa\/upload\/images\/2011_02\/a9a019f41e840dbe68658d52d78ab4d6.jpg","visible":0},"6223":{"visible":0},"6290":{"visible":0},"6380":{"visible":0},"6362":{"visible":0},"6247":{"artid":"47066","addr":"http%3A%2F%2Fwww.gaopeng.com%2Fgaopeng%2Flp%2Fgaopeng%2Fgaopeng.php%3Ftimg%3Dtravel%26CID%3DCN_DIS_205_3_1_1054","src":"\/pa\/upload\/images\/2011_04\/93e8de2b1b5b4134211652d43ad0836f.gif","visible":0},"6294":{"visible":0},"6296":{"visible":0},"6162":{"artid":"46741","addr":"http%3A%2F%2Fdl.yezizhu.com%2Fspecial%2Fcartoontopic%2Findex.html","src":"\/pa\/upload\/images\/2010_12\/f9d8d4e811667c8864344a8788ba1ffa.jpg","visible":0},"6161":{"artid":"46742","addr":"http%3A%2F%2Fdl.yezizhu.com%2Fspecial%2Fcartoontopic%2Findex.html","src":"\/pa\/upload\/images\/2010_12\/7d8fa221ed3dbe4fb3f29a28c215e5a3.jpg","visible":0},"6274":{"visible":0},"6200":{"visible":0},"6199":{"artid":"52456","addr":"http%3A%2F%2Fniu.xunlei.com%2Factives%2Fwelcome1397%2F%3FadvNo%3D201312067939967485","src":"\/pa\/upload\/images\/2015_03\/57b83619dd69e07475f1d546339d981f.jpg","visible":1},"6273":{"visible":0},"6287":{"visible":0},"6288":{"visible":0},"6201":{"artid":"52702","addr":"http%3A%2F%2Fzxy.yy.com%2F%3Fdsfrom%3Dyezizhu_5","src":"\/pa\/upload\/images\/2015_04\/cd9a94e29f5fb1197656ea85c68d91a4.jpg","visible":1},"6203":{"visible":0},"6204":{"visible":0},"6202":{"visible":0},"6198":{"artid":"46780","addr":"http%3A%2F%2Fxx.yezizhu.com%2F","src":"\/pa\/upload\/images\/2010_12\/f3da48ce798b383fd77baf2f3029de37.jpg","visible":0},"6286":{"artid":"52457","addr":"http%3A%2F%2Fniu.xunlei.com%2Factives%2Fwelcome1397%2F%3FadvNo%3D201312067939967485","src":"\/pa\/upload\/images\/2015_03\/0e29f3b6f3e937a5fc88d298d02fd8d1.jpg","visible":1},"6178":{"artid":"46784","addr":"http%3A%2F%2Fpc.yzz.cn%2F","src":"\/pa\/upload\/images\/2010_12\/878276eb33b2e638b8a32971ca11e3c2.jpg","visible":0},"6177":{"artid":"46785","addr":"http%3A%2F%2Fpc.yzz.cn%2F","src":"\/pa\/upload\/images\/2010_12\/aa87262bbf3066e73ac3e1fb8d576faa.jpg","visible":0},"6275":{"visible":0},"6276":{"visible":0},"6277":{"visible":0},"6278":{"visible":0},"6279":{"visible":0},"6406":{"artid":"52396","addr":"http%3A%2F%2Fssg.haha33.com%2Fkf1%2Findex.html%3Fshow_id%3D97","src":"\/pa\/upload\/images\/2015_04\/c24a14e5e41da1df8162d8c88c5ace4c.jpg","visible":1},"6405":{"artid":"52397","addr":"http%3A%2F%2Fssg.haha33.com%2Fkf1%2Findex.html%3Fshow_id%3D97","src":"\/pa\/upload\/images\/2015_04\/2430d4f293eee07ca33d02f9eaf82c43.jpg","visible":1},"6407":{"artid":"52398","addr":"http%3A%2F%2Fssg.haha33.com%2Fkf1%2Findex.html%3Fshow_id%3D97","src":"\/pa\/upload\/images\/2015_04\/0467045fa3ef3e8b2ded5b04d2fbe3bf.jpg","visible":1},"6184":{"visible":0},"6182":{"visible":0},"6183":{"visible":0},"6209":{"visible":0},"6225":{"visible":0},"6253":{"artid":"52580","addr":"http%3A%2F%2Fmy.15666.com%2Fiosdown%2F","src":"\/pa\/upload\/images\/2015_04\/bf6e874ea0ac9312123416e1b59efec6.jpg","visible":1},"6259":{"visible":0},"6260":{"visible":0},"6257":{"visible":0},"6258":{"visible":0},"6402":{"visible":0},"6255":{"visible":0},"6404":{"visible":0},"6285":{"visible":0},"6256":{"visible":0},"6400":{"visible":0},"6343":{"visible":0},"6344":{"visible":0},"6342":{"visible":0},"6341":{"visible":0},"6207":{"visible":0},"6210":{"visible":0},"6172":{"artid":"46776","addr":"http%3A%2F%2Fnews.yzz.cn%2F","src":"\/pa\/upload\/images\/2011_02\/2a54f0a4d8286985c8aaf67038d65f93.jpg","visible":0},"6238":{"artid":"46892","addr":"http%3A%2F%2Fdl.yzz.cn%2F","src":"\/pa\/upload\/images\/2011_02\/369251fac8d38d698d512a7eb2f7e0d6.jpg","visible":0},"6171":{"artid":"46777","addr":"http%3A%2F%2Fbbs.yezizhu.com%2Fviewthread.php%3Ftid%3D2031407%26extra%3D","src":"\/pa\/upload\/images\/2010_12\/2ae6a68ea80973e3860fa8b1564eab67.jpg","visible":0},"6208":{"visible":0},"6211":{"visible":0},"6174":{"artid":"46782","addr":"http%3A%2F%2Fnews.yzz.cn%2F","src":"\/pa\/upload\/images\/2011_02\/309d9ad891cb3d63d1e32a4c5f0a1e4b.jpg","visible":0},"6245":{"artid":"46893","addr":"http%3A%2F%2Fcard.yzz.cn%2F","src":"\/pa\/upload\/images\/2011_02\/79525b4021fa80d6539a8b7a7d7da565.jpg","visible":0},"6173":{"artid":"46783","addr":"http%3A%2F%2Fbbs.yezizhu.com%2Factivity.php%3Fact%3Dindex","src":"\/pa\/upload\/images\/2010_12\/93d190e27a7ce8c7abc832fe8a0bd4aa.jpg","visible":0},"6289":{"visible":0},"6379":{"visible":0},"6361":{"visible":0},"6250":{"artid":"47068","addr":"http%3A%2F%2Fwww.gaopeng.com%2Fgaopeng%2Flp%2Fgaopeng%2Fgaopeng.php%3Ftimg%3Dtravel%26CID%3DCN_DIS_205_3_1_1054","src":"\/pa\/upload\/images\/2011_04\/1e7cbabe7c24f7c64e3c97c4a3c91633.jpg","visible":0},"6295":{"visible":0},"6293":{"visible":0}};

function getLnk8ggid(ggid, usedAD) {
    return 'http://yktj.yzz.cn/adsRedirect.php?articleid=' + usedAD[ggid].artid + '&urluri=' + usedAD[ggid].addr;
}

function getImgCode8ggid(ggid, usedAD, swfSupport) {
    if (swfSupport && usedAD[ggid].src.length - 4 == usedAD[ggid].src.lastIndexOf('.swf')) {
        switch (ggid) {
            case 6370:
            case 6176:
            case 6376:
                {
                    tmpW = 980;
                    tmpH = 100;
                    break;
                }
            case 6375:
                {
                    tmpW = 980;
                    tmpH = 100;
                    break;
                }
            case 6175:
                {
                    tmpW = 200;
                    tmpH = 340;
                    break;
                }
            case 6378:
                {
                    tmpW = 285;
                    tmpH = 250;
                    break;
                }
            case 6224:
                {
                    tmpW = 285;
                    tmpH = 250;
                    break;
                }
            case 6320:
                {
                    tmpW = 285;
                    tmpH = 250;
                    break;
                }
            case 6302:
                {
                    tmpW = 230;
                    tmpH = 373;
                    break;
                }
            case 6205:
                {
                    tmpW = 760;
                    tmpH = 60;
                    break;
                }
            case 6243:
                {
                    tmpW = 300;
                    tmpH = 350;
                    break;
                }
            case 6166:
                {
                    tmpW = 470;
                    tmpH = 90;
                    break;
                }
            case 6300:
                {
                    tmpW = 470;
                    tmpH = 90;
                    break;
                }
            case 6168:
                {
                    tmpW = 470;
                    tmpH = 90;
                    break;
                }
            case 6301:
                {
                    tmpW = 470;
                    tmpH = 90;
                    break;
                }
            case 6165:
                {
                    tmpW = 470;
                    tmpH = 90;
                    break;
                }
            case 6167:
                {
                    tmpW = 470;
                    tmpH = 90;
                    break;
                }
            case 6372:
                {
                    tmpW = 470;
                    tmpH = 90;
                    break;
                }
            case 6373:
                {
                    tmpW = 470;
                    tmpH = 90;
                    break;
                }
            case 6374:
                {
                    tmpW = 980;
                    tmpH = 90;
                    break;
                }
            case 6391:
                {
                    tmpW = 190;
                    tmpH = 25;
                    break;
                }

            case 6275:
            case 6276:
            case 6277:
            case 6278:
            case 6279:
                {
                    tmpW = 280;
                    tmpH = 70;
                    break;
                }
            default:
                {
                    tmpW = 950;
                    tmpH = 90;
                    break;
                }
        }

        return ('<a href="' + getLnk8ggid(ggid, usedAD) + '" target="_blank" style="display:block;position:absolute;background:url(about:blank) no-repeat right bottom;width:' + tmpW + 'px;height:' + tmpH + 'px;"></a><embed width="' + tmpW + '" height="' + tmpH + '" src="http://yktj.yzz.cn' + usedAD[ggid].src + '" wmode="transparent" quality="high" />');
    } else {
        if (ggid == 6261) {
            return '<div class="banner" style="clear:both;width:950px; height:90px; background:#FFF; margin:0 auto;margin-bottom:10px;">' + '<a target="_blank" href="' + getLnk8ggid(ggid, usedAD) + '"><img src="http://yktj.yzz.cn' + usedAD[ggid].src + '" /></a>' + '</div>';
        } else {
            return '<a target="_blank" href="' + getLnk8ggid(ggid, usedAD) + '"><img src="http://yktj.yzz.cn' + usedAD[ggid].src + '" /></a>';
        }
    }
}


function showSlideAD(id, show, bigsrc, smallsrc, thebigsize) {
    var bigid = id + '_big';
    var smallid = id + '_small';
    var html = '';
    var bigclass = show ? 'block' : 'none';
    var smallclass = !show ? 'block' : 'none';
    if ('undefined' === typeof thebigsize || false === thebigsize || thebigsize < 1) {
        var thebigsize = 540;
    }
    //获取当前页面的宽度
    var width = 980;
    var width_height = thebigsize / width;
    var gdisplay;
    var g = document.getElementById('home_full_screen_ad');
    if (g) {
        gdisplay = g.style.display;
        g.style.display = 'block';
        var gwidth = parseInt(g.offsetWidth);
        if (!isNaN(gwidth) && gwidth > 0) {
            width = gwidth;
            thebigsize = width_height * width;
        }
        g.style.display = gdisplay;
    }
    html += '<div id="' + smallid + '" class="' + smallid + '" style="clear:both;width:' + width + 'px; height:30px; background:#FFF;display: none; margin: 0 0 5px 0; position: relative;">';
    html += '<div style="width:' + width + 'px; height:30px;position:absolute;left:0;top:0;z-index:9;"><div>';

    html += Yzz.yktj.getElem(g_yzz_usedAD[smallsrc].src, 'style="width:' + width + 'px;height:30px;"');
    html += '</div><a style="left:0px;top:0px;display:block;position:absolute;width:' + width + 'px;height:30px;background:url(about:blank) no-repeat;" target="_blank" href="' + getLnk8ggid(smallsrc, g_yzz_usedAD) + '"></a></div>';
    html += '<span onclick="showSlideAD(\'' + id + '\', true, ' + bigsrc + ', ' + smallsrc + ')" style="display:block; background:url(http://www.yzz.cn/home/theme/default/img/abg.gif) no-repeat; cursor:pointer; width:30px; height:30px; position:absolute; top:0; right:0; overflow:hidden;z-index:10;"></span></div>';

    html += '<div class="' + bigid + '" style="height: ' + thebigsize + 'px; display: none; margin: 0 0 5px 0; position: relative;" id="' + bigid + '" >';
    html += '<div style="height: ' + thebigsize + 'px;width:' + width + 'px;position:absolute;left:0;top:0;z-index:9;">';

    html += Yzz.yktj.getElem(g_yzz_usedAD[bigsrc].src, 'style="width:' + width + 'px;height:' + thebigsize + 'px;"');

    html += '<a style="position:absolute;width:' + width + 'px;height:' + thebigsize + 'px;left:0px;top:0px;cursor:pointer;background-color:#fff;filter:alpha(opacity=0);opacity:0;" rel="nofollow" target="_blank" href="' + getLnk8ggid(bigsrc, g_yzz_usedAD) + '" class="a_cover"></a>';

    html += '</div><span onclick="showSlideAD(\'' + id + '\', false, ' + bigsrc + ', ' + smallsrc + ')" style="display:block; background:url(http://yktj.yzz.cn/htmldata/images/min_close.gif) no-repeat; cursor:pointer; width:13px; height:13px; position:absolute; top:0; right:0; overflow:hidden; z-index:10;"></span></div>';
    var d = function() {
        var s = function(id, css) {
            if ('undefined' !== typeof jQuery) {
                if ('block' == css) {
                    jQuery("#" + id).slideDown(1200);
                } else {
                    jQuery("#" + id).slideUp(800);
                }
            } else {
                document.getElementById(id).style.display = css;
            }
        }
        if (document.getElementById(smallid)) {
            s(smallid, smallclass);
        }
        if (document.getElementById(bigid)) {
            s(bigid, bigclass);
        }
    }
    if (show) {
        setTimeout(d, 0);
        setTimeout(function() {
            showSlideAD(id, !show, bigsrc, smallsrc);
        }, 8000);
    } else {
        d();
    }
    return html;
}

function yzz_wrtgg(ggids, boolDisplayHtm) {
    if (typeof(isCloseYzzYktjCouplet) != 'undefined')
        return;

    var jsCont = '';

    if (ggids.length) {
        //广告不存在
        //或内部广告时，在内页不出现
        var is_inner_pp = true;
        for (var rp in ggids) {
            if (!g_yzz_usedAD[ggids[rp]] || (g_yzz_usedAD[ggids[rp]].visible == 0 && is_index_page == false)) {

            } else {
                is_inner_pp = false;
                break;
            }
        }

        if (is_inner_pp) return;

        if (boolDisplayHtm) {
            jsCont = getImgCode8ggid(ggids[0], g_yzz_usedAD, true);
        } else if (ggids[0] === 6159 || ggids[0] === 6160 || ggids[0] === 6283 || ggids[0] === 6297 || ggids[0] === 6371) { // 背景广告
            if (g_yzz_usedAD[ggids[0]] && g_yzz_usedAD[ggids[0]].visible) {
                if ('www.yzz.cn' == document.location.host) {
                    if (document.getElementById('bg-blue-block')) {
                        document.getElementById('bg-blue-block').style.display = 'none';
                    }
                    if (document.getElementById('bg-shade-block')) {
                        document.getElementById('bg-shade-block').style.display = 'none';
                    }
                }
                jsCont = '<style type="text/css"> #a-adv{position:absolute;top:0;left:0;width:100%;height:800px;z-index:10;background:url(http://yktj.yzz.cn' + g_yzz_usedAD[ggids[0]].src + ') no-repeat center top;min-width:980px;_width:expression((document.documentElement.clientWidth||document.body.clientWidth)<980?"980px":"");} #a-adv a{display:block; width:100%; height:800px; position:absolute; z-index:10; top:0; left:0;} #header,#content,#layout{position:relative;z-index:30;display:block;float:none;margin:0 auto;padding:0 10px;} #home,#page,#yzz{width:100%;padding:30px 0 0;position:relative;} #a-adv .m-ad-box{width:41px;margin:0 auto; position:relative; z-index:11;}#a-adv span{background:url("http://yktj.yzz.cn/pa/upload/images/m_colse.png") no-repeat; width:41px; height:15px; cursor:pointer; line-height:50; overflow:hidden; display:block; position:absolute;top:10px;left:440px;}#nav{margin-top:0px !important;}</style>' + '<div id="a-adv"><a href="' + getLnk8ggid(ggids[0], g_yzz_usedAD) + '" target="_blank"></a><div class="m-ad-box"><span onClick="colse_page_background()">关闭</span></div></div>';

            } else {
                //没有厂商时，检查有没有分屏广告
                if ((g_yzz_usedAD[6263] && g_yzz_usedAD[6263].visible) ||
                    (g_yzz_usedAD[6264] && g_yzz_usedAD[6264].visible)
                ) {
                    jsCont = split_background();
                } else {
                    return true
                };
            }
        } else if (ggids[0] === 6184 || ggids[0] === 6182 || ggids[0] === 6183 || ggids[0] === 6252 || ggids[0] === 6314 || ggids[0] === 6406 || ggids[0] === 6405 || ggids[0] === 6407) { // 右下角漂浮窗广告
            if (g_yzz_usedAD[ggids[0]] && g_yzz_usedAD[ggids[0]].visible) {
                document.getElementById("popup").getElementsByTagName('img')[0].src = 'http://yktj.yzz.cn' + g_yzz_usedAD[ggids[0]].src + '';
                document.getElementById("popup").getElementsByTagName('a')[0].href = getLnk8ggid(ggids[0], g_yzz_usedAD);
                document.getElementById("popup").style.display = 'block';
            } else {
                document.getElementById("popup").style.display = 'none';
            }
            document.getElementById("wrapAll").style.display = 'block';
            return true;
        } else if (ggids[0] === 6192 || ggids[0] === 6191 || ggids[0] === 6308) { // 视频广告
            if (g_yzz_usedAD[ggids[0]] && g_yzz_usedAD[ggids[0]].visible) {
                displayiCastVideo(ggids, g_yzz_usedAD);
            }
            return true;
        } else if (ggids[0] === 6185 || ggids[0] === 6186 || ggids[0] === 6305 || ggids[0] === 6306) { // 动态全屏广告特大
            if (g_yzz_usedAD[ggids[0]] && g_yzz_usedAD[ggids[0]].visible) {
                displayXBigScreenAd(ggids, g_yzz_usedAD, true);
            }
            return true;
        } else if ((ggids[0] === 6321 || ggids[0] === 6322) ||
            (ggids[0] === 6327 || ggids[0] === 6328) ||
            (ggids[0] === 6331 || ggids[0] === 6332) ||
            (ggids[0] === 6335 || ggids[0] === 6336) ||
            (ggids[0] === 6339 || ggids[0] === 6340) ||
            (ggids[0] === 6343 || ggids[0] === 6344) ||
            (ggids[0] === 6347 || ggids[0] === 6348)) { // 专区-动态全屏广告特大
            if (g_yzz_usedAD[ggids[0]] && g_yzz_usedAD[ggids[0]].visible) {
                displayXBigScreenAdGame(ggids, g_yzz_usedAD, true);
            }
            return true;
        } else if (ggids[0] === 6187 || ggids[0] === 6188) { // 动态全屏广告大
            if (g_yzz_usedAD[ggids[0]] && g_yzz_usedAD[ggids[0]].visible) {
                displayXBigScreenAd(ggids, g_yzz_usedAD, false);
            }
            return true;
        } else if (ggids[0] === 6189 || ggids[0] === 6190 || ggids[0] === 6307 || ggids[0] === 6317 || ggids[0] === 6316 || ggids[0] === 6367 || ggids[0] === 6365 || ggids[0] === 6381 || ggids[0] === 6383) { // 视窗广告
            if (g_yzz_usedAD[ggids[0]] && g_yzz_usedAD[ggids[0]].visible) {
                //八卦
                if ('xx.yzz.cn' == document.location.host) {
                    try {
                        document.getElementById("wrapAll").style.display = 'none';
                        document.getElementById("wrapAll_icon").style.display = 'none';
                    } catch (e) {}
                }
                displayMiniMedia(ggids, g_yzz_usedAD, (ggids[0] == 6316 || ggids[0] == 6365 || ggids[0] == 6381) ? 'left' : 'right');
            }else{
                // 此时没有广告
                
                if(/^www\.yzz\.cn$/gi.test(document.location.host)){ //判断是否是Yzz首页
                    //展示手游通微信二维码
                    renderSYT();
                }
            }
            return true;
        } else if (ggids[0] === 6193) { // 右上角斯页广告
            if (g_yzz_usedAD[ggids[0]] && g_yzz_usedAD[ggids[0]].visible) {
                rgtSiyeAD(ggids, g_yzz_usedAD);
            }
            return true;
        } else if (ggids[0] === 6388) { //叶子猪首页顶部推荐网游
            if (g_yzz_usedAD[ggids[0]] && g_yzz_usedAD[ggids[0]].visible) {
                jsCont = '<style type="text/css">.nav{background: url(http://yktj.yzz.cn' + g_yzz_usedAD[ggids[0]].src + ') no-repeat;}</style><h1 class="logo"><a href="' + getLnk8ggid(ggids[0], g_yzz_usedAD) + '" target="_blank">&nbsp</a></h1>';
            }
        }else if(ggids[0] === 6414){ // 15666首页顶部推荐

           
            if(g_yzz_usedAD[ggids[0]] && g_yzz_usedAD[ggids[0]].visible) {
                var lg = selectClass('.logo')[0];
                var _src = 'http://yktj.yzz.cn'+g_yzz_usedAD[ggids[0]].src;
                lg.style.height = 67 + 'px';
                lg.removeChild(lg.getElementsByTagName('img')[0]);
                lg.setAttribute('href',getLnk8ggid(ggids[0], g_yzz_usedAD) );
                var tnav = vquery('.topnav');               
                tnav[0].style.background = 'url("'+_src+'") no-repeat';
                jsCont ='';
                _src = null;
            }

        } else if (ggids[0] === 6408) { // 专区终端页  浮窗广告 原QT位置
            if (g_yzz_usedAD[ggids[0]] && g_yzz_usedAD[ggids[0]].visible) {
                jsCont = showYzzAd4SpeArea(ggids[0]);
            }
        } else if (ggids[0] === 6412) { /*内页广告 联运-内页swf广告位290x230 */
            var domains_6412  = ['xyq.yzz.cn','xy2.yzz.cn','sw.yzz.cn'];
            var isRun_6412 = false;
            for(var i = 0; i < domains_6412.length;i++){
                if(domains_6412[i] === window.location.host){
                    isRun_6412 = true;
                }
            }
            if(!isRun_6412){          
                if (g_yzz_usedAD[ggids[0]] && g_yzz_usedAD[ggids[0]].visible) {

                    var argid = g_yzz_usedAD[ggids[0]],
                        href = getLnk8ggid(ggids[0], g_yzz_usedAD),
                        src = 'http://yktj.yzz.cn'+argid.src,
                        format = src.substr(src.length - 3).toLowerCase(),
                        jsCont = '',
                        _html = [],
                        swf_w;

                    _html.push('<style>.yzz-popup-left-float{width:290px; height:230px; position:fixed; left:0; bottom:0; _position:absolute;_bottom:auto;_top:expression(eval(document.documentElement.scrollTop+document.documentElement.clientHeight-this.offsetHeight-(parseInt(this.currentStyle.marginTop,10)||0)-(parseInt(this.currentStyle.marginBottom,10)||0)));}.yzz-popup-side-float{width:100%; position:static; margin:10px 0;}</style>');
                    _html.push('<div class="yzz-popup-left-float yzz-popup-side-float">');
                    if (format == 'jpg' || format == 'png' || format == 'gif' || format == 'peg') {
                        //为图片时显示的代码
                        _html.push('<a href="' + href + '" target="_blank"><img src="' + src + '" /></a>');

                    } else if (format == 'swf') {
                        if(vquery('.aside').length > 0){
                            swf_w = vquery('.aside')[0].offsetWidth + 'px';
                        }else if(vquery('#aside').length[0] != null){
                            swf_w = vquery('#aside').offsetWidth + 'px';
                        }else{
                            swf_w = '290px';
                        }
                        //为动画时显示的代码
                        _html.push('<a href="' + href + '" target="_blank" style="width:' 
                            + swf_w +'; height:230px; display:block; position:absolute; z-index:2; background:#fff; opacity:0; filter:alpha(opacity=0);"></a><div style="position:absolute; z-index:1;"><embed src="' + src + '" allowfullscreen="true" quality="high" width="'  + swf_w +'" height="230px"  align="middle" allowscriptaccess="always" type="application/x-shockwave-flash" autostart="false" wmode="transparent"></div>');
                    }
                    _html.push('</div>');

                    jsCont += _html.join('');

                }
            }

        } else if(ggids[0] === 6253){
            if(g_yzz_usedAD[ggids[0]].visible == 0){ return false;}; 
            var argid = g_yzz_usedAD[ggids[0]],
                src = 'http://yktj.yzz.cn'+argid.src,
                href = getLnk8ggid(ggids[0], g_yzz_usedAD),

            jsCont = '<div class="banner" style="clear:both;width:950px; height:90px; background:#FFF;display:block; margin-bottom:20px; position:static; margin-left:0;"><a target="_blank" href="'+href+'"><img src="'+src+'"></a></div>';

        }else if (ggids[0] === 6413) { /*联运-内页左下角浮窗290x230---------- */

            var domains_6413  = ['xyq.yzz.cn','xy2.yzz.cn','sw.yzz.cn'];
            var isRun_6413 = false;
            for(var i = 0; i < domains_6413.length;i++){
                if(domains_6413[i] === window.location.host){
                    isRun_6413 = true;
                }
            }
            
            if(!isRun_6413){
                if (g_yzz_usedAD[ggids[0]] && g_yzz_usedAD[ggids[0]].visible) {
                    var argid = g_yzz_usedAD[ggids[0]],
                        src = 'http://yktj.yzz.cn'+argid.src,
                        href = getLnk8ggid(ggids[0], g_yzz_usedAD),
                        format = src.substr(src.length - 3).toLowerCase(),
                        jsCont = '',
                        _html = [];


                    _html.push('<style>#yzz-popup-left{z-index:999;} .yzz-popup-left-float{width:290px; height:230px; position:fixed; left:0; bottom:0; _position:absolute;_bottom:auto;_top:expression(eval(document.documentElement.scrollTop+document.documentElement.clientHeight-this.offsetHeight-(parseInt(this.currentStyle.marginTop,10)||0)-(parseInt(this.currentStyle.marginBottom,10)||0)));}.yzz-popup-side-float{width:100%; position:static; margin:10px 0;}</style>');
                    _html.push('<div class="yzz-popup-left-float" id="yzz-popup-left">');
                    
                
                    if(format == 'jpg' || format == 'png' || format == 'gif' || format == 'peg'){
                        /*为图片时显示的代码*/
                        _html.push('<a href="'+href+'" target="_blank"><img src="'+ src +'" /></a>');
                  
                    }else if(format == 'swf'){
                        /*为动画时显示的代码*/
                        var popup_close = 'onclick="document.getElementById(\'yzz-popup-left\').style.display=\'none\'"' ;
                        _html.push('<span style="display:block; width:16px; height:16px; background:#fff; color:#333; font-family:\'Microsoft YaHei\'; position:absolute; right:0; top:0; z-index:3;line-height: 16px;text-align: center;cursor: pointer;"'+popup_close+'>x</span><a href="'+href+'" target="_blank" style="width:100%; height:230px; display:block; position:absolute; z-index:2; background:#fff; opacity:0; filter:alpha(opacity=0);"></a><div style="position:absolute; z-index:1;"><embed src="'+ src +'" allowfullscreen="true" quality="high" style="width:290px; height:230px"  align="middle" allowscriptaccess="always" type="application/x-shockwave-flash" autostart="false" wmode="transparent"></div>');
                    }
                    _html.push('</div>');
                    jsCont += _html.join('');
                } 
            }

        } else if (ggids.length === 2) {
            if ((g_yzz_usedAD[ggids[0]] && g_yzz_usedAD[ggids[0]].visible) || (g_yzz_usedAD[ggids[1]] && g_yzz_usedAD[ggids[1]].visible)) {


                if(ggids[0] == 6415 ||  ggids[1] == 6416){

                    var _gid = ggids[0],
                    _lEle =  g_yzz_usedAD[_gid],
                    _rEle =  g_yzz_usedAD[ggids[1]];

                    jsCont += '<div class="couplet" id="yzz_couplet"><div class="left" style="border:1px solid #eee; overflow:hidden; position:fixed; _position:absolute;overflow:hidden; top:90px; left:2%; z-index:100; _top:expression(eval(document.documentElement.scrollTop+35)); width:auto; height:auto;"><div style="position:relative;width:140px; height:350px;">' + '<span style="display:block; background:url(http://yktj.yzz.cn/htmldata/images/min_close.gif) no-repeat; cursor:pointer; width:13px; height:13px; position:absolute; top:0; left:0; overflow:hidden;z-index:1;" onclick="document.getElementById(\'yzz_couplet\').style.display = \'none\';if (document.getElementById(\'blocknav\')) {document.getElementById(\'blocknav\').style.display = \'block\';}"></span>' + '<div id="sy_couplet" name="sy_couplet"><a href="' + getLnk8ggid(_gid, g_yzz_usedAD) + '" target="_blank" style="display:block;position:absolute;background:url(about:blank) no-repeat right bottom;width:140px;height:350px;"></a>' + Yzz.yktj.getElem(_lEle.src, 'style="width:140px;height:350px;"') + '</div>' + '</div></div>' + '<div class="right" style="border:1px solid #eee; overflow:hidden; position:fixed; _position:absolute;overflow:hidden; top:90px; right:2%; z-index:100; _top:expression(eval(document.documentElement.scrollTop+35)); width:auto; height:auto;"><div style="position:relative;width:140px; height:350px;">' + '<span style="display:block; background:url(http://yktj.yzz.cn/htmldata/images/min_close.gif) no-repeat; cursor:pointer; width:13px; height:13px; position:absolute; top:0; right:0; overflow:hidden;z-index:1;" onclick="document.getElementById(\'yzz_couplet\').style.display = \'none\';if (document.getElementById(\'blocknav\')) {document.getElementById(\'blocknav\').style.display = \'block\';}"></span>' + '<div id="sy_couplet" name="sy_couplet"><a href="' + getLnk8ggid(ggids[1], g_yzz_usedAD) + '" target="_blank" style="display:block;position:absolute;background:url(about:blank) no-repeat right bottom;width:140px;height:350px;"></a>' + Yzz.yktj.getElem(_rEle.src, 'style="width:140px;height:350px;"') + '</div>' + '</div></div>' + '</div>';


                }else if (ggids[0] == 6263 || ggids[1] == 6264) {
                    jsCont = split_background();
                } else if (ggids[0] == 6270 || ggids[1] == 6271) { //add by Baob 2012-02-27
                    var t = [];
                    try {
                        for (var i in ggids) {
                            if (g_yzz_usedAD[ggids[i]] && g_yzz_usedAD[ggids[i]].visible) {
                                t.push({
                                    href: getLnk8ggid(ggids[i], g_yzz_usedAD),
                                    src: g_yzz_usedAD[ggids[i]].src,
                                    width: 277,
                                    height: 60
                                });
                            }
                        }
                    } catch (e) {}
                    jsCont = pair_ad({
                        width: 560,
                        height: 60
                    }, t);
                } else if ((ggids[0] == 6289 || ggids[0] == 6290) ||
                    (ggids[0] == 6379 || ggids[0] == 6380) ||
                    (ggids[0] == 6361 || ggids[0] == 6362) ||
                    (ggids[0] == 6293 || ggids[0] == 6294) ||
                    (ggids[0] == 6295 || ggids[0] == 6296) ||
                    (ggids[0] == 6247 || ggids[0] == 6250) ||
                    (ggids[0] == 6326 || ggids[0] == 6325) ||
                    (ggids[0] == 6330 || ggids[0] == 6329) ||
                    (ggids[0] == 6334 || ggids[0] == 6333) ||
                    (ggids[0] == 6338 || ggids[0] == 6337) ||
                    (ggids[0] == 6342 || ggids[0] == 6341) ||
                    (ggids[0] == 6346 || ggids[0] == 6345)) { //add by Baob 2013-03-06
                    //八卦
                    if ('xx.yzz.cn' == document.location.host) {
                        try {
                            document.getElementById("wrapAll").style.display = 'none';
                            document.getElementById("wrapAll_icon").style.display = 'none';
                        } catch (e) {}
                    }
                    if (document.getElementById('sy_couplet')) {
                        return true;
                    }
                    jsCont = '';
                    var insCss = '';
                    if (document.getElementById('a-adv')) {
                        insCss = "style='display:none;'";

                        setTimeout(function() {
                            if ('card.yzz.cn' == document.location.host) {
                                if (document.getElementById('company'))
                                    document.getElementById('company').style.display = 'none';
                            }
                            if (document.getElementById('blocknav')) {
                                document.getElementById('blocknav').style.display = 'none';
                            }
                            document.getElementById('yzz_couplet').style.display = 'block';
                        }, 9000);

                    } else {
                        if (document.getElementById('blocknav')) {
                            document.getElementById('blocknav').style.display = 'none';
                        }
                    }


                    var _gid = ggids[0],
                        _lEle =  g_yzz_usedAD[_gid],
                        _rEle = g_yzz_usedAD[ggids[1]];

                    if ((_gid === 6293 ||  _gid === 6294 || _gid === 6295 ||  _gid === 6296 ) && ( 'iframe' === _lEle.type && 'iframe' === _rEle.type) ){
                        var _html = [];
                            _html.push('<div class="couplet" id="yzz_couplet" '+ insCss +'>');
                            _html.push('<div class="left" style="border:1px solid #eee; overflow:hidden; position:fixed; _position:absolute;overflow:hidden; top:90px; left:2%; z-index:100; _top:expression(eval(document.documentElement.scrollTop+35)); width:auto; height:auto;">');
                            _html.push('<div style="position:relative;width:140px; height:350px;">');
                            _html.push('<span style="display:block; background:url(http://yktj.yzz.cn/htmldata/images/min_close.gif) no-repeat; cursor:pointer; width:13px; height:13px; position:absolute; top:0; left:0; overflow:hidden;z-index:1;" onclick="document.getElementById(\'yzz_couplet\').style.display = \'none\';if (document.getElementById(\'blocknav\')) {document.getElementById(\'blocknav\').style.display = \'block\';}"></span>');

                            _html.push('<div id="sy_couplet" name="sy_couplet">');

                            _html.push('<iframe src="'+ decodeURIComponent(_lEle.addr) +'" name="iframe" marginwidth="0" marginheight="0" scrolling="No"  allowtransparency="allowtransparency" border="0" frameborder="No" height="350" width="140"> </iframe>');
                            _html.push('</div></div></div>');
                            //   左栏结束

                            _html.push('<div class="right" style="border:1px solid #eee; overflow:hidden; position:fixed; _position:absolute;overflow:hidden; top:90px; right:2%; z-index:100; _top:expression(eval(document.documentElement.scrollTop+35)); width:auto; height:auto;">');
                            _html.push('<div style="position:relative;width:140px; height:350px;">');
                            _html.push('<span style="display:block; background:url(http://yktj.yzz.cn/htmldata/images/min_close.gif) no-repeat; cursor:pointer; width:13px; height:13px; position:absolute; top:0; right:0; overflow:hidden;z-index:1;" onclick="document.getElementById(\'yzz_couplet\').style.display = \'none\';if (document.getElementById(\'blocknav\')) {document.getElementById(\'blocknav\').style.display = \'block\';}"></span>');

                            _html.push('<div id="sy_couplet" name="sy_couplet">');

                            _html.push('<iframe src="'+ decodeURIComponent(_rEle.addr)  +'" name="iframe" marginwidth="0" marginheight="0" scrolling="No"  allowtransparency="allowtransparency" border="0" frameborder="No" height="350" width="140"> </iframe>');
                             _html.push('</div></div></div>');
                             // 右栏结束
                            
                            _html.push('</div>');
                            // 对联结束

                            jsCont += _html.join('');

                    }else{

                        jsCont += '<div class="couplet" id="yzz_couplet" ' + insCss + '>' + '<div class="left" style="border:1px solid #eee; overflow:hidden; position:fixed; _position:absolute;overflow:hidden; top:90px; left:2%; z-index:100; _top:expression(eval(document.documentElement.scrollTop+35)); width:auto; height:auto;"><div style="position:relative;width:140px; height:350px;">' + '<span style="display:block; background:url(http://yktj.yzz.cn/htmldata/images/min_close.gif) no-repeat; cursor:pointer; width:13px; height:13px; position:absolute; top:0; left:0; overflow:hidden;z-index:1;" onclick="document.getElementById(\'yzz_couplet\').style.display = \'none\';if (document.getElementById(\'blocknav\')) {document.getElementById(\'blocknav\').style.display = \'block\';}"></span>' + '<div id="sy_couplet" name="sy_couplet"><a href="' + getLnk8ggid(_gid, g_yzz_usedAD) + '" target="_blank" style="display:block;position:absolute;background:url(about:blank) no-repeat right bottom;width:140px;height:350px;"></a>' + Yzz.yktj.getElem(_lEle.src, 'style="width:140px;height:350px;"') + '</div>' + '</div></div>' + '<div class="right" style="border:1px solid #eee; overflow:hidden; position:fixed; _position:absolute;overflow:hidden; top:90px; right:2%; z-index:100; _top:expression(eval(document.documentElement.scrollTop+35)); width:auto; height:auto;"><div style="position:relative;width:140px; height:350px;">' + '<span style="display:block; background:url(http://yktj.yzz.cn/htmldata/images/min_close.gif) no-repeat; cursor:pointer; width:13px; height:13px; position:absolute; top:0; right:0; overflow:hidden;z-index:1;" onclick="document.getElementById(\'yzz_couplet\').style.display = \'none\';if (document.getElementById(\'blocknav\')) {document.getElementById(\'blocknav\').style.display = \'block\';}"></span>' + '<div id="sy_couplet" name="sy_couplet"><a href="' + getLnk8ggid(ggids[1], g_yzz_usedAD) + '" target="_blank" style="display:block;position:absolute;background:url(about:blank) no-repeat right bottom;width:140px;height:350px;"></a>' + Yzz.yktj.getElem(_rEle.src, 'style="width:140px;height:350px;"') + '</div>' + '</div></div>' + '</div>';
                        
                    }

                } else if (ggids[0] == 6291 || ggids[0] == 6292) { //add by Baob 2013-03-07
                    jsCont = '';
                    setTimeout(function() {
                        if ('www.yzz.cn' == document.location.host && '/' == document.location.pathname) {
                            try {
                                var o = document.body.getElementsByTagName("ul");
                                for (var i = o.length; --i >= 0;) {
                                    if (o[i].id && -1 !== o[i].id.indexOf("clist") && o[i].style) {
                                        o[i].style.height = '96px';
                                    }
                                }
                            } catch (e) {}
                        }
                    }, 1000);
                    jsCont = '<div class="ad-focus"><div class="a1"><a target="_blank" href="' + getLnk8ggid(ggids[0], g_yzz_usedAD) + '">' + Yzz.yktj.getElem(g_yzz_usedAD[ggids[0]].src) + '</a></div><div class="popad"><div class="a2"><a style="background: url(\'about:blank\') no-repeat scroll right bottom transparent; width: 590px; height: 280px; position: absolute; z-index: 2;" target="_blank" href="' + getLnk8ggid(ggids[1], g_yzz_usedAD) + '"></a>' + Yzz.yktj.getElem(g_yzz_usedAD[ggids[1]].src, 'style="width:590px;height:280px;"') + '</div><a class="close">关闭</a></div></div>';
                } else if (ggids[0] === 6409 && ggids[1] === 6411) { // add By Yaolulin 2014-04-30  终端页浮窗双广告

                    if (g_yzz_usedAD[ggids[0]].visible == 0 && g_yzz_usedAD[ggids[1]].visible == 1) {
                        jsCont = showYzzAd4SpeArea(ggids[1]);
                    } else if (g_yzz_usedAD[ggids[1]].visible == 0 && g_yzz_usedAD[ggids[0]].visible == 1) {
                        jsCont = showYzzAd4SpeArea(ggids[0]);
                    } else if (g_yzz_usedAD[ggids[1]].visible == 1 && g_yzz_usedAD[ggids[0]].visible == 1) {
                        jsCont = showYzzAd4SpeArea(ggids[0], ggids[1]);
                    } else {
                        jsCont = "";
                    }
                } else if (ggids[0] == 6396 ||
                    ggids[0] == 6397 ||
                    ggids[0] == 6398 ||
                    ggids[0] == 6399 ||
                    ggids[0] == 6394 ||
                    ggids[0] == 6395 ||
                    ggids[0] == 6392 ||
                    ggids[0] == 6393
                ) { //add by Baob 2013-11-15
                    if ('undefined' !== is_index_page && false === is_index_page) {
                        return;
                    }
                    var find = function(arr, id, t, f) {
                        for (var i in arr) {
                            if (id == arr[i]) {
                                return t;
                            }
                        }
                        return f;
                    }
                    jsCont = (function() {
                        var showSlideAD_id = 'showSlideAD';
                        var smallid = [6396, 6398];
                        var smallbuttonid = [6397, 6399];
                        var bigid = [6394, 6392];
                        var bigbuttonid = [6395, 6393];
                        var b = bigid.concat(smallid);
                        var s = bigbuttonid.concat(smallbuttonid);
                        var showSlideAD_bigid = find(b, ggids[0], ggids[0], ggids[1]);
                        var showSlideAD_smallid = find(s, ggids[0], ggids[0], ggids[1]);
                        var thebigsize = find(bigid, showSlideAD_bigid, 540, 260);
                        try {
                            return showSlideAD(showSlideAD_id, true, showSlideAD_bigid, showSlideAD_smallid, thebigsize);
                        } catch (e) {
                            try {
                                console.log(e.message);
                            } catch (e) {

                            }
                        }
                    })();
                } else {
                    jsCont = '<div class="half-banner" style="background:#FFF; clear:both; height:90px; margin:5px auto; width:950px;">' + '<div style="border:1px solid #ccc; float:left; height:90px; overflow:hidden; width:470px;" class="l-banner">' + getImgCode8ggid(ggids[0], g_yzz_usedAD, true) + '</div>' + '<div style="border:1px solid #ccc; float:right; height:90px; overflow:hidden; width:470px;" class="r-banner">' + getImgCode8ggid(ggids[1], g_yzz_usedAD, true) + '</div>' + '</div>';
                }
            } else {
                if (ggids[0] == 6264 || ggids[0] == 6263 || ggids[0] == 6270 || ggids[1] == 6271 || !document.location.href.match(/http\:\/\/((www)|(bbs)|(dl)|(pc))./)) {
                    jsCont = '';
                } else {
                    jsCont = '<div class="yzz_suibian" style="clear:both;height:8px;width:950px;overflow:hidden;"></div>';
                }
            }
        } else if (ggids.length === 3) {
            if (ggids[0] == 6386 || ggids[0] == 6385 || ggids[0] == 6387) {
                if (g_yzz_usedAD[ggids[0]] && g_yzz_usedAD[ggids[0]].visible) {
                    Yzz.yktj.addEvent(window, 'load', function() {
                        if (document.getElementById('loadE') ||
                            document.getElementById('big') ||
                            document.getElementById('iCast') ||
                            document.getElementById('media_float_left') ||
                            document.getElementById('media_float_right')
                        ) {
                            setTimeout(function() {
                                lAD(ggids, g_yzz_usedAD);
                            }, 9000);
                        } else {
                            lAD(ggids, g_yzz_usedAD);
                        }
                    });
                }
            }
        } else if (ggids.length === 4) {
            if (ggids[0] == 6266 || ggids[0] == 6267 || ggids[0] == 6268 || ggids[0] == 6269) { //add by Baob 2012-02-27
                jsCont = '';
                var t = [];
                try {
                    for (var i in ggids) {
                        if (g_yzz_usedAD[ggids[i]] && g_yzz_usedAD[ggids[i]].visible) {
                            t.push({
                                href: getLnk8ggid(ggids[i], g_yzz_usedAD),
                                src: g_yzz_usedAD[ggids[i]].src
                            });
                        }
                    }
                } catch (e) {}
                jsCont = multi_ad({
                    prefix: '<li>',
                    suffix: '</li>'
                }, t);
                if (jsCont) {
                    jsCont = '<div class="module twice"><div class="title"><h3><i>商讯</i>推荐</h3></div><div class="bd pt15"><ul class="clearfix pic120x80 pic120x80x2">' + jsCont + '</ul></div></div>';
                }
            } else {
                if (document.getElementById('sy_couplet')) {
                    return true;
                }
                jsCont = '';
                if (g_yzz_usedAD[ggids[0]] && g_yzz_usedAD[ggids[0]].visible) {
                    var insCss = '';
                    if (document.getElementById('a-adv')) {
                        insCss = "style='display:none;'";

                        setTimeout(function() {
                            document.getElementById('yzz_couplet').style.display = 'block';
                        }, 9000);
                    }

                    jsCont += '<div class="couplet" id="yzz_couplet" ' + insCss + '>' + '<div class="left" style="border:1px solid #eee; overflow:hidden; position:fixed; _position:absolute;overflow:hidden; top:35px; left:2%; z-index:100; _top:expression(eval(document.documentElement.scrollTop+35)); width:auto; height:auto;"><div style="position:relative;width:120px; height:260px;">' + '<span style="display:block; background:url(http://yktj.yzz.cn/htmldata/images/min_close.gif) no-repeat; cursor:pointer; width:13px; height:13px; position:absolute; top:0; right:0; overflow:hidden;" onclick="document.getElementById(\'yzz_couplet\').style.display = \'none\';"></span>' + '<div id="sy_couplet" name="sy_couplet">' + getImgCode8ggid(ggids[0], g_yzz_usedAD, true) + '</div>' + '</div></div>' + '<div class="right" style="border:1px solid #eee; overflow:hidden; position:fixed; _position:absolute;overflow:hidden; top:35px; right:2%; z-index:100; _top:expression(eval(document.documentElement.scrollTop+35)); width:auto; height:auto;"><div style="position:relative;width:120px; height:260px;">' + '<span style="display:block; background:url(http://yktj.yzz.cn/htmldata/images/min_close.gif) no-repeat; cursor:pointer; width:13px; height:13px; position:absolute; top:0; right:0; overflow:hidden;" onclick="document.getElementById(\'yzz_couplet\').style.display = \'none\';"></span>' + '<div id="sy_couplet" name="sy_couplet">' + getImgCode8ggid(ggids[1], g_yzz_usedAD, true) + '</div>' + '</div></div>' + '</div>';
                }

                if (g_yzz_usedAD[ggids[2]] && g_yzz_usedAD[ggids[2]].visible) {
                    var insCss = '';
                    if (document.getElementById('a-adv')) {
                        insCss = "style='display:none;'";

                        setTimeout(function() {
                            document.getElementById('yzz_couplet2').style.display = 'block';
                        }, 9000);
                    }

                    jsCont += '<div class="couplet2" id="yzz_couplet2" ' + insCss + '>' + '<div class="left" style="border:1px solid #eee; overflow:hidden; position:fixed; _position:absolute; overflow:hidden; top:320px; left:2%; z-index:100; _top:expression(eval(document.documentElement.scrollTop+320)); width:auto; height:auto;"><div style="position:relative; width:120px; height:260px;">' + '<span style="display:block; background:url(http://yktj.yzz.cn/htmldata/images/min_close.gif) no-repeat; cursor:pointer; width:13px; height:13px; position:absolute; top:0; right:0; overflow:hidden;" onclick="document.getElementById(\'yzz_couplet2\').style.display = \'none\';"></span>' + '<div id="sy_couplet" name="sy_couplet">' + getImgCode8ggid(ggids[2], g_yzz_usedAD, true) + '</div>' + '</div></div>' + '<div class="right" style="border:1px solid #eee; overflow:hidden; position:fixed; _position:absolute; overflow:hidden; top:320px; right:2%; z-index:100; _top:expression(eval(document.documentElement.scrollTop+320)); width:auto; height:auto;"><div style="position:relative; width:120px; height:260px;">' + '<span style="display:block; background:url(http://yktj.yzz.cn/htmldata/images/min_close.gif) no-repeat; cursor:pointer; width:13px; height:13px; position:absolute; top:0; right:0; overflow:hidden;" onclick="document.getElementById(\'yzz_couplet2\').style.display = \'none\';"></span>' + '<div id="sy_couplet" name="sy_couplet">' + getImgCode8ggid(ggids[3], g_yzz_usedAD, true) + '</div>' + '</div></div>' + '</div>';
                }
            }
        } else {
            if (g_yzz_usedAD[ggids[0]] && g_yzz_usedAD[ggids[0]].visible) {
                jsCont = getImgCode8ggid(ggids[0], g_yzz_usedAD, true);

                if (ggids[0] == 6176 || ggids[0] == 6175) {
                    jsCont = '<div class="r-ad"><div class="yzz_ifrqingtianzhu">' + jsCont + '</div></div>'; //  width="200" height="340"
                } else if (ggids[0] == 6224 || ggids[0] == 6302) {
                    jsCont = '<div class="cols1 flash" id="pic-adv"><div class="yzz_ifrqingtianzhu">' + jsCont + '</div></div>'; //  width="285" height="250"
                    //} else if (ggids[0] == 6205) {
                    //  jsCont = '<div class="banner" style="clear:both;width:760px; height:60px; background:#FFF;">' + jsCont + '</div>';  //  width="760" height="60"
                } else if (ggids[0] == 6243) {
                    jsCont = '<div class="cols1 flash"><div class="yzz_ifrqingtianzhu">' + jsCont + '</div></div>'; //  width="300" height="350"
                } else if (ggids[0] == 6262 || ggids[0] == 6315 || ggids[0] == 6369 || ggids[0] == 6389) { //双通
                    var margin = '0 auto';
                    if (ggids[0] == 6262 && 'undefined' !== typeof g_yzz_usedAD["6389"] && 'undefined' !== typeof g_yzz_usedAD["6389"]["visible"] && g_yzz_usedAD["6389"]["visible"]) {
                        margin = '5px auto 0';
                    }
                    jsCont = '<div class="banner" style="clear:both;width:560px; height:60px; background:#FFF; margin:' + margin + ';">' + jsCont + '</div>';
                } else if (ggids[0] == 6261) { //论坛一、二楼
                    jsCont = '<div class="banner" style="clear:both;width:950px; height:90px; background:#FFF; margin:0 auto;margin-bottom:10px;">' + jsCont + '</div>'; //  width="950" height="90"
                } else if (ggids[0] == 6275 || ggids[0] == 6276 || ggids[0] == 6277 || ggids[0] == 6278 || ggids[0] == 6279) { //news,newgame,xx,dl,pc边栏广告
                    jsCont = '<div class="ad280x70">' + jsCont + '</div>';
                } else if (ggids[0] == 6298 || ggids[0] == 6299 || ggids[0] == 6304 || ggids[0] == 6200) { //八卦banner
                    jsCont = '<div class="banner" style="clear:both;width:950px; height:100px; background:#FFF;">' + jsCont + '</div>';
                } else if (ggids[0] == 6376 || ggids[0] == 6375) { //手游banner
                    jsCont = '<div class="banner" style="clear:both;width:980px; height:100px; background:#FFF;">' + jsCont + '</div>';
                }else if(ggids[0] == 6163 || ggids[0] == 6164 ){
                
                    var  instans = g_yzz_usedAD[ggids[0]];
                    
                    if(instans.type === 'iframe'){
                        jsCont = '<div class="banner" style="clear:both;width:950px; height:90px; background:#FFF;"><iframe src="'+decodeURIComponent(instans.addr) +'" name="iframe" marginwidth="0" marginheight="0" scrolling="No"  allowtransparency="allowtransparency" border="0" frameborder="No" height="100%" width="100%"> </iframe></div>'; //  width="950" height="80"
                    }else{
                        jsCont = '<div class="banner" style="clear:both;width:950px; height:90px; background:#FFF;">' + jsCont + '</div>'; //  width="950" height="80"
                    }
                    
                } else {
                    jsCont = '<div class="banner" style="clear:both;width:950px; height:90px; background:#FFF;">' + jsCont + '</div>'; //  width="950" height="80"
                }
                if (ggids[0] == 6161) { //叶子猪首页顶部横幅
                    if (document.getElementById('bg-shade-block')) {
                        var d = document.getElementById('bg-shade-block').style.display;
                        document.getElementById('bg-shade-block').style.display = 'block';
                        document.getElementById('bg-shade-block').style.height = document.getElementById('bg-shade-block').clientHeight + 100 + 'px';
                        document.getElementById('bg-shade-block').style.display = d;
                    }
                }
            } else {
                jsCont = '<div class="yzz_suibian" style="clear:both;overflow:hidden;height:5px;"></div>';
            }
        }
        document.write(jsCont);
    }
}

// get from http://www.yzz.cn/home/theme/popwin/tu.js

if (typeof(crtRgtBtnFloatAD8denoLck) == 'undefined' && (!is_index_page && typeof(isOpenInnerpageADWindow) == 'undefined') && -1 === document.location.host.indexOf("qidian.yzz.cn")) {

    var crtRgtBtnFloatAD8denoLck = true;

    function getvalue() {
        var href = location.href;
        //href = href.substring(7, href.indexOf(".yezizhu.com/") );
        href = href.substring(7, href.indexOf("."));
        return href;
    }

    //ss = Yzz.yktj.getCookie('str');
    function getvalue2(ss) {
        var tmpPage;
        if ((document.location.href.match(/page=\d+/) && (!document.location.href.match(/page\=1$/)) && (!document.location.href.match(/page%3D1$/))) || (
            (tmpPage = document.location.href.match(/\,(\d+)\.(s*)htm/)) && (parseInt(tmpPage[1]) < 200 && parseInt(tmpPage[1]) != 1)
        )) {
            change_small();
        } else {
            var href2 = location.href;
            var arr = new Array();
            arr = href2.split('/');
            var length = arr.length;
            arr2 = arr[length - 1];
            arr3 = arr2.split('.');
            arr4 = arr3[0];
            arr5 = arr4.split('_');
            var length2 = arr5.length;
            arr6 = arr5[0];
            arr7 = arr5[1];
            var str = Yzz.yktj.setCookie('str', arr6, 24);

            if (arr6 == ss) {
                if (arr7 != undefined) {
                    change_small();
                }
            }
        }
        //document.write(arr6);
    }

    function change_small() {
        if ('xx.yzz.cn' == document.location.host && (document.getElementById('yzz_couplet') || document.getElementById('media_float_right'))) {
            return true;
        }
        document.getElementById("wrapAll").style.display = "none";
        document.getElementById("wrapAll_icon").style.display = "block";
    }

    /////////////////////////////////////////end js cookie manager


    function change_msgbox_status(o, h) {
        if ('xx.yzz.cn' == document.location.host && (document.getElementById('yzz_couplet') || document.getElementById('media_float_right'))) {
            return true;
        }
        if (o == "o") {
            var o = document.getElementById('wrapAll');
        }
        if (h == "h") {
            var h = msgbox_status;
        }
        o.style.display = "none";
        document.getElementById("wrapAll_icon").style.display = "block";
        //document.getElementById("cc").show();
        //o.style.height=(h==211)?'41px':'211px';
        //Yzz.yktj.setCookie('msgbox_status', 'none',1);
        return h == 211 ? 41 : 211;
    }

    var pop_win_global = {
        msgbox_status: null,
        site: '',
        popWinTimter: null
    };

    var msgbox_status = Yzz.yktj.getCookie('msgbox_status');
    pop_win_global.site = getvalue();

    function gettime() {
        pop_win_global.popWinTimter = setTimeout("change_msgbox_status('o','h')", 30000);
        //setInterval("change_msgbox_status('o','h')",5000);    
    }

    //window.onload = gettime;

    function changebig() {
        clearTimeout(pop_win_global.popWinTimter);
        //gettime();
        document.getElementById("wrapAll_icon").style.display = "none";
        document.getElementById("wrapAll").style.display = "block";
        Yzz.yktj.setCookie('msgbox_status', 'block', 1);
    }
    document.write("<style type=\"text/css\">#wrapAll{ width:180px; position:fixed; bottom:0px; right:0px; display:block; z-index:99;}*html #wrapAll,*html #wrapAll_icon{position:absolute; top:expression(eval(document.documentElement.scrollTop+document.documentElement.clientHeight-this.offsetHeight-(parseInt(this.currentStyle.marginTop,10)||0)-(parseInt(this.currentStyle.marginBottom,0)||0))); left:expression(eval(document.documentElement.scrollLeft+document.documentElement.clientWidth-this.offsetWidth)-(parseInt(this.currentStyle.marginLeft,10)||0)-(parseInt(this.currentStyle.marginRight,0)||0));}*html {background-image:url(about:blank); background-attachment:fixed;}.popup img{ width:180px;height:90px;}#popup-wrapper{ height:404px; border:solid 1px #e6e6e6; border-top:solid 2px #67bcdb; background:#fff;}.wrapAll_hd{ height:30px; background:#eeeeee; line-height:30px; padding:0 10px; color:#666666;}.wrapAll_hd span{ float:right; display:inline; font-family:\"微软雅黑\";}.wrapAll_hd span i{ font-size:16px; margin-left:10px;}.wrapAll_hd span i,.wrapAll_hd span em{ cursor:pointer;}.wrapAll_hd h4{ font-weight:normal;}#wrapAll_icon{ z-index:1002;width:96px; height:32px; background:url(http://www.yzz.cn/home/theme/popwin/img/btn.jpg) no-repeat; position:fixed; bottom:0px; right:0px; display:none; cursor:pointer;}.popup{width:180px;height:90px;overflow:hidden;}</style>");

    function __readerFloatModal() {
        
        var domain = document.location.host,
            url = document.location.href;
        
        /**
        * 去除15666 域名下弹窗
        **/
        if(domain.match('15666.com')){
            return false;
        }
        
        var html = [],
            _host = null;
        try {
            host = document.location.host.split('.')[0];
        } catch (e) {
            host = 'default';
        }
        html.push('<div id="wrap_terminal">');
        html.push('<div id="wrapAll">');
        html.push('<div id="popup-wrapper"><div class="wrapAll_hd"><span>');
        html.push('<em id="wrapPinch" >―</em>');
        html.push('<i id="wrapclose" >x</i>');
        html.push('</span><h4>叶子猪内容精选</h4></div>');
        html.push('<iframe src="http://www.yzz.cn/home/special/pop/2014popwindow.html#' + host + '"  frameborder="no" scrolling="no"width="180" height="374" ></iframe>');
        html.push('</div>');
        html.push('<div class="popup" id="popup" style="display:none;">');
        html.push('<a href="#" target="_blank">');
        html.push('<img src="#" />');
        html.push('</a></div>');
        html.push('</div>');
        html.push('<div id="wrapAll_icon" onclick="changebig()"></div></div>');
        document.write(html.join(''));
    }
    __readerFloatModal();

    //getvalue2(getCookie('str'));
    /* 
    去掉强制弹出三次的限制
    
    
    var pop_win_timer = null;
    function pop_win_crazy(){
        var pop_times = Yzz.yktj.getCookie('viewOnceLck');
        pop_times = parseInt(pop_times);
        if( isNaN(pop_times) ) pop_times = 0;

        if( pop_times < 3){
            //判断当前时候添加
            var setCookie = function(NameOfCookie, value, expiredays){
                var ExpireDate = new Date ();
                ExpireDate.setTime(ExpireDate.getTime() + (expiredays * 3600000 ));
                document.cookie = NameOfCookie + "=" + escape(value) +  ";domain=" + escape(document.location.hostname) + ";path=/"  + ((expiredays == null) ? "" : "; expires=" + ExpireDate.toGMTString());
            }
            var keyname = 'viewOnceLckChildren';

            if (Yzz.yktj.getCookie(keyname)) {
                if( pop_win_timer ) clearInterval(pop_win_timer);
                change_small();
                return ;
            }
            setCookie(keyname, 1, 24);
            changebig();
            Yzz.yktj.setCookie('viewOnceLck', ++pop_times, 24);
        }else{
            if( pop_win_timer ) clearInterval(pop_win_timer);
                //change_small();
                document.getElementById("wrapAll").style.display='block';
                document.getElementById("wrapAll_icon").style.display='none';
        }
    }
    //change_small();
    if (!is_index_page) {
        pop_win_crazy();
        pop_win_timer = setInterval(function(){pop_win_crazy();}, 60000);
    }
    
  */
    if (document.location.href.indexOf('http://bbs.') != -1) {
        yzz_wrtgg([6184]);
        yzz_wrtgg([6406]);
    } else if (document.location.href.match(/http\:\/\/(webgame)\./)) {
        yzz_wrtgg([6252]);
    } else if (document.location.href.match(/http\:\/\/(xx)\./)) {
        yzz_wrtgg([6314]);
    } else if ('www.15666.com' === document.location.host) {
        yzz_wrtgg([6390]);
    } else if (document.location.href.match(/http\:\/\/((news)|(newgame)|(dl)|(pc)|(esports)|(card)|(flash)|(v)|(tu))\./)) {
        yzz_wrtgg([6182]);
        yzz_wrtgg([6405]);
    } else {
        yzz_wrtgg([6183]);
        yzz_wrtgg([6407]);
    }

    /*  gettime();

document.getElementById('wrapAll').onmouseover = function()
{
    if (pop_win_global.popWinTimter
         && document.getElementById("wrapAll").style.display == 'block'
    ){
        clearTimeout(pop_win_global.popWinTimter);
    }
};

    document.getElementById('wrapAll').onmouseout = function() {
        if (document.getElementById("wrapAll").style.display == 'block') {
            gettime();
        }
    };
 */
}

if (typeof(crtCouplteAD8denoLck) == 'undefined') {
    try {
        var gamedomain = document.location.href.match(/http:\/\/([\w]+)\.yzz\.cn/)[1];
        var gameconfig = {
            qqxl: [6326, 6325, 6327, 6328],
            thyj: [6330, 6329, 6331, 6332],
            xy2: [6334, 6333, 6335, 6336],
            dfgs: [6338, 6337, 6339, 6340],
            zhl: [6342, 6341, 6343, 6344],
            ft: [6346, 6345, 6347, 6348],
            xyq: [6350, 6349, 6351, 6352]
        };
        var game = gameconfig[gamedomain];
    } catch (e) {}
    if ('undefined' === typeof game || !game) {
        var game = [6247, 6250, 6321, 6322];
        //右侧对联广告,左侧对联广告,全站专区全屏广告 （特大）,全站专区全屏广告 （特大）button
    }
    try {
        if (!document.location.href.match(/http\:\/\/((www)|(bbs)|(news)|(newgame)|(xx)|(dl)|(webgame)|(pc)|(flash)|(card)|(es)|(123)|(zj)|(act)|(v)|(esports)|(m3guo))./)) {
            if ('/' === document.location.pathname || -1 !== document.location.pathname.indexOf('/index.')) {
                yzz_wrtgg([game[2], game[3]]); // 动态全屏广告（特大）
            }
            yzz_wrtgg([game[0], game[1]]);
        }
    } catch (e) {}
}

function colse_page_background2() {
    document.getElementById("big-adv").style.display = "none";
    var yzz_id = document.getElementById("yzz");
    if (yzz_id) {
        yzz_id.style.paddingTop = "0px";
    }
    var home_id = document.getElementById("home");
    if (home_id) {
        home_id.style.paddingTop = "0px";
    }
    var page_id = document.getElementById("page");
    if (page_id) {
        page_id.style.paddingTop = "0px";
    }
}

function colse_page_background() {
    document.getElementById("a-adv").style.display = "none";

    var yzz_id = document.getElementById("yzz");

    if (yzz_id) {

        yzz_id.style.paddingTop = "0px";

    }

    var home_id = document.getElementById("home");

    if (home_id) {

        home_id.style.paddingTop = "0px";

    }

    var page_id = document.getElementById("page");

    if (page_id) {

        page_id.style.paddingTop = "0px";

    }
    if ('www.yzz.cn' == document.location.host) {
        if (document.getElementById('bg-blue-block')) {
            document.getElementById('bg-blue-block').style.display = 'block';
        }
        if (document.getElementById('bg-shade-block')) {
            document.getElementById('bg-shade-block').style.display = 'block';
        }
    }
}

/**
 * 画中画
 */
function loadPipMds() {
    return;
    //document.write( '<div class="ifr"><iframe src="http://www.yzz.cn/common/pip/index.html" frameborder="0" width="348" scrolling="no" height="390"></iframe></div>');
}

function split_background() {
    return '<style type="text/css">body #blocknav{display:none;}#home, #page, #yzz {padding:30px 0 0;position:relative;width:100%;}#header, #content ,#layout{display:block;float:none;margin:0 auto;padding-left:0; padding-right:0;position:relative;z-index: 30;}#big-adv{width:100%; background:url(http://yktj.yzz.cn' + g_yzz_usedAD[6263].src + ') repeat-x center top; position:absolute; z-index:10;top:0;left:0; min-width:950px; height:800px;}.bgbig{width:100%; background:url(http://yktj.yzz.cn' + g_yzz_usedAD[6264].src + ') no-repeat center top; position:relative; height:800px;}.bg-l-adv{width:49.99%; position:absolute;top:0;right:50%; height:800px; z-index:10;}.bg-r-adv{width:49.99%; position:absolute;top:0;left:50%; height:800px; z-index:10;}.close-adv{clear:both;margin:0 auto;width:41px; position:relative; z-index:11;}.close-adv span{background: url("http://yktj.yzz.cn/pa/upload/images/m_colse.png") no-repeat scroll 0 0 transparent;cursor: pointer;display: block;height: 15px;left: 440px;line-height: 50;overflow: hidden;position: absolute;top: 10px;width: 41px;}</style><div id="big-adv" class="clearfix"><div class="bgbig"><a href="' + getLnk8ggid(6263, g_yzz_usedAD) + '" title="" target="_blank" class="bg-l-adv"></a><a href="' + getLnk8ggid(6264, g_yzz_usedAD) + '" title="" target="_blank" class="bg-r-adv"></a><div class="close-adv"><span title="关闭" onclick="colse_page_background2()()">关闭</span></div></div></div>';
}
//add by Baob 2012-02-27
function pair_ad(div, data) {
    if ('undefined' == typeof data || !data) {
        return;
    }
    var t = '<div style="clear:both; width:' + div.width + 'px; height:' + div.height + 'px; margin:10px auto;">';
    try {
        var count = 1;
        for (var i in data) {
            t += '<a href="' + data[i].href + '" class="' + (count == 1 ? 'fl' : 'fr') + '"><img src="http://yktj.yzz.cn' + data[i].src + '" width="' + data[i].width + '" height="' + data[i].height + '"></a>';
            count += 1;
        }
    } catch (e) {}
    t += '</div>';
    return t;
}

function multi_ad(div, data) {
    if ('undefined' == typeof data || !data) {
        return;
    }
    var t = '';
    var prefix = suffix = '';
    if ('undefined' !== typeof div.prefix) {
        prefix = div.prefix;
    }
    if ('undefined' !== typeof div.suffix) {
        suffix = div.suffix;
    }
    try {
        for (var i in data) {
            t += prefix + '<a href="' + data[i].href + '"><img src="http://yktj.yzz.cn' + data[i].src + '"></a>' + suffix;
        }
    } catch (e) {}
    return t;
}

/**
 * @author Yaolulin
 * @time  2014-04-14 16:00:25
 * @descprition 判断是否是专区终端页
 * @update: 修复手游站无浮窗
 * @update: 2014-09-24 11:14:06   去除15666 域名下 百度手机助手弹窗
 **/
function isTerminalPage() {
    var domain = document.location.host,
        url = document.location.href;
    //return !!(domain.match('yzz.cn') && domain != 'www.yzz.cn'  && domain != 'yzz.cn' && url.match(/.*\.yzz\.cn((\/.*\/)*?([0-9]|-|[a-zA-Z])+?\.s?html)?/gi))
    return (domain.match('yzz.cn') && domain != 'www.yzz.cn' && domain != 'yzz.cn' && url.match(/.*\.(yzz\.cn)((\/.*\/)*?([0-9]|-|[a-zA-Z])+?\.s?html)?/gi));
}

/**
 * @author Yaolulin
 * @time  2014-04-14 16:00:25
 * @descprition 专区终端页浮窗广告  原QT位置
 **/
function showYzzAd4SpeArea(ggid) {
    var html = [],
        len = arguments.length;
    if (isTerminalPage()) {
        html.push('<div id="yzz_area">');
        html.push('<span class="qtClose">X</span>');
        
        if(window.location.host === "wow.yzz.cn"){
            html.push('<embed id="AdSame_Flash528" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" wmode="transparent" type="application/x-shockwave-flash" src="http://common.yzz.cn/ad_resc/15666_wx_ad2.swf" style="width:176px; height:260px;">');
            html.push('<style type="text/css">');
            html.push('#yzz_area{ width:176px; height:260px; position:fixed; _position:absolute; overflow:hidden; z-index:99;}');
            html.push('#yzz_area .qtClose{ position:absolute; top:0;right:0; cursor:pointer;background:url(http://yktj.yzz.cn/htmldata/images/min_close.gif) no-repeat ;text-indent:-999em;overflow:hidden;width:13px;height:13px;}');
            html.push('</style>');
        }else{
            switch (len) {
                case 1:
                    html.push('<a href="' + getLnk8ggid(ggid, g_yzz_usedAD) + '" target="_blank">');
                    html.push('<img src="http://yktj.yzz.cn' + g_yzz_usedAD[ggid].src + '" >');
                    html.push('</a>');

                    html.push('<style type="text/css">');
                    html.push('#yzz_area{ width:120px; height:200px; position:fixed; _position:absolute; overflow:hidden; z-index:99;}');
                    html.push('#yzz_area img{ display:block; width:120px; height:200px; border:none;}');
                    html.push('#yzz_area .qtClose{ position:absolute; top:0;right:0; cursor:pointer;background:url(http://yktj.yzz.cn/htmldata/images/min_close.gif) no-repeat ;text-indent:-999em;overflow:hidden;width:13px;height:13px;}');
                    html.push('</style>');

                    break;

                default:

                    var ids = Array.prototype.slice.call(arguments, 0),
                        _ggid = null;
                    for (var j = 0; j < len; j++) {

                        _ggid = ids[j];

                        html.push('<a href="' + getLnk8ggid(_ggid, g_yzz_usedAD) + '" target="_blank">');
                        html.push('<img src="http://yktj.yzz.cn' + g_yzz_usedAD[_ggid].src + '" >');
                        html.push('</a>');

                        if (j === 0) {
                            html.push("<div style='width:120px;height:20px;'></div>");
                            html.push('<span class="qtClose2">X</span>');
                        }
                    }


                    html.push('<style type="text/css">');
                    html.push('#yzz_area{ width:120px; height:220px; position:fixed; _position:absolute; overflow:hidden; z-index:99;}');
                    html.push('#yzz_area img{ display:block; width:120px; height:100px; border:none;}');
                    html.push('#yzz_area .qtClose{ position:absolute; top:0;right:0; cursor:pointer;background:url(http://yktj.yzz.cn/htmldata/images/min_close.gif) no-repeat ;text-indent:-999em;overflow:hidden;width:13px;height:13px;}');
                    html.push('#yzz_area .qtClose2{ position:absolute; top:120px;right:0; cursor:pointer;background:url(http://yktj.yzz.cn/htmldata/images/min_close.gif) no-repeat ;text-indent:-999em;overflow:hidden;width:13px;height:13px;}');
                    html.push('</style>');
                    break;
            }
        }
        html.push('</div>');
    }
    return html.join('');
}
/**
 * @author Yaolulin
 * @time  2014-04-14 16:00:25
 * @descprition 绑定专区终端页浮窗广告事件
 **/

function bindToYzzArea() {
    var _qt = document.getElementById("yzz_area"),
        wleft = Math.min(document.body.offsetWidth,document.body.clientWidth,document.documentElement.offsetWidth,document.documentElement.clientWidth) / 2 + 490,
        wtop = 100,
        srtop = 0;

    if (_qt == null) {
        return false;
    }

    /**
    * @author Pengguoyong
    * @time  2015-01-15 15:20:25
    * @descprition 只改变专区：英魂之刃 的广告位的 left值。
    **/
    if(window.location.host === "yhzr.yzz.cn"){
        _qt.style.cssText = "left:" + (wleft + 90) + "px;display:block;top:" + wtop + "px";
    }else{
        _qt.style.cssText = "left:" + wleft + "px;display:block;top:" + wtop + "px";
    };

   /* _qt.style.cssText = "left:" + wleft + "px;display:block;top:" + wtop + "px";*/

    function qtScrolling() {
        srtop = document.body.scrollTop || document.documentElement.scrollTop;
        if (!-[1, ] && !window.XMLHttpRequest) {
            srtop = srtop + wtop;
            _qt.style.top = srtop;
        }
    }

    function addEvent(obj, e, add) {
        if (!obj || !e || !add) {
            return false;
        }
        if (window.addEventListener) {
            obj.addEventListener(e, add, false);
        } else {
            obj.attachEvent('on' + e, add);
        }
    }

    function qtClose() {
        document.getElementById('yzz_area').style.display = "none";
    }

    addEvent(window, 'scroll', qtScrolling);
    addEvent(_qt.getElementsByTagName('span')[0], 'click', qtClose);
    addEvent(_qt.getElementsByTagName('span')[1], 'click', qtClose);

}

if (isTerminalPage()) {

    if (g_yzz_usedAD[6408]['visible'] != 0) {

        yzz_wrtgg([6408]);

    } else if(g_yzz_usedAD[6409]['visible'] != 0 && g_yzz_usedAD[6411]['visible'] != 0) {

        yzz_wrtgg([6409, 6411]);

    }else{
       
        

        var html = [];
        if(window.location.host === "lol.yzz.cn"){
            html.push('<div id="yzz_area">');
            html.push('<span class="qtClose">X</span>');
            html.push('<div id="AdSame_Flash528"><img src="http://common.yzz.cn/ad_resc/lol_gif_150108.gif" style="width:220px;"></div>');      
            html.push('<style type="text/css">');
            html.push('#yzz_area{ width:220px; position:fixed; _position:absolute; overflow:hidden; z-index:99;}');
            html.push('#yzz_area .qtClose{ position:absolute; top:0;right:0; cursor:pointer;background:url(http://yktj.yzz.cn/htmldata/images/min_close.gif) no-repeat ;text-indent:-999em;overflow:hidden;width:13px;height:13px;}');
            html.push('</style>');
            html.push('</div>');
        /*}else if(window.location.host === "xyq.yzz.cn"){
            html.push('<div id="yzz_area">');
            html.push('<span class="qtClose">X</span>');
            html.push('<div id="AdSame_Flash528"><img src="http://common.yzz.cn/ad_resc/xyq_gif_0108_normal.gif" id="yzz_area_xyq_gif1" style="width:222px; height:250px; cursor:pointer;" onclick="document.getElementById(\'yzz_area_xyq_gif2\').style.display = \'block\';this.style.display = \'none\';"><img src="http://common.yzz.cn/ad_resc/xyq_gif_0108_hover.gif" id="yzz_area_xyq_gif2" style="width:134px; height:297px; display:none;  margin:0 auto;"></div>');       
            html.push('<style type="text/css">');
            html.push('#yzz_area{ width:222px; height:297px; position:fixed; _position:absolute; overflow:hidden; z-index:99;}');
            html.push('#yzz_area .qtClose{ position:absolute; top:0;right:0; cursor:pointer;background:url(http://yktj.yzz.cn/htmldata/images/min_close.gif) no-repeat ;text-indent:-999em;overflow:hidden;width:13px;height:13px;}');
            html.push('</style>');
            html.push('</div>');*/
        }else{
            /*html.push('<div id="yzz_area">');
            html.push('<span class="qtClose">X</span>');
            html.push('<embed id="AdSame_Flash528" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" wmode="transparent" type="application/x-shockwave-flash" src="http://common.yzz.cn/ad_resc/15666_wx_ad2.swf" style="width:176px; height:260px;">');
            html.push('<style type="text/css">');
            html.push('#yzz_area{ width:176px; height:260px; position:fixed; _position:absolute; overflow:hidden; z-index:99;}');
            html.push('#yzz_area .qtClose{ position:absolute; top:0;right:0; cursor:pointer;background:url(http://yktj.yzz.cn/htmldata/images/min_close.gif) no-repeat ;text-indent:-999em;overflow:hidden;width:13px;height:13px;}');
            html.push('</style>');
            html.push('</div>');*/
        }
        /*去掉微信小美女20150306*/
        document.write(html.join(''));
    }

    bindToYzzArea();
}
(function() {
    // JavaScript Document
    var popid = document.getElementById("wrapAll");

    var icon = document.getElementById("wrapAll_icon");
    var wrapPinch = document.getElementById("wrapPinch");
    var wrapclose = document.getElementById("wrapclose");

    if (!popid || !icon || !wrapPinch || !wrapclose) {
        return false;
    }
    //cookie
    function getCookie(c_name) {
        if (document.cookie.length > 0) {
            c_start = document.cookie.indexOf(c_name + "=")
            if (c_start != -1) {
                c_start = c_start + c_name.length + 1;
                c_end = document.cookie.indexOf(";", c_start);
                if (c_end == -1) c_end = document.cookie.length
                return unescape(document.cookie.substring(c_start, c_end))
            }
        }
        return ""
    }

    function setCookie(c_name, value, expiredays) {
        var exdate = new Date();
        exdate.setHours(exdate.getHours() + expiredays);
        document.cookie = c_name + "=" + escape(value) + ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString());
    }

    function checkCookie() {
        var val = getCookie('username');
        if (val != null && val != "") {
            popid.style.display = "none";
        } else {
            openwd();
            addEvent(window, "resize", openwd);
        }
    }
    //附加事件
    function addEvent(elem, ev, fun) {
        if (elem.attachEvent) {
            elem.attachEvent("on" + ev, fun);
        } else {
            elem.addEventListener(ev, fun, false);
        }
    }
    //卸载事件
    function delEvent(elem, v, fun) {
        if (elem.removeEventListener) {
            elem.removeEventListener(v, fun, false);
        } else {
            elem.detachEvent("on" + v, fun);
        }
    }
    //window.onresize = openwd;//监听事件
    function openwd() {
        var wid = document.body.offsetWidth;
        if (wid < 1440) {
            popid.style.display = "block";
            //setTimeout(closepop,5000);
        } else {
            popid.style.display = "block";
            icon.style.display = "none";
        }
    }
    wrapPinch.onclick = function() {
        popid.style.display = "none";
        icon.style.display = "block";
        delEvent(window, "resize", openwd);
    }
    wrapclose.onclick = function() {
        var exdate = new Date();
        var settime = 24 - exdate.getHours();
        var hsday = settime / 24;
        popid.style.display = "none";
        setCookie('username', "yzzrecom", settime);
        delEvent(window, "resize", openwd);
    }
    icon.onclick = function() {
        popid.style.display = "block";
        icon.style.display = "none";
    }
    //checkCookie();
})()

/*非频道非重点专区联运专用对联广告位*/
function _antithetical_couplet_ad(){

  var hidden_domains = ['*.15666.com','lol.yzz.cn','xyq.yzz.cn','xy2.yzz.cn','sw.yzz.cn','mx2.yzz.cn','mx.yzz.cn','qn.yzz.cn','ylzt.yzz.cn','cf.yzz.cn','nz.yzz.cn','www.yzz.cn','news.yzz.cn','newgame.yzz.cn','dl.yzz.cn','pc.yzz.cn','act.yzz.cn','xx.yzz.cn','esports.yzz.cn','buy.yzz.cn','novel.yzz.cn','card.yzz.cn','bbs.yzz.cn','msol.yzz.cn','m3guo.yzz.cn','mtf.yzz.cn','xym.yzz.cn','dh2.yzz.cn'],

  domain = window.location.host;

    for(var i = 0; i < hidden_domains.length ; i++){
        var _temp = hidden_domains[i];
        if(domain == _temp){
            return ;
        }else if( _temp.substr(0,1)== '*'){
            if(domain.substr(domain.indexOf('.')) ==  _temp.substr(_temp.indexOf('.')) ){
                return;
            }
        }

    }

    yzz_wrtgg([6415, 6416]);  
}

_antithetical_couplet_ad();