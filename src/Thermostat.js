'use strict';

function Thermostat(){
  this.state = 20;
  this.minimum = 10;
  this.maximum = 25;
  this.powerOn = true;}
  Thermostat.prototype.up = function(){ return this.state ++ ;};
  Thermostat.prototype.down = function(){ return this.state --;};
  Thermostat.prototype.changeMode = function(){
    if(this.powerOn===true) {
      this.powerOn = false ;
      this.maximum = 32 ;
    }else {
      this.powerOn = true ;
      this.maximum = 25 ;
    }
  };
  
