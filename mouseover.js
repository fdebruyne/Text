$(document).ready(function(){
	$(".nav-list li").mouseover(function(event) {
		$(this).children('ul').show();	
	});
	$(".nav-list li").mouseout(function(event) {
		$(this).children('ul').hide();
	});

	var prev = $(".prev");
	var next = $(".next");
	var list = $(".adList-v");
	next.click(function() {
		if (!list.is(':animated')) {
			if (list.offset().left <= -list.width()/2) {
				list.css('left','0')
			}
			list.animate({left:'-=372px'}, "normal")		
		}
	});
	prev.click(function() {
		if (!list.is(':animated')) {
			if (list.offset().left >=0) {
				list.css("left",-list.width()/2+'px')
			}
			list.animate({left:'+=372px'}, "normal")
		}
	});

	//最底层搜索框
	var $txt = $(".btn-text");
	$txt.focus(function() {
		if ($(this).val() == this.defaultValue) {
			$(this).val("");
		}
	}).blur(function() {
		if ($(this).val() == "") {
			$(this).val(this.defaultValue);
		}
	});

})
