$(document).ready(function(){

	$("li").click(function(){
		$("li").removeClass("selected");
		$(this).addClass("selected");
		var content_id = "#" + $(this).attr("id") + "_content";
		$(".tab").removeClass("show");
		$(content_id).addClass("show");
	});


});

