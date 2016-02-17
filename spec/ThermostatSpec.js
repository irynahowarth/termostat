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












}); 
