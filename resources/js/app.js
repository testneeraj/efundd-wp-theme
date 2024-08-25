$(document).ready(function() {
	//$('#header').load('header.html');
	//$('#footer').load('footer.html');

  	// $(window).on('scroll',function(event) {
    //     var scroll = $(window).scrollTop();
    //     if (scroll < 245) {
    //         $(".navbar").removeClass("sticky");
    //     } else {
    //         $(".navbar").addClass("sticky");
    //     }
    // });


	$(document).on('mouseover','.child-item-anchor',function (e){
		console.log('ff');
		$img = $(this).data('srcimage');
		$sid = $(this).data('sid');
		//$(this).closest('.sub-menu-img-block').find('.submenu-image').find('src').attr('src',$img);
		//$('.child-item-anchor').parent('div').siblings('.sub-menu-img-block .submenu-image src').attr('src',$img);
		$("#"+$sid).attr('src',$img);
	});
});