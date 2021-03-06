describe('thermostat', function(){
  var thermostat;
  beforeEach(function(){
    thermostat = new Thermostat();
  });

  describe('thermostat starts at 20 degrees', function(){
    it('starts at 20 degrees', function(){
      expect(thermostat.state).toEqual(20);
    });
  });

  describe('thermostat can increase with up button', function(){
    it('increases the state', function(){
      thermostat.up();
      expect(thermostat.state).toEqual(21);
    });
  });

  describe('thermostat can decrease with down button', function(){
    it('decreases the state', function(){
      thermostat.down();
      expect(thermostat.state).toEqual(19);
    });
  });

  describe('thermostat has a minimum temperature of 10', function(){
    it('has a minimum temperature of 10', function (){
      expect(thermostat.minimum).toEqual(10);
    });
    it('cannot be turned down past minimum', function(){
      for (var i = 0; i < 11; i ++) {thermostat.down();}
      expect(thermostat.state).toEqual(thermostat.minimum);
    });
  });

  describe('thermostat has a maximum temperature', function(){
    it('has a maximum temp of 25', function (){
      expect(thermostat.maximum).toEqual(25);
    });
    it('cannot be turned up above max temp', function(){
      for(var i = 0; i < 12; i ++) {thermostat.up();}
      expect(thermostat.state).toEqual(thermostat.maximum);
    });
    it('if power save mode is off, maximum temp is 32', function(){
      thermostat.changeMode();
      expect(thermostat.maximum).toEqual(32);
    });
  });
  
  describe('thermostat has a power mode', function(){
    it('the mode is on by default', function(){
      expect(thermostat.powerOn).toBeTruthy();
    });
    it('the mode can be switched off', function(){
      thermostat.changeMode();
      expect(thermostat.powerOn).toBeFalsy();
    });
  });

  describe('reset button changes state to 20', function(){
    it('resets the state to 20', function(){
      thermostat.up();
      thermostat.reset();
      expect(thermostat.state).toEqual(20);
    });
    it('resets the color to yellow', function(){
      for(var i = 0; i < 3; i++) {thermostat.down();}
      thermostat.reset();
      expect(thermostat.color).toBe('yellow')
    });
  });

  describe('thermostat has a color', function(){
    it('its colour is yellow by default', function(){
      expect(thermostat.color).toBe('yellow');
    });
    it('its colour is green when temp is less than 18', function(){
      for(var i = 0; i < 3; i ++) {thermostat.down();}
      expect(thermostat.color).toBe('green');
    });
    it('its colour is red when temp is over 25', function(){
      thermostat.changeMode();
      for(var i = 0; i < 6; i ++) {thermostat.up();}
      expect(thermostat.color).toBe('red');
    });
  });
}); 









