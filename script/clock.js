﻿function Clock(options) {

  
this._template = options.template;
 

}


 Clock.prototype._render=function(){
var date = new Date();

   

 var hours = date.getHours();
   
 if (hours < 10) hours = '0' + hours;

  
  
var min = date.getMinutes();
    
if (min < 10) min = '0' + min;

    

var sec = date.getSeconds();
    
if (sec < 10) sec = '0' + sec;

    
var output = this._template.replace('h', hours).replace('m', min).replace('s', sec);

 
   
console.log(output);
}
 Clock.prototype.stop=function() {
   
 clearInterval(this._timer);
  };

 
Clock.prototype.start=function(){
this._render();
   
  var self = this;
  this._timer = setInterval(function() {
    self._render();
  }, 1000);
};
function Extendent_clock=function(){
 Clock.apply(this, arguments);
 this._precision = +options.precision || 1000;
}
Extendent_clock.prototype=Object.create(Clock.prototype);
Extendent_clock.prototype.start=function(precision){
this._render();
   
  var self = this;
  this._timer = setInterval(function() {
    self._render();
  },this_precision);
}

