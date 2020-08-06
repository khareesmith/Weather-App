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

        $(".current").show();
  
      // Transfer Content to HTML using jQuery
      // console.log your data response

      $(".city-name").html(response.city.name + ", " + response.city.country);

      d = JSON.stringify(response.list[0].dt_txt);
      n = d.substring(1,11);
      let parts = n.split('-');

      dt = new Date(parts[0], parts[1] - 1, parts[2]);
      currentdt = dt.toDateString();

      $(".current-time").html(currentdt);

      $(".current-temp").html(response.list[0].main.temp);

      $(".current-desc").html(response.list[0].weather[0].description);

      let iconcode = response.list[0].weather[0].icon;
      iconurl = "https://openweathermap.org/img/wn/" + iconcode + "@2x.png";
      console.log(iconurl);

      $("#w-icon").attr('src', iconurl);
      
    });
  
});