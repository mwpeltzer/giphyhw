
// 1) create a function that dynamically creates a button with an on click

// 2) Make an ajax call to the giphy api 

// 3) create a function that allows you to type in a subject and then pulls pictures of what you typed

// function to make sure everything has loaded before beginning to run
$(document).ready(function() {

// array of athletes (my chosen topic for the the buttons)
var athletes = ["Dwayne Wade", "Kawhi Leonard", "Steph Curry", "Lebron James", "Lonzo Ball", "The Rock"];
// function to make buttons appear on page
function createButtons() {
	
		// clarify what this does?
		// $("#athlete-buttons").empty();
	
	// for loop that pulls from the topics array / not sure what is happending with 'arrayToUse'
	for (var i = 0; i < athletes.length; i++) {
		// creates variable called 'a' that will create a button  
		var a = $("<button>");

		a.addClass("athlete");
		
		a.attr("data-type", athletes[i]);

		a.text(athletes[i]);
		
		$("#athlete-buttons").append(a);
		
	}
	
}
	
createButtons()

// Not really sure what any of this is doing
$(document).on("click", ".athlete", function(e){
		e.preventDefault()

		$("#athletes").empty();

		$("#athlete-buttons").removeClass("active");

		$(this).addClass("active");
		
		var type = $(this).attr("data-type");

		var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + type + "&api_key=3LWiOXNjo8MiOHk2xMToMJOEmJz7QeA1";

		$.ajax({
			method: "GET",
			url: queryURL
		})

		.done(function(response) {

			var results = response.data;
			// console.log(results)

			for(var i = 0; i < results.length; i++) {

				var athleteDiv = $("<div class= \"athlete-item\">");

				var rating = results[i].rating;

				var p = $("<p>").text("Rating: " + rating);


				var animated = results[i].images.fixed_height.url;
				var still = results[i].images.fixed_height_still.url;

				var athleteImage = $("<img>");
				athleteImage.attr("src", animated);
				

				athleteDiv.append(p);
				athleteDiv.append(athleteImage);

				$("#athletes").append(athleteDiv);

			}
		})


})
});









