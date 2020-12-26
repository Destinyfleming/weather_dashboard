var APIKey = '849f687dae346078055aab12dfeb85c3'
var queryURL = "https://api.openweathermap.org/data/2.5/weather?" +
city + APIKey;
var city = $("#city-name").val();
$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
  });
