for(var n = 0;n < 30; n++){
	  var tempImg = document.getElementById("pan_img_" + n);
	  if(tempImg === null || tempImg === "undefined"){
		  break;
	  }else if(tempImg.scenceId === "10"){
		  tempImg.src = newimg(tempImg.src,tempImg.src);
	  }
}
function newimg(src,def){
    if(!src)
        return def;
    var newimg=['http://imgstore','','.cdn.sogou.com/net/a/04/link?appid=11','','&url=',''];
    if(src.indexOf('appid')!=-1)
        return src;
    else if(src.indexOf('.cdn.sogou.com')!=-1){

        newimg[1]=src.substring(15,17);
        newimg[3]=src.substring(src.indexOf('/app/b/')+10,src.indexOf('/app/b/')+10);
        newimg[5]=src.substring(src.indexOf('url=')+4);
        var finalsrc=newimg.join('');
        return finalsrc;
    }else{
        var newimg=['http://img','','.store.sogou.com/net/a/04/link?appid=1016000','','&url=',''];
        newimg[1]=src.substring(10,12);
        newimg[3]=src.substring(src.indexOf('/app/b/')+10,src.indexOf('/app/b/')+10);
        newimg[5]=src.substring(src.indexOf('url=')+4);
        var finalsrc=newimg.join('');
        return finalsrc;
    }
}

function isIE(){
	 if(navigator.userAgent.indexOf("MSIE")>0) { 
	        return true; 
	   } 
}