

$(document).ready(function(){

 $('.progressbar').each(function(){
		
		 $(this).find('.progressbar-bar').animate({
		width:$(this).attr('data-percent')
		},6000);
	});
});