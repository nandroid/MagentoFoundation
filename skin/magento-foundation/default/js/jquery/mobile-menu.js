jQuery(document).ready(function()
{
	jQuery("#mobile-menu li > ul").hide();
	jQuery("#mobile-menu li > ul li a[class=current]").parents("ul").show().prev("a").addClass("accordionExpanded");
	jQuery("#mobile-menu li:has(ul)").addClass("accordion");
	jQuery("#mobile-menu li:has(ul) > a").click(function()
	{
		jQuery(this).toggleClass("accordionExpanded");
		jQuery(this).next("ul").slideToggle("fast");
		jQuery(this).parent().siblings("li").children("ul:visible").slideUp("fast").parent("li").find("a").removeClass("accordionExpanded");
		return false
	})
});