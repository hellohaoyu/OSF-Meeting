/* Page specific javascript */

$(document).ready(function(){
	$('.prereg-button').qToggle();
	$('.prereg-button').click(function(){
		var target = $(this).attr('data-qToggle-target');
		$(target).find('input').first().focus();
	});
});