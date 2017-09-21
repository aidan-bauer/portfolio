// $('.container').css('display', 'none');

$(document).ready(function() {
	// $('.container').fadeIn(1500);
	// $('#main').smoothState({debug:true});

	$('a.menu-item').click(function(event) {
		event.preventDefault();
		var newPage = this.href;
		$('.container').fadeOut(1000, function() {
			window.location.href = newPage;
		});
	});
});