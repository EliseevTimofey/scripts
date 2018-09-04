function printNumbersInterval() {
var i = 1;
var timerId = setTimeout(function log() {
   console.log(i); 
if (i < 20) setTimeout(log, 100);
    i++;
}, 100); 

}



 
 
printNumbersInterval();