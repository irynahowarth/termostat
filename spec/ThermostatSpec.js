'use strict';

describe('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe('it starts', function() {
    it('at 20 degrees', function() {
      expect(thermostat.temperature).toEqual(thermostat.DEFAULT_TEMPERATURE);
    });

    it('with minimum temperature of 10 degrees', function() {
      expect(thermostat.MIN_TEMPERATURE).toEqual(10);
    });

    it('with maximum temperature of 25 degrees when mode is on', function() {
      expect(thermostat.currentMaxTemp()).toEqual(thermostat.MAX_TEMPERATURE_ON);
    });

    it('with maximum temperature of 32 degrees when mode is off', function() {
      thermostat.changeMode();
      expect(thermostat.currentMaxTemp()).toEqual(thermostat.MAX_TEMPERATURE_OFF);
    });

    it('with Power-saving mode on by default', function() {
      expect(thermostat.isModeOn).toBeTruthy();
    });

    it('with display color: yellow', function() {
      expect(thermostat.displayColor).toEqual('yellow');
    });
  });

  describe('#up', function() {
    it('increases temperature by 1', function() {
      thermostat.up();
      expect(thermostat.temperature).toEqual(thermostat.DEFAULT_TEMPERATURE + 1);
    });

    it('not allowed to exceed max temperature', function() {
      thermostat.temperature = thermostat.currentMaxTemp();
      thermostat.up();
      expect(thermostat.temperature).toEqual(thermostat.currentMaxTemp());
    });
  });

  describe('#down', function() {
    it('decreases temperature by 1', function() {
      thermostat.down();
      expect(thermostat.temperature).toEqual(thermostat.DEFAULT_TEMPERATURE - 1);
    });

    it('not allowed to exceed min temperature', function() {
      thermostat.temperature = thermostat.MIN_TEMPERATURE;
      thermostat.down();
      expect(thermostat.temperature).toEqual(thermostat.MIN_TEMPERATURE);
    });
  });

  describe('Power saving mode', function() {
    it('can be changed', function() {
      thermostat.changeMode();
      expect(thermostat.isModeOn).toBeFalsy();
    });

    it('is off, maximum temperature is 32 degrees', function() {
      thermostat.changeMode();
      expect(thermostat.currentMaxTemp()).toEqual(thermostat.MAX_TEMPERATURE_OFF);
    });
  });

  describe('#reset', function() {
    it('resets temperature to 20', function() {
      thermostat.up();
      thermostat.reset();
      expect(thermostat.temperature).toEqual(thermostat.DEFAULT_TEMPERATURE);
    });

    it('should default display color to yellow', function() {
      var g = thermostat.DEFAULT_TEMPERATURE - thermostat.LOW_USAGE_LIMIT;
      for(var i = 0; i <= g; i++)
        thermostat.down();
      thermostat.reset();
      expect(thermostat.displayColor).toEqual('yellow');
    });
  });

  describe('.displayColor', function() {
    it('should be green when temperature < 18', function() {
      var g = thermostat.DEFAULT_TEMPERATURE - thermostat.LOW_USAGE_LIMIT;
      for(var i = 0; i <= g; i++)
        thermostat.down();
      expect(thermostat.displayColor).toEqual('green');
    });

    it('should be red when temperature >= 25', function() {
      var r = thermostat.HIGH_USAGE_LIMIT - thermostat.DEFAULT_TEMPERATURE;
      for(var i = 0; i < r; i++)
        thermostat.up();
      expect(thermostat.displayColor).toEqual('red');
    });

    it('should be yellow when temperature is between 18 and 24', function() {
      var r = thermostat.HIGH_USAGE_LIMIT - thermostat.DEFAULT_TEMPERATURE;
      for(var i = 0; i < r; i++)
        thermostat.up();
      thermostat.down();
      expect(thermostat.displayColor).toEqual('yellow');
    });
  });
});















