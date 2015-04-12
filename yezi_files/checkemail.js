
var checkemail = function(m) {
	//return false;//测试屏蔽
var msg = '';

if (!m['errno']) return;
if(m['uid'])
{
	if(getCookie2('email_name'+m['uid'])) return;
}
else
{
	if(getCookie2('tc_login')) return ;	
}

//m['errno'] = -2;
switch(m['errno']) {
    case -1: {
msg += "<div>";
msg += "  <table cellspacing=\"0\" cellpadding=\"0\" class=\"fwin\" style='empty-cells:show;'>";
msg += "    <tbody>";
msg += "      <tr>";
msg += "        <td class=\"t_l\" style='background:none repeat scroll 0 0 #000000;filter:alpha(opacity=20);-moz-opacity:0.2;opacity:0.2;overflow:hidden;width:8px;height:8px;border-radius:8px 0 0 0;'></td>";
msg += "        <td  style=\"cursor:move;background:none repeat scroll 0 0 #000000;filter:alpha(opacity=20);-moz-opacity:0.2;opacity:0.2;overflow:hidden;height:8px; \" class=\"t_c\"></td>";
msg += "        <td class=\"t_r\" style='background:none repeat scroll 0 0 #000000;filter:alpha(opacity=20);-moz-opacity:0.2;opacity:0.2;overflow:hidden;width:8px;height:8px;border-radius:0 8px  0 0;'></td>";
msg += "      </tr>";
msg += "      <tr>";
msg += "        <td  style=\"cursor:move;background:none repeat scroll 0 0 #000000;filter:alpha(opacity=20);-moz-opacity:0.2;opacity:0.2;overflow:hidden;width:8px;\" class=\"m_l\">&nbsp;&nbsp;</td>";
msg += "        <td id=\"fwin_content_login\" class=\"m_c\" style=\"background:none repeat scroll 0 0 #FFFFFF;\" fwin=\"login\"><div id=\"main_messaqge_LnEej\" fwin=\"login\">";
msg += "            <div id=\"layer_login_LnEej\" fwin=\"login\">";
msg += "              <h3 class=\"flb\" id=\"fctrl_login\" style=\"height:100px;cursor: move;padding:10px 10px 8px;font-size:1em;\"> <em id=\"returnmessage_LnEej\" fwin=\"login\" style='float:none;color: #FF0000;display: block;font-size: 32px;font-weight: bold;height: 50px;line-height: 50px;margin: 50px auto 0;width: 500px;text-align:center;'> 温馨提示 </em> </h3>";
msg += "                <div class=\"c cl\" style='padding:0 10px 10px '>";
msg += "                  <div class=\"rfm\" style='width:500px;border-bottom:1px solid #E3E3E3;margin:0 auto;height:200px;'>";
msg += "                    <table>";
msg += "                      <tbody>";
msg += "                        <tr>";
msg += "                          <td style='height:188px;width:360px;line-height:22px;vertical-align:top;padding:6px 70px;'>您尚未激活邮箱，无法获得更多特权，请<a style='color:#0B81BF' href=\"http://bbs.yzz.cn/home.php?mod=spacecp&ac=profile&op=password\" target=\"_blank\">点击这里</a>激活邮箱，以保证你的权限．叶子猪游戏网感谢你的支持与厚爱！</td>";
msg += "                        </tr>";
msg += "                      </tbody>";
msg += "                    </table>";
msg += "                  </div>";
msg += "                </div>";
msg += "            </div>";
msg += "          </div></td>";
msg += "        <td  style=\"cursor:move;background:none repeat scroll 0 0 #000000;filter:alpha(opacity=20);-moz-opacity:0.2;opacity:0.2;overflow:hidden;width:8px;\" class=\"m_r\"></td>";
msg += "      </tr>";
msg += "      <tr>";
msg += "        <td class=\"b_l\" style='background:none repeat scroll 0 0 #000000;filter:alpha(opacity=20);-moz-opacity:0.2;opacity:0.2;overflow:hidden;width:8px;height:8px;border-radius:0 0 0 8px ;'></td>";
msg += "        <td style=\"cursor:move;background:none repeat scroll 0 0 #000000;filter:alpha(opacity=20);-moz-opacity:0.2;opacity:0.2;overflow:hidden;height:8px;\" class=\"b_c\"></td>";
msg += "        <td class=\"b_r\" style='background:none repeat scroll 0 0 #000000;filter:alpha(opacity=20);-moz-opacity:0.2;opacity:0.2;overflow:hidden;width:8px;height:8px;border-radius:0 0 8px  0;'></td>";
msg += "      </tr>";
msg += "    </tbody>";
msg += "  </table>";
msg += "</div>";
	var contianer = document.createElement('div');
	contianer.initialized="true";
	contianer.style.cssText="position:fixed;width:536px;_width:536px;height:360px;left:50%;top:50%;margin:-180px 0 0  -268px;z-index:99;overflow:hidden;display:block;_position:absolute;_bottom:auto;_top:expression(eval(document.documentElement.scrollTop+document.documentElement.clientHeight-this.offsetHeight-(parseInt(this.currentStyle.marginTop,10)||0)-(parseInt(this.currentStyle.marginBottom,10)||0)));*html{background-image:url(about:blank);background-attachment:fixed;}"
	contianer.id="fwin_login";
	contianer.innerHTML=msg;
	document.body.appendChild(contianer);// += msg;
    };break;
case -2: {
msg += "<div id=\"check_email\" uid_s=\""+m['uid']+"\" >";
msg += "    <div initialized=\"true\"  class=\"fwinmask\" id=\"fwin_login\" >";
msg += "  <style type=\"text/css\">";
msg += "object{visibility:hidden;}";
msg += ".fwin .rfm, .nfl .f_c .rfm {width:auto;_width:100px}";
msg += "</style>";
msg += "  <table cellspacing=\"0\" cellpadding=\"0\" class=\"fwin\" style=\"height:230px;\">";
msg += "    <tbody>";
msg += "      <tr >";
msg += "        <td class=\"t_l\" style='background:none repeat scroll 0 0 #000000;filter:alpha(opacity=20);-moz-opacity:0.2;opacity:0.2;overflow:hidden;width:8px;height:8px;border-radius:8px 0 0 0;'></td>";
msg += "        <td  style=\"cursor:move;background:none repeat scroll 0 0 #000000;filter:alpha(opacity=20);-moz-opacity:0.2;opacity:0.2;overflow:hidden;height:8px; \" class=\"t_c\"></td>";
msg += "        <td class=\"t_r\" style='background:none repeat scroll 0 0 #000000;filter:alpha(opacity=20);-moz-opacity:0.2;opacity:0.2;overflow:hidden;width:8px;height:8px;border-radius:0 8px  0 0;'></td>";
msg += "      </tr>";
msg += "      <tr >";
msg += "         <td  style=\"cursor:move;background:none repeat scroll 0 0 #000000;filter:alpha(opacity=20);-moz-opacity:0.2;opacity:0.2;overflow:hidden;width:8px;\" class=\"m_l\">&nbsp;&nbsp;</td>";
msg += "        <td fwin=\"login\" style=\"background:none repeat scroll 0 0 #FFFFFF;\" class=\"m_c\" id=\"fwin_content_login\"><div fwin=\"login\" id=\"main_messaqge_LnEej\">";
msg += "            <div fwin=\"login\" id=\"layer_login_LnEej\" style='height:214px;width:270px;'>";
msg += "              <h3 style=\"cursor: move;padding:10px 10px 8px;font-size:1em;width:250px;position:relative;height:50px;line-height:50px;\" id=\"fctrl_login\" class=\"flb clearfix\"> <em fwin=\"login\" id=\"returnmessage_LnEej\" style='display:block;text-align:center;width:250px;color:#FF0000;font-size: 32px;font-weight: bold;float:none;height: 50px;line-height: 50px;'> 温馨提示 </em><span style='position:absolute;right:8px;top:4px;width:28px;height:20px;'><a title=\"关闭\" onclick=\"out_time();\" class=\"flbc\" href=\"javascript:;\" target=\"_self\" >关闭</a></span> </h3>";
msg += "                <div class=\"c cl\" >";
msg += "                  <div class=\"rfm\" style='width:250px;' >";
msg += "                    <table>";
msg += "                      <tbody>";
msg += "                        <tr>";
msg += "                          <td style=\"width:250px;padding:10px 10px 0;_width:250px;\">您尚未激活邮箱，无法获得更多特权，请<a style='color:#0B81BF' href=\"http://bbs.yzz.cn/home.php?mod=spacecp&ac=profile&op=password\" target=\"_blank\">点击这里</a>激活邮箱，以保证你的权限．叶子猪游戏网感谢你的支持与厚爱！</td>";
msg += "                        </tr>";
msg += "                      </tbody>";
msg += "                    </table>";
msg += "                  </div>";
msg += "                </div>";
msg += "            </div>";
msg += "          </div></td>";
msg += "       <td  style=\"cursor:move;background:none repeat scroll 0 0 #000000;filter:alpha(opacity=20);-moz-opacity:0.2;opacity:0.2;overflow:hidden;width:8px;\" class=\"m_r\"></td>";
msg += "      </tr>";
msg += "      <tr>";
msg += "        <td class=\"b_l\" style='background:none repeat scroll 0 0 #000000;filter:alpha(opacity=20);-moz-opacity:0.2;opacity:0.2;overflow:hidden;width:8px;height:8px;border-radius:0 0 0 8px ;'></td>";
msg += "        <td style=\"cursor:move;background:none repeat scroll 0 0 #000000;filter:alpha(opacity=20);-moz-opacity:0.2;opacity:0.2;overflow:hidden;height:8px;\" class=\"b_c\"></td>";
msg += "        <td class=\"b_r\" style='background:none repeat scroll 0 0 #000000;filter:alpha(opacity=20);-moz-opacity:0.2;opacity:0.2;overflow:hidden;width:8px;height:8px;border-radius:0 0 8px  0;'></td>";
msg += "      </tr>";
msg += "    </tbody>";
msg += "  </table>";
msg += "</div>";
msg += "</div>";
	var contianer = document.createElement('div');
	contianer.style.cssText="position:fixed;width:290px;_width:290px;height:230px;left:5px;bottom:10px;z-index:99;overflow:hidden;display:block;_position:absolute;_bottom:auto;_top:expression(eval(document.documentElement.scrollTop+document.documentElement.clientHeight-this.offsetHeight-(parseInt(this.currentStyle.marginTop,10)||0)-(parseInt(this.currentStyle.marginBottom,10)||0)));*html{background-image:url(about:blank);background-attachment:fixed;}"
	contianer.id="media_float_right";
	contianer.innerHTML=msg;
	document.body.appendChild(contianer);// += msg;
    //document.body.innerHTML += msg;
    };break;
case -3:{
msg += "<div id=\"check_email\" uid_s=\"_login\" >";
msg += "    <div initialized=\"true\"  class=\"fwinmask\" id=\"fwin_tc_login\" >";
msg += "  <style type=\"text/css\">";
msg += "object{visibility:hidden;}";
msg += ".fwin .rfm, .nfl .f_c .rfm {width:auto;_width:100px}";
msg += "</style>";
msg += "  <table cellspacing=\"0\" cellpadding=\"0\" class=\"fwin\" style=\"height:230px;\">";
msg += "    <tbody>";
msg += "      <tr >";
msg += "        <td class=\"t_l\" style='background:none repeat scroll 0 0 #000000;filter:alpha(opacity=20);-moz-opacity:0.2;opacity:0.2;overflow:hidden;width:8px;height:8px;border-radius:8px 0 0 0;'></td>";
msg += "        <td  style=\"cursor:move;background:none repeat scroll 0 0 #000000;filter:alpha(opacity=20);-moz-opacity:0.2;opacity:0.2;overflow:hidden;height:8px; \" class=\"t_c\"></td>";
msg += "        <td class=\"t_r\" style='background:none repeat scroll 0 0 #000000;filter:alpha(opacity=20);-moz-opacity:0.2;opacity:0.2;overflow:hidden;width:8px;height:8px;border-radius:0 8px  0 0;'></td>";
msg += "      </tr>";
msg += "      <tr >";
msg += "         <td  style=\"cursor:move;background:none repeat scroll 0 0 #000000;filter:alpha(opacity=20);-moz-opacity:0.2;opacity:0.2;overflow:hidden;width:8px;\" class=\"m_l\">&nbsp;&nbsp;</td>";
msg += "        <td fwin=\"login\" style=\"background:none repeat scroll 0 0 #FFFFFF;\" class=\"m_c\" id=\"fwin_content_login\"><div fwin=\"login\" id=\"main_messaqge_LnEej\">";
msg += "            <div fwin=\"login\" id=\"layer_login_LnEej\" style='height:200px;width:270px;'>";
msg += "              <h3 style=\"cursor: move;padding:10px 10px 8px;font-size:1em;width:250px;position:relative;height:30px;line-height:30px;\" id=\"fctrl_login\" class=\"flb clearfix\"> <em fwin=\"login\" id=\"returnmessage_LnEej\" style='display:block;text-align:center;width:250px;color:#FF0000;font-size: 20px;font-weight: bold;float:none;height: 20px;line-height: 20px;'> 欢迎来到叶子猪论坛！</em><span style='position:absolute;right:8px;top:4px;width:28px;height:20px;'><a title=\"关闭\" onclick=\"out_time_login();\" class=\"flbc\" href=\"javascript:;\" target=\"_self\" >关闭</a></span> </h3>";
msg += "                <div class=\"c cl\" >";
msg += "                  <div class=\"rfm\" style='width:250px;' >";
msg += "                    <table>";
msg += "                      <tbody>";
msg += "                        <tr>";
msg += "                          <td style=\"width:250px;padding:0px 10px 0;_width:250px;\">注册之后可以享受更多权益：</td></tr><tr><td style=\"width:250px;padding:0px 10px 0;_width:250px;\">1）赚取猪币兑换点卡</td></tr><tr><td style=\"width:250px;padding:0px 10px 0;_width:250px;\">2）获得金币使用道具</td></tr><tr><td style=\"width:250px;padding:0px 10px 0;_width:250px;\">3）获得叶子钱兑换激活码</td></tr><tr><td style=\"width:250px;padding:0px 10px 0;_width:250px;\">4）升级用户组上传图片和录像</td>";

msg += "                        </tr><tr><td style=\"width:250px;padding:0px 10px 0;_width:250px;\"><a href='http://bbs.yzz.cn/help/credits/index.html' style='float:right;'>点击了解更多</a></td></tr>";
msg += "                      </tbody>";
msg += "                    </table>";
msg += "                  </div>";
msg += "                </div>";
msg += "            </div>";
msg += "          </div></td>";
msg += "       <td  style=\"cursor:move;background:none repeat scroll 0 0 #000000;filter:alpha(opacity=20);-moz-opacity:0.2;opacity:0.2;overflow:hidden;width:8px;\" class=\"m_r\"></td>";
msg += "      </tr>";
msg += "      <tr>";
msg += "        <td class=\"b_l\" style='background:none repeat scroll 0 0 #000000;filter:alpha(opacity=20);-moz-opacity:0.2;opacity:0.2;overflow:hidden;width:8px;height:8px;border-radius:0 0 0 8px ;'></td>";
msg += "        <td style=\"cursor:move;background:none repeat scroll 0 0 #000000;filter:alpha(opacity=20);-moz-opacity:0.2;opacity:0.2;overflow:hidden;height:8px;\" class=\"b_c\"></td>";
msg += "        <td class=\"b_r\" style='background:none repeat scroll 0 0 #000000;filter:alpha(opacity=20);-moz-opacity:0.2;opacity:0.2;overflow:hidden;width:8px;height:8px;border-radius:0 0 8px  0;'></td>";
msg += "      </tr>";
msg += "    </tbody>";
msg += "  </table>";
msg += "</div>";
msg += "</div>";
	var contianer = document.createElement('div');
	contianer.style.cssText="position:fixed;width:290px;_width:290px;height:230px;left:5px;bottom:10px;z-index:99;overflow:hidden;display:block;_position:absolute;_bottom:auto;_top:expression(eval(document.documentElement.scrollTop+document.documentElement.clientHeight-this.offsetHeight-(parseInt(this.currentStyle.marginTop,10)||0)-(parseInt(this.currentStyle.marginBottom,10)||0)));*html{background-image:url(about:blank);background-attachment:fixed;}"
	contianer.id="media_float_right";
	contianer.innerHTML=msg;
	document.body.appendChild(contianer);
	}break;
    default: {
    
    };break;
}
}

