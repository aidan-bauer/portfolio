$(document).ready(function() {
	var projects = $(".portfolio-item");
	
	$("li div").click(function() {
		var filter = $(this).data("project-filter");

		for (var i = 0; i < projects.length; i++) {
			// console.log(projects[i]);
			// console.log(projects[i].getAttribute("data-project-type"));

			if (filter == "all") {
				projects[i].style.display = "block";
			}
			else if (projects[i].getAttribute("data-project-type") != filter) {
				projects[i].style.display = "none";
			}
			else if (projects[i].getAttribute("data-project-type") == filter) {
				// console.log(projects[i].getAttribute("data-project-type"));
				projects[i].style.display = "block";
			}
		}
	});
});