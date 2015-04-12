
if ( typeof yzz_global == 'undefined' ) {
    var yzz_global = {};
}
yzz_global.block_menu_locate = function() {
    if (typeof blocknav != 'undefined') {
        blocknav.locate_menu();
    }
}

yzz_global.scroll = function(block_key) {
    if (typeof blocknav != 'undefined') {
        blocknav.scroll(block_key);
    }
}

yzz_global.forum_resize = function() {
    if (typeof blocknav != 'undefined') {
        setTimeout(blocknav.locate_block_postion, 1000);
    }
}






function block_menu() {

    this.menu = null,
    this.block_postion = null,
    this.block_area = null,
    this.current_block = null;
	this.init();
    this.locate_menu();
    this.locate_block_postion();
    
    
    this.bind_trigger();
    return this;
}

block_menu.prototype = {
    init: function() {
    	block_menu.menu = jQuery("#blocknav");
    },

	locate_menu: function(){
        if ( parseInt( jQuery(document).width() ) > 1120 ) {
            var _width = block_menu.menu.outerWidth();
			var c = jQuery("#yzz_wp").length > 0 ? jQuery("#yzz_wp") : jQuery("#content");
			var _left =  c.offset().left;
            var menu_left = Math.ceil(_left - _width) - 5;
            block_menu.menu.css("left", menu_left + 'px');
            block_menu.menu.css("visibility", "visible");
        } else {
        	block_menu.menu.css("visibility", "hidden");
        }
	},
    
    bind_trigger: function() {
        var that = this;
        
        //resize
        jQuery(window).bind('resize', yzz_global.block_menu_locate);
        
        
        jQuery("#blocknav ul li").each(function(){
            if (typeof jQuery(this).attr('block') != 'undefined' ) {
                
                jQuery(this).bind('click', function(){
                    //menu onclick
                    jQuery("#blocknav ul .current").removeClass('current');
                    
                    jQuery(this).addClass('current');
                    yzz_global.scroll(jQuery(this).attr('block'));
                });
                
                //forum hide show
                var attr_block = jQuery(this).attr('block');
                var temp_arr = attr_block.split('_');
                var fid = temp_arr[1];
                if ( jQuery("#category_"+ fid +"_img").length > 0 ) {
                    //append event
                    jQuery("#category_"+ fid +"_img").bind('click', yzz_global.forum_resize);
                }
            }
        })
       
        /*
        jQuery(window).bind("scroll",function(){
			var block_top = jQuery("#blocknav").offset().top;
            var last_block = null;
			for (var block_name in block_menu.block_postion) {
				var _top = block_menu.block_postion[block_name];
				if ( block_top < _top ) {
                    if ( block_menu.current_block != last_block ) {
                        block_menu.current_block = last_block;
                        
                        jQuery("#blocknav ul .current").removeClass('current');
                        
                        jQuery("#blocknav ul li").each(function(){
                            if ( (typeof jQuery(this).attr('block') != 'undefined' ) 
                                && (jQuery(this).attr('block') == last_block) )
                            {
                                jQuery(this).addClass('current');
                            }
                        })
                    }
                } else {
                    last_block = block_name;
                }
			}
            
			if (jQuery.browser.msie && (jQuery.browser.version == "6.0") && (! jQuery.support.style)) {
				document.getElementById('blocknav').style.top = (parseInt(document.documentElement.scrollTop)+295) + "px";		// setBlocknavTop();
			}
		});
        */
    },
    
    scroll: function(key) {
        if ( typeof(block_menu.block_postion[key]) != 'undefined' ) {
            var _top = parseInt(block_menu.block_postion[key] - 39 - 5) + 'px';   //39 = sitenav
            var _body = (window.opera) ? (document.compatMode == "CSS1Compat" ? jQuery('html') : jQuery('body')) : jQuery('html,body');
            _body.animate({"scrollTop": _top}, 1000);

        }
    },
    
    locate_block_postion: function() {
        block_menu.block_postion = [];
        block_menu.block_area = [];
        var that = this;

        jQuery("#blocknav ul .contentblock").each(function(){
            if (typeof jQuery(this).attr('block') == 'undefined' ) {
                return false;
            }
            var dom_id = jQuery(this).attr('block');
            
            var _top = jQuery("#" + dom_id).offset().top;
            block_menu.block_postion[dom_id] = _top;

        });
    }
	
}
var blocknav;
jQuery(document).ready(function(){
    if ( (jQuery(".couplet2").length == 0) 
        && (jQuery("#a-adv").length == 0)
    ){
        blocknav = new block_menu();
    }
})


