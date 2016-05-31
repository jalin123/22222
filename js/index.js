$(function(){
	var index=0;
	$('.slide_nav div').each(function(i){
		$(this).click(function(){
			$('.slide li').fadeOut('slow');
			$('.slide li:eq('+i+')').fadeIn('slow');
		});
	});
	var timer= setInterval(function(){
		index++;
		if(index>3){
			index=0;
		};
		$('.slide li').eq(index).fadeIn('slow').siblings().fadeOut('slow');
		// $('.slide_nav div img').css({'display':'none'});
		$('.slide_nav div img').eq(index).css({'display':'block'}).parent().siblings().children().css({'display':'none'});
		// $('.slide li span').eq(index).animate({left:0},'slow')
		// $('.slide_nav div img').eq(index).parent().siblings().css({'display':'none'});
	},3000);
}) 