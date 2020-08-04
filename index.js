// This is our API key
const APIKey = "a3088a8f93b46df8dd859771fb1b2e95";

$("#weather-btn").click(function (e) { 
  e.preventDefault();
  let city = $("#city").val();
  console.log(city);

  let queryURL = "api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&appid=" + APIKey;
  console.log(queryURL);
});