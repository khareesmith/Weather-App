// This is our API key
const APIKey = "a3088a8f93b46df8dd859771fb1b2e95";

$("#weather-btn").click(function (e) { 
  e.preventDefault();
  let city = $("#city").val();
  console.log(city);

  let queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&appid=" + APIKey;

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
  

});