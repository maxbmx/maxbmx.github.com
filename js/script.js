$(document).ready(function()
{
	$(".read-more-trigger").click(function()
	{
		$(this).parent().parent().children(".read-more").slideToggle("slow");
	});
	
	$(".read-more-trigger").toggle(function()
	{
		$(this).text("Read less");
		$(this).text("Read less");	
	}
	,function()
	{
		$(this).text("Read more");
	});

	
	
	return false;	
			
});