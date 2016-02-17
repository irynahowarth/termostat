'use strict';

function Thermostat(){this.state = 20;}
  Thermostat.prototype.up = function(){ return this.state += 1;};

