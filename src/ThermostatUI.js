$(document).ready(function() {
  var therm = new Thermostat();
  var cityName = $("#select-city").val();

  function updateTemp() {
    $("#temp").text(therm.temperature);
    $(".display-color").css({'background-color': therm.displayColor});
  }

  function updateMode() {
    $("#current-mode").text(therm.isModeOn ? "ON" : "OFF");
  }
  
  getCityWeather(cityName);
  updateTemp();
  updateMode();

  $("#up").click(function() {
    therm.up();
    updateTemp();
  });

  $("#down").click(function() {
    therm.down();
    updateTemp();
  });

  $("#reset").click(function() {
    therm.reset();
    updateTemp();
  });

  $("#mode").click(function() {
    therm.changeMode();
    updateMode();
  });

  $("#select-city").change(function() {
    var cityName = $("#select-city").val();
    getCityWeather(cityName);
  });

  function getCityWeather(city) {
    $.get("http://api.openweathermap.org/data/2.5/find?q=" + city + "&units=metric&APPID=61410e5e87631c5e0d65b4ce6f13f575", function(response) {
      var cityName = response.list[0].name;
      var cityTemp = response.list[0].main.temp;

      $("#city").text(cityName);
      $("#city-temp").text(cityTemp);
    });
  }
});