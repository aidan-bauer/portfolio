$(document).ready(function() {

	var fadeTime = 1000;
	
	// console.log("active");
	$('.header a').click(function(event) {
		event.preventDefault();
		var newPage = this.href;

		$('.container').fadeOut(fadeTime, function() {
			window.location.href = newPage;
		});
	});

	//porfolio
	$('a.portfolio-item').click(function(event) {
		event.preventDefault();
		var newPage = this.href;

		$('.container').fadeOut(fadeTime, function() {
			window.location.href = newPage;
		});
	});

	//footer
	$('.back-button a').click(function(event) {
		event.preventDefault();
		var newPage = this.href;

		$('.container').fadeOut(fadeTime, function() {
			window.location.href = newPage;
		});
	});
});