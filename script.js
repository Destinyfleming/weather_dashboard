var APIKey = '849f687dae346078055aab12dfeb85c3'

//create an on click function for todays forcast
$( "#city-name-submit" ).click(function() {
  var city = $("#city-name").val()
  console.log(city)
  var queryURL = "https://api.openweathermap.org/data/2.5/weather?q="
  + city +"&appid=" + APIKey;
    $.ajax({
      url: queryURL,
      method: "GET"
    })
      .then(function(response) {
        console.log(queryURL);
        console.log(response);

        $("#forcast-name").text("Weather Details in " + response.name + " today" );
        $("#wind").append("<p> Wind Speed: " + response.wind.speed +"</p>");
        $("#humidity").text("Humidity: " + response.main.humidity);
      
        var tempF = (response.main.temp - 273.15) * 1.80 + 32;
        $("#temp").text("Temperature (K) " + response.main.temp);
        $("#tempF").text("Temperature (F) " + tempF.toFixed(2));


       localStorage.setItem("recent search", response.name);
       console.log(localStorage.getItem("recent search"))
       $("#recent-search").text("You have recently looked for:" + (localStorage.getItem("recent search")));
    })
});

//5 day forcast
var fiveUrl = 'https://api.openweathermap.org/data/2.5/forecast?q='+ cityName +'&appid=' +APIKey

$( "#five-day-forcast-btn" ).click(function() {
  var cityT = $("#city-name").val()
  console.log(cityT)
  var fiveUrl = 'https://api.openweathermap.org/data/2.5/forecast?q='+ cityT +'&appid=' +APIKey

  $.ajax({
    url: fiveUrl,
    method: "GET"
  })
    .then(function(res) {
      console.log(fiveUrl);
      console.log(res);
      console.log(res.city.name)
      console.log(res.list)

      $("#5-day-name").text("Weather Details in " + res.city.name + " the next five days." );

      var tempF1 = (res.list[1].main.temp - 273.15) * 1.80 + 32;
      $('#1-temp').text("the tempature tommorrow is: "+ tempF1.toFixed(2) + " and " + res.list[1].weather[0].description)
      var tempF2 = (res.list[2].main.temp - 273.15) * 1.80 + 32;
      $('#2-temp').text("the tempature the day after tommorrow is: "+ tempF2.toFixed(2)+ " and " + res.list[2].weather[0].description)
      var tempF3 = (res.list[3].main.temp - 273.15) * 1.80 + 32;
      $('#3-temp').text("the tempature 3 days from now is: "+ tempF3.toFixed(2)+ " and " + res.list[3].weather[0].description)
      var tempF4 = (res.list[4].main.temp - 273.15) * 1.80 + 32;
      $('#4-temp').text("the tempature 4 days from now is: "+ tempF4.toFixed(2)+ " and " + res.list[4].weather[0].description)
      var tempF5 = (res.list[5].main.temp - 273.15) * 1.80 + 32;
      $('#5-temp').text("the tempature 5 days from now is: " + tempF5.toFixed(2) + " and " + res.list[5].weather[0].description)
    })
});



