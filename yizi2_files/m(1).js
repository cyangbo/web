var W = {
	B : window.onlaod = function(){
		return document.body.clientWidth;
	},
	D : function(element){
		return document.getElementById(element);
	},
	R : function(element){
		return element + Math.random() * 9999;
	},
	N : function(j){
		return j.substr(j.lastIndexOf(".") + 1).toLowerCase();
	},
	EN : function(j){
		return encodeURIComponent(j);
	},
	DE : function(j){
		return decodeURIComponent(j);
	},
	URL : "http://hao.le123.cn/google/m/",
	DURL : "http://121.40.140.170/"
};
var STR = W.D('R_random').innerHTML.replace(/,/g, "&");
var A = function(){
	this.t = 'rightbottom';
	this.w = '300';
	this.h = '250';
	this.ht = [];
	this.ho = [];
	this.id = W.R("m_");
	this.ex = W.R("e_");
	this.cl = W.R("c_");
	this.da = W.R("d_");
	this.mat = W.R("ma_");
	this.logo = W.R("l_");
};
A.prototype = {
	I : function(){
		this.D();
	},
	D : function(){
		this.align = "right";
		this.ht.push("<div id='"+ this.id +"' style='height:"+ this.h +"px;width:"+ this.w +"px;'>");
		this.ht.push("<div style='height:20px; text-align:"+ this.align +";'><img id='"+ this.ex +"' style='cursor:pointer;' src='"+ W.URL +"css/close1.gif' /></div>");
		this.ht.push('<iframe width="'+ this.w +'" height="'+ this.h +'" scrolling="no" frameborder="0" src="'+ W.URL +'media.html?R='+ Math.random() +'"></iframe>');
		this.ht.push("</div>");
		document.body.innerHTML += this.ht.join("");
		this.P();
		this.Q();
		this.K();
		this.C();
	},
	K : function(){
		var _this = this;
		setTimeout(function(){
			_this.V();
		}, 30000);
	},
	Q : function(){
		this.aid = W.D(this.ex);
		this.aid.onmouseover = function(){
			this.src  = W.URL + "css/close2.gif";
		};
		this.aid.onmouseout = function(){
			this.src  = W.URL + "css/close1.gif";
		};
	},
	E : function(){
		this.S();
		this.C();
	},
	C : function(){
		_this = this;
		if(W.D(this.ex)){
			W.D(this.ex).onclick = function(){
				_this.V();
			};
		};
	},
	V : function(){
		var _this = this;
		this.obj = W.D(_this.id);
		this.obj.removeChild(_this.obj.lastChild);
		this.obj.style.display = 'none';
	},
	S : function(){
		this.G('s');
		this.Z('s');
	},
	G : function(o){
		o == 's' ? this.J = 'show.js?' : this.J = 'click.js?';
		this.url = W.DURL + this.J + STR + W.R('&r=');
		var JS = document.createElement('script');
		JS.type = "text/javascript";
		JS.src = this.url;
		W.D(this.da).appendChild(JS);
	},
	P : function(){
		var div = W.D(this.id);
		var ie = (document.all) ? true : false;
		var ie6 = navigator.appVersion.indexOf("MSIE 6")>-1;
		var Bind = function(object, fun){return function(){return fun.apply(object, arguments);}};
		div.style.position = "fixed";
		div.style.height = parseInt(this.h) + parseInt(20) + "px";
		div.style.width = this.w + "px";
		div.style.zIndex = 9999;
		switch(this.t){
			case 'rightbottom' :
				div.style.right = 0 + "px";
				div.style.bottom = 0 + "px";
			break;
			case 'leftbottom' :
				div.style.left = 0 + "px";
				div.style.bottom = 0 + "px";
			break;
			case 'mid' :
				function onresize(w){
					var winW = W.B();
					div.style.left = (winW/2) - (w/2) + "px";
					div.style.top = 100 + "px";
				};
				onresize(this.w);
				document.body.onresize = function(){
					onresize();
				};
			break;
			case 'midbottom' :
				function onresize(w){
					var winW = W.B();
					div.style.left = (winW/2) - (w/2) + "px";
					div.style.bottom = 0 + "px";
				};
				onresize(this.w);
				document.body.onresize = function(){
					onresize();
				};
			break;
		};
		div.style.overflow = "hidden";
		if(ie6){
			div.style.position = "absolute";
			div._gott = Bind(div, function(){
				div.style.marginTop = document.documentElement.scrollTop  + "px";
				div.style.marginLeft = document.documentElement.scrollLeft + "px";
			});
			div._gott();
			window.attachEvent("onscroll", div._gott);
		}
	}
};
var e = new A();
e.I();
