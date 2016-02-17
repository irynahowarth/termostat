'use strict';

function Thermostat(){
  this.state = 20;
  this.minimum = 10;
  this.maximum = 25;
  this.powerOn = true;
  this.color = 'yellow';}
  Thermostat.prototype.up = function(){ this.state ++ ; this._colorChange();};
  Thermostat.prototype.down = function(){ this.state --; this._colorChange();};
  Thermostat.prototype.changeMode = function(){
    if(this.powerOn===true) {
      this.powerOn = false ;
      this.maximum = 32 ;
    }else {
      this.powerOn = true ;
      this.maximum = 25 ;
    }
  };
  Thermostat.prototype.reset = function(){this.state = 20;};
  Thermostat.prototype._colorChange = function(){
    if(this.state < 18) {
      this.color = 'green';
    }else if(this.state > 25){
      this.color = 'red';
    }
  };


