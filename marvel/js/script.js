$(document).ready(function() {
	$('.menu-mobile').click(function() {
		$('.menu ul').toggleClass('visible');
	})
	$('window').resize(function() {
		if ($('window').width > 1000) {
			$('.menu ul').removeClass('.flex');
		}
	})
})