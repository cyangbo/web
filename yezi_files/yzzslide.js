/*
Author:Jason Yu
Date  :20130529
*/	
var YzzSlide = function(obj){
	this.oFlash = document.getElementById(obj.id);
	this.oTitnum = document.getElementById(obj.tit);
	if(!this.oFlash || !this.oTitnum){
		return
	}
	
	this.aFlashLi = this.oFlash.getElementsByTagName("ul")[0].getElementsByTagName("li");
	this.aTitnumSpan = this.oTitnum.getElementsByTagName("span");
	if(!this.aFlashLi || !this.aTitnumSpan){
		return
	}
	
	this.iNum = 0;
	this.iNextNum = 1;
	this.time = obj.time;
	this.ieffNum = 0;
	this.iLeft = 20;
	this.eff = obj.eff;
	this.len = this.aTitnumSpan.length;
	var that = this;
	this.iTimer = setTimeout(function(){that.Show()},that.time);
	for(var i=0; i<this.len; i++){
		this.aTitnumSpan[i].index = i;
		this.aTitnumSpan[i].onmouseover = function(){
			if(this.className != "hover"){
				that.ieffNum = 0;
				that.iLeft = 20;
				that.iNextNum = this.index;
				that.Show(that.time);
			}
		}
	}
};
YzzSlide.prototype = {
	Move:function(){
		this.iNum=this.iNextNum;
		this.iNextNum++;
		if(this.iNextNum==this.len){
			this.iNextNum=0;
		}
	},
	Show:function(){
		for(var i=0; i<this.len; i++){
			this.aTitnumSpan[i].className = "";
			this.aFlashLi[i].style.zIndex = 1;
			this.aFlashLi[i].style.opacity = 0;
			this.aFlashLi[i].style.filter="alpha(opacity = 0)";
			if(this.eff){
				this.aFlashLi[i].style.left = 0;
				this.aFlashLi[i].style.top = 0;
			}
		}
		this.aTitnumSpan[this.iNextNum].className = "hover";
		this.Effect();
		
	},
	Effect:function(){
		clearTimeout(this.iTimer);
		this.ieffNum += 2;
		this.aFlashLi[this.iNextNum].style.zIndex = 2;
		if(this.eff){
			if(this.iLeft>0){
				this.iLeft--;
				this.aFlashLi[this.iNextNum].style.left = -this.iLeft + "px";
				this.aFlashLi[this.iNextNum].style.top=this.iLeft + "px";
			}
		}
        
		this.aFlashLi[this.iNum].style.opacity = 1-this.ieffNum/100;
		this.aFlashLi[this.iNum].style.filter="alpha(opacity = " + (100-this.ieffNum) + ")";
		
		this.aFlashLi[this.iNextNum].style.opacity = this.ieffNum/100;
		this.aFlashLi[this.iNextNum].style.filter="alpha(opacity = " + this.ieffNum + ")";
		
		
		var that = this;
		if(this.ieffNum>=100){
			this.iTimer=setTimeout(function(){that.Show()},that.time);
			this.ieffNum = 0;
			this.iLeft=20;
			this.Move();
		}else{
			this.iTimer = setTimeout(function(){that.Effect()},10);
		}
	}
}
