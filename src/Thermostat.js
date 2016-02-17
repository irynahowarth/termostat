'use strict';

function Thermostat(){this.state = 20; this.minimum = 10;}
  Thermostat.prototype.up = function(){ return this.state ++ ;};
  Thermostat.prototype.down = function(){ return this.state --;};

