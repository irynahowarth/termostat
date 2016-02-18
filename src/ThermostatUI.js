$(document).ready(function() {
  var therm = new Thermostat();
  
  function update_temp() {
    $("#temp").text(therm.temperature);
    $(".display-color").css({'background-color': therm.displayColor});
  }

  function update_mode() {
    $("#current-mode").text(therm.isModeOn ? "ON" : "OFF");
  }
  
  update_temp();
  update_mode();

  $("#up").click(function() {
    therm.up();
    update_temp();
  });

  $("#down").click(function() {
    therm.down();
    update_temp();
  });

  $("#reset").click(function() {
    therm.reset();
    update_temp();
  });

  $("#mode").click(function() {
    therm.changeMode();
    update_mode();
  });
});