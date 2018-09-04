/*function getDecimal(num){
var num;
if(num<0) {num=-num;}

return num-= Math.floor(num);
}*/

function randomInteger(min, max){
var min, max;
for (var i=0;i<10;i++){
console.log((Math.floor(min+Math.random()*(max+1-min))));
}
}
randomInteger(10,100);
