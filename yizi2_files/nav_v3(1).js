/**
 *	全站导航的浏览记录功能
 *	author: Jat Lee
 *	date: 2011.3.17
 */
 
/**
 * YzzNavigate
 *
 *	@param areaId 用于显示浏览记录的DIV的ID
 */
function YzzNavigate(areaId){
	if( YzzNavigate.singlton ){
		return YzzNavigate.singlton;
	}
	
	this.hostName = location.host;
	//this.pageUrl = 'http://' + location.host + '/';//不限制于首页时 
	this.pageUrl  = location.href;//限制于首页时
	this.showHistoryArea = areaId;
	this.historyCookieName = 'yzz_visited_history';
	this.domain = '.yzz.cn';
	this.maxRecordNum = 5;//最多显示5条
	this.loginId = {
		username : 'c_username',
		password : 'c_password',
        captcha  : 'c_captcha',
		qlist    : 'qlist',
		qid      : 'login_quest',
		qvalue   : 'login_ans',
		message  : 'common_message',
		loginForm : 'c_login',
		cookieName : 'DN5_username',
		cookieAuth : 'DN5_auth',
		loginTab : 'c_login_info'

	};
}

YzzNavigate.prototype = {
	loginedTxt : function () { 
					return '<button id="c_exit" class="c_exit" onclick="return yzzNav.loginOut();">退出</button>'
					+ '<div id="c_accountbox" class="c_accountbox">'
					+ '<a id="'+this.loginId.username+'" href="http://bbs.yzz.cn/home.php?mod=spacecp&ac=profile" ></a>'
					+ '</div>';
				},
	formTxt : function (){ 
				return '<div id="c_loginbox" class="c_loginbox">'
					+ '<button id="c_log" class="c_log" type="button" onClick="return cDisplayLogin();">登录</button>'
					+ '<a class="c_register" href="javascript:void(0);" onclick="window.open(\'http://bbs.yzz.cn/member.php?mod=register.php\',\'_blank\');" target="_self">注册</a>'
					+ '<form id="'+this.loginId.loginForm+'" class="c_login" onsubmit="return false;">'
					+ '<p><a class="c_close" href="javascript:void(0)" onclick="return cDisplayLogin();" target="_self">X</a></p>'
					+ '<ul><li><label for="'+this.loginId.username+'">登陆名：</label><input type="text" id="'+this.loginId.username+'" name="username" /></li>'
					+ '<li><label for="'+this.loginId.password+'">密码：</label><input type="password" id="'+this.loginId.password+'" name="passname" /></li>'
                    + '<li class="c_confirm"><label for="'+this.loginId.captcha+'">验证码：</label><input type="text" id="'+this.loginId.captcha+'" ><img onclick="document.getElementById(\'yzz_sitenav_login_secImgTag\').src=\'http://passport.yzz.cn/seccode.php?\'+Math.random();" id="yzz_sitenav_login_secImgTag" title="换一个" style="border: 0pt none; margin-left: 5px; vertical-align: bottom;"></li>'
					+ '<li class="clearfix"><label>提问： </label>'
					+ '<div id="c_question" class="c_question">'
					+ '<select id="'+this.loginId.qid+'">'
					+ '<option selected="selected" value="0">无安全提问</option>'
					+ '<option value="1">母亲的名字</option>'
					+ '<option value="2">爷爷的名字</option>'
					+ '<option value="3">父亲出生的城市</option>'
					+ '<option value="4">您其中一位老师的名字</option>'
					+ '<option value="5">您个人计算机的型号</option>'
					+ '<option value="6">您最喜欢的餐馆名称</option>'
					+ '<option value="7">驾驶执照的最后四位数字</option>'
					+ '</select></div></li>'
					+ '<li id="'+this.loginId.qlist+'" class="c_answer"><label for="login_ans">回答：</label><input type="text" id="'+this.loginId.qvalue+'" /></li>'
					+ '<li id="c_login_err" class="c_login_err"><input type="submit" class="c_submit" onclick="return yzzNav.doform();" value="提交"><a href="http://bbs.yzz.cn/member.php?mod=logging&action=login&viewlostpw=1" class="c_passport" >忘记密码？</a></li>'
					+ '</ul></form></div>';
			},
	isHomepage : function(){
		if( this.pageUrl.length == this.hostName.length + 8 )
			return true;
		else if(this.pageUrl.indexOf(this.hostName + '/index.') > -1 ){
			return true;
		}else{
			return false;
		}
	},
	setCookie : function(NameOfCookie, value){
		var expiredays = arguments[2] ? arguments[2] : 24;
		var ExpireDate = new Date ();
		ExpireDate.setTime(ExpireDate.getTime() + (expiredays * 3600000 ));
		document.cookie = NameOfCookie + "=" + escape(value) +  ";domain=" + this.domain + ";path=/"  + ((expiredays == null) ? "" : "; expires=" + ExpireDate.toGMTString());
	},
	getCookie : function(NameOfCookie){
		if (document.cookie.length > 0)
		{
			begin = document.cookie.indexOf(NameOfCookie+"=");
			if (begin != -1)
			{
				begin += NameOfCookie.length+1;
				end = document.cookie.indexOf(";", begin);
				if (end == -1) end = document.cookie.length;
				return unescape(document.cookie.substring(begin, end)); 
			}
		}
		return null;
	},
	delCookie : function(NameOfCookie){
		if (this.getCookie(NameOfCookie)) {
			document.cookie = NameOfCookie + "=" +
			";domain=" + this.domain + ";path=/; expires=Thu, 01-Jan-70 00:00:01 GMT";
		}
	},
	updateRecord : function(url_arr){
		var visited_list = this.getCookie(this.historyCookieName);
		
		if( visited_list == null ){
			visited_list = [];
			if (url_arr != '') {
				visited_list.push(url_arr);
				this.setCookie(this.historyCookieName, visited_list.join("++"));
				this.showData(visited_list);
			}
			return;
		}else{
			visited_list = visited_list.split('++');
			var i = 0;
			for(i in visited_list)
				visited_list[i] = visited_list[i].split(',');
		}
		
		if( visited_list.length > this.maxRecordNum )
			visited_list.pop();

		if (url_arr != '') {
			var had = false;
			var len = visited_list.length;
			
			for(var i = 0; i < len; i++){
				if( visited_list[i][1] == url_arr[1] ){
					had = true;
					break;
				}
			}
			
			if( !had ){
				visited_list.reverse();
				visited_list.push(url_arr);
				visited_list.reverse();
				this.setCookie(this.historyCookieName, visited_list.join("++"));
			}
		}

		this.showData(visited_list);
	},
	
	showData : function(data){
		var html_str_arr = [];
		for(var i in data){
			html_str_arr.push("<li><a href='"+ data[i][1] +"' title='" + data[i][0] +"'>"+ data[i][0] +"</a></li>");
		}
		var t = document.getElementById(this.showHistoryArea);
		
		if( t )
			t.innerHTML = html_str_arr.join('');
		else
			alert(data);
	},
	
	doform : function() {
		var checkArr = new Object();
		var tempObj = new Object();
		checkArr[this.loginId.username] = '用户名不能为空';
		checkArr[this.loginId.password] = '密码不能为空';
        checkArr[this.loginId.captcha]  = '验证码不能为空';
		checkArr[this.loginId.qid] = '';
		checkArr[this.loginId.qvalue] = '';
		for (var c in checkArr) {
			try {
				if (checkArr[c] != '' && document.getElementById(c).value == '') {
					alert(checkArr[c]);
					document.getElementById(c).focus();
					return false;
				} else {
					tempObj[c] = document.getElementById(c).value;
				}
			} catch (e) {
				
			}
		}
		this.cPutLogin(tempObj);
	},
	cPutLogin : function(params){
		var url = 'http://passport.yzz.cn/login.php?callback=cloginreturn';
		url += '&usr=' + encodeURIComponent(params[this.loginId.username]);
		url += '&pwd=' + encodeURIComponent(params[this.loginId.password]);
		url += '&captcha=' + encodeURIComponent(params[this.loginId.captcha]);
		url += '&questid=' + encodeURIComponent(params[this.loginId.qid]);
		url += '&ans=' + encodeURIComponent(params[this.loginId.qvalue]);
		url += '&cookietime=2592000';
		this.sendOn(url);
	},
	loginOut : function () {
		var url = 'http://passport.yzz.cn/logout.php?callback=clogout';
		this.sendOn(url);
	},
	sendOn : function (url) {
		url += '&_=' + new Date().getTime().toString();
		this.creElm({src : url,
				type : 'text/javascript'
		}, 'script');
		return false;
	},
	creElm : function (o, t, a) {
		var b = document.createElement(t || 'div');
		for (var p in o) {
			p == 'style' ? b[p].cssText = o[p] : b[p] = o[p]
		}
		return (a || document.body).appendChild(b, (a || document.body).lastChild);
	},
	getLink : function (strlnks) {
		try {
		  var arrlnk = strlnks.match(/http\:\/\/([^\"]*)/g);
		  return arrlnk;
		} catch(e) {}
	},
	run : function(){
		if( this.hostName == 'bbs.yzz.cn' ){
			var nav = document.getElementById('nav');
			if( nav != null ){
				var a = nav.getElementsByTagName('a');
				if( a.length >= 2 ){
					var pageTitle = a[a.length - 2].innerHTML;
					var last_visited = [pageTitle, a[a.length - 2].href];
					this.updateRecord(last_visited);
				}
			}
		}else{
			//不限制于首页
			if( this.isHomepage() ){
				var pageTitle = document.getElementsByTagName('title');
				if( pageTitle[0] ){
					pageTitle = pageTitle[0].innerHTML;
					pageTitle = pageTitle.split('_')[0].split('|')[0].split(':')[0];
					if (pageTitle.length > 6) {
						pageTitle = pageTitle.substring(0, 6);
					}
					var last_visited = [pageTitle, this.pageUrl];
					this.updateRecord(last_visited);
				}
			} else {
				this.updateRecord(new Array());	
			}
		}
	},
    //add new by daivem 2012.02.17 start
    getAuthExists: function(){
        return  this.getCookie(this.loginId.cookieAuth);
    },
    
    nCheckLoginStatus: function(){
        var url = 'http://passport.yzz.cn/status_3.php?callback=checkStatus_callback';
        this.sendOn(url);
    }
    //add new by daivem 2012.02.17 end
}
function cloginreturn(json){
	if (typeof(json) == 'object') {
		if (json.act == 'loginSuc') {
            var linkarr  = yzzNav.getLink(json.data.synlogin);
            var url;
            for (var i in linkarr) {
                if ( (typeof linkarr[i] == 'string') && (linkarr[i].indexOf('http://') != -1) ) { 
                    url = linkarr[i];
                    yzzNav.sendOn(url);
                }
            }
			
            switch(document.location.host.split('.')[0]) {
                case 'act': 
                case 'localact': 
                        setTimeout(function(){
                            window.location.reload();
                        }, 2000);
  
                default:cCheckLogin();
            } 
		} else {
			switch (parseInt(json.data)) {
				case -75: 
					alert('您已连续5次输错密码，请15分钟后再试'); 
					cCheckLogin();
				break;
				case -31: 
					alert('该用户不存在'); 
					document.getElementById(yzzNav.loginId.username) = '';
					document.getElementById(yzzNav.loginId.username).select();
				break;
				case -99: 
					alert('账号与密码不能为空。'); 
					document.getElementById(yzzNav.loginId.username).focus();
				break;
				case -70: 
					alert('您已经成功登陆了.'); 
					window.location.reload();
				break;
				case -41: 
					alert('用户重名。'); 
					document.getElementById(yzzNav.loginId.username).select();
				break;
				case -1: 
					alert('用户不存在'); 
					document.getElementById(yzzNav.loginId.username).select();
				break;
				case -2: 
					alert('密码错误'); 
					document.getElementById(yzzNav.loginId.password).select();
				break;
				case -3: 
					alert('安全提问错误'); 
					document.getElementById(yzzNav.loginId.qvalue).select();
				break;
				case -55: 
					alert('验证码错误'); 
					//document.getElementById(yzzNav.loginId.qvalue).select();
				break;
                default:
                    alert('未知错误');
                break;
			}
			document.getElementById('yzz_sitenav_login_secImgTag').src = 'http://passport.yzz.cn/seccode.php?'+ Math.random();	
		}
	} else {
		alert('网络连接失败，请重试。');
	}
}
function clogout(jsonp) {
	if(typeof(jsonp) == 'object') {
		if(jsonp.act == 'logoutSuc') {
			var url = yzzNav.getLink(jsonp.data)[0];
			yzzNav.sendOn(url);
			cCheckLogin();
		}
	}
}
function cLoginKey() {
	if (yzzNav.getCookie(yzzNav.loginId.cookieAuth) && yzzNav.getCookie(yzzNav.loginId.cookieName)) {
		return true;
	} else {
		return false;	
	}
}

//modify function by daivem 2012.02.17 start
function checkStatus_callback(json) {
    if ( json.act == 'logined' ) {
        var uid = json.data.uid;
        var username = json.data.usrname;
        document.getElementById(yzzNav.loginId.loginTab).innerHTML = yzzNav.loginedTxt();
        yzzNav.uid  = uid;
        document.getElementById(yzzNav.loginId.username).innerHTML = username;
    } else {
        document.getElementById(yzzNav.loginId.loginTab).innerHTML = yzzNav.formTxt();
    }
}

function cCheckLogin(){
    var cookies_auth = yzzNav.getAuthExists();
    if ( cookies_auth ){
        yzzNav.nCheckLoginStatus();
        return false;
    } else {
        document.getElementById(yzzNav.loginId.loginTab).innerHTML = yzzNav.formTxt();
    }
    cLoadEvent();
}
//modify function by daivem 2012.02.17 end
/*
function cCheckLogin(){
	if(cLoginKey()){
		document.getElementById(yzzNav.loginId.loginTab).innerHTML = yzzNav.loginedTxt();
		document.getElementById(yzzNav.loginId.username).innerHTML = decodeURI(escape(yzzNav.getCookie(yzzNav.loginId.cookieName)));
		yzzNav.getPm();
	}else{
		document.getElementById(yzzNav.loginId.loginTab).innerHTML = yzzNav.formTxt();
	}
	cLoadEvent();
}
*/
function cDisplayLogin() {
	/*if(cLoginKey()){
		cCheckLogin();
	} else {*/
		var login;
		if (login = document.getElementById(yzzNav.loginId.loginForm)) {
			document.getElementById(yzzNav.loginId.username).value = '';
			document.getElementById(yzzNav.loginId.password).value = '';
			if (login.style.display != 'block') {
				login.style.display = 'block';
				document.getElementById('yzz_sitenav_login_secImgTag').src = 'http://passport.yzz.cn/seccode.php';
				document.getElementById(yzzNav.loginId.username).focus();
			} else {
				login.style.display = 'none';
			}
		}
	//}
}
function displayAnsTab() {
	if (document.getElementById(yzzNav.loginId.qid).selectedIndex) {
		document.getElementById(yzzNav.loginId.qlist).style.display = 'block';
	} else {
		document.getElementById(yzzNav.loginId.qlist).style.display = 'none';	
	}
}
function cLoadEvent() {
	try {
		displayAnsTab();
		document.getElementById(yzzNav.loginId.qid).onfocus = displayAnsTab;
		document.getElementById(yzzNav.loginId.qid).onchange = displayAnsTab;
		document.getElementById(yzzNav.loginId.qid).onblur = displayAnsTab;
	} catch (e) {}
	try {
		document.getElementById('c_m-nav').onmouseover = function(){document.getElementById('c_drop_menu').style.display='block';};
		document.getElementById('c_m-nav').onmouseout = function(){document.getElementById('c_drop_menu').style.display='none';};
		document.getElementById('c_entrance').onmouseover = function(){document.getElementById('c_sublists').style.display='block';};
		document.getElementById('c_entrance').onmouseout = function(){document.getElementById('c_sublists').style.display='none';};
	} catch (e) {}
}