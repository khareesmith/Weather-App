// This is our API key
var APIKey = "";

// Here we are building the URL we need to query the database
var queryURL = "" + APIKey;

// Here we run our AJAX call to the OpenWeatherMap API
$.ajax({
  url: queryURL,
  method: "GET"
})
  // We store all of the retrieved data inside of an object called "response"
  .then(function(response) {
      console.log(queryURL);
      console.log(response);

    // Transfer Content to HTML using jQuery
    // console.log your data response

  });
