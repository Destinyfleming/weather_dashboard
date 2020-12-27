var APIKey = '849f687dae346078055aab12dfeb85c3'
var queryURL = 'api.openweathermap.org/data/2.5/weather?q={city}&appid={API key}'
var city = $("#city-name").val();

//create an on click function
$( "#city-name-submit" ).click(function() {
    alert( "click" );
  });

//create local storage
localStorage.setItem("recent search", 'city');
console.log(localStorage.getItem("recent search"))

// current forcast
$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
});
//5 day forcast
//uv index

//display to screen
