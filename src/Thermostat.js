'use strict';

function Thermostat() {
  this.DEFAULT_TEMPERATURE = 20;
  this.temperature = this.DEFAULT_TEMPERATURE;
  this.MIN_TEMPERATURE = 10;
  this.MAX_TEMPERATURE_ON = 25;
  this.MAX_TEMPERATURE_OFF = 32;
  this.LOW_USAGE_LIMIT = 18;
  this.HIGH_USAGE_LIMIT = 25;
  this.isModeOn = true;
  this.displayColor = 'yellow';
};

Thermostat.prototype.up = function() {
  if(this.temperature < this.currentMaxTemp()) {
    this.temperature++;
    this._changeDisplayColor();
  }
};

Thermostat.prototype.down = function() {
  if(this.temperature > this.MIN_TEMPERATURE) {
    this.temperature--;
    this._changeDisplayColor();
  }
};

Thermostat.prototype.changeMode = function() {
  this.isModeOn = !this.isModeOn;
};

Thermostat.prototype.reset = function() {
  this.temperature = this.DEFAULT_TEMPERATURE;
  this._changeDisplayColor();
};

Thermostat.prototype._changeDisplayColor = function() {
  if (this.temperature < this.LOW_USAGE_LIMIT)
    this.displayColor = 'green';
  else if (this.temperature >= this.HIGH_USAGE_LIMIT)
    this.displayColor = 'red';
  else
    this.displayColor = 'yellow';
};

Thermostat.prototype.currentMaxTemp = function() {
  return this.isModeOn ? this.MAX_TEMPERATURE_ON : this.MAX_TEMPERATURE_OFF;
}