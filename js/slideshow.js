var slideIndex = 1;
showSlides(slideIndex);

function changeSlide(n) {
	showSlides(slideIndex += n);
}

function currentSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("slide");
	var dots = document.getElementsByClassName("dot");
	
	if (n > slides.length) {slideIndex = 1} 
	if (n < 1) {slideIndex = slides.length}

	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}

	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}

	slides[slideIndex-1].style.display = "block"; 
	dots[slideIndex-1].className += " active";

	if ($(".slide img")[slideIndex-1].width < $(".slideshow-container").width()-50) {
		$(".slide-number").css("color", "black");
		$(".prev").css("color", "black");
		$(".next").css("color", "black");
	}
	else {
		$(".slide-number").css("color", "white");
		$(".prev").css("color", "white");
		$(".next").css("color", "white");
	}
 }