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
  });














}); 
