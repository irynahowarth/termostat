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














}); 
