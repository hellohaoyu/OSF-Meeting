/* Page specific javascript */

$(document).ready(function(){
	$('.prereg-button').qToggle({'animation' : 'fade', animationOptions : { duration : 200 }});
	$('.prereg-button').click(function(){
		var target = $(this).attr('data-qToggle-target');
		$(target).find('input').first().focus();
	});
});