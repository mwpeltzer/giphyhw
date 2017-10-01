Giphy Homework (HW-6)

Synopsis: This project enables the user to click a button referencing a certain athlete and will then generate 10 gifs.  

Code Example: 

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

Motivation: To create a functioning ajax call to an API

API Reference: Giphy Docs: https://developers.giphy.com/docs/

License: ?


Authors

Michael Peltzer 



