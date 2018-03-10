$(document).ready(function()
	{
		$(".menulink").click(function()
		{
			$("#nav").slideToggle('slow');
		});
		$(".chat-header").click(function()
		{
			$(".chat-form").slideToggle('slow');
		});
		window.onresize=function(event)
		{
			if($(window).width() > 599)
			{
				$("#nav").slideDown('normal');
			}
		};
      $(function(){
    $(window).scroll(function() {              
        $('#container #footer').toggle($(document).scrollTop() > 100);	
			$('.rights2').toggle($(document).scrollTop() > 100);
			});
		})		
	}
);