var url = document.location.href;
if(url.indexOf('http://bbs.yzz.cn/home.php?mod=misc&ac=emailcheck') == -1 && url.indexOf('http://bbs.yzz.cn/home.php?mod=spacecp&ac=profile&op=password') == -1 )
{
	var o = document.createElement('script');
	o.type = 'text/javascript';
	o.src= 'http://bbs.yzz.cn/checkemail.php?callback=checkemail';
	document.body.appendChild(o);
}


function out_time()
{
	var id = document.getElementById('check_email');
	var uid = id.getAttribute('uid_s');
	if(confirm('点击确认，30天内不提示!'))
	{
		setCookie2("email_name"+uid, 1, 720);
	}
	document.getElementById('media_float_right').style.display='none';
}

function out_time_login()
{
	setCookie2("tc_login", 1, 12);
	document.getElementById('media_float_right').style.display='none';
}


function setCookie2(NameOfCookie, value)
{
	var expiredays = arguments[2] ? arguments[2] : 24;
	var ExpireDate = new Date ();
	ExpireDate.setTime(ExpireDate.getTime() + (expiredays * 3600000 ));
	document.cookie = NameOfCookie + "=" + escape(value) +  ";domain=.yzz.cn;path=/"  + ((expiredays == null) ? "" : "; expires=" + ExpireDate.toGMTString());
}

function getCookie2(NameOfCookie)
{
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
}

function delCookie2(NameOfCookie)
{
	if (this.getCookie2(NameOfCookie))
	{
		document.cookie = NameOfCookie + "=" + ";domain=.yzz.cn;path=/; expires=Thu, 01-Jan-70 00:00:01 GMT";
     }
 }
