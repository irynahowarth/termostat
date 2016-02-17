'use strict';

function Thermostat(){
  this.state = 20;
  this.minimum = 10;
  this.maximum = 25;
  this.powerOn = true;}
  Thermostat.prototype.up = function(){ this.state ++ ;};
  Thermostat.prototype.down = function(){ this.state --;};
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
  
