var arr = [1, 2, 3, 4, 5, 6, 7];

function filter(arr, func){
var filt=arr.filter(func);
return filt;
}
function inBetween(a,b){
return function(x) {
      return x >= a && x <= b;
    };
}
function inArray(d){
return function(c){
return d.indexOf(c) !=-1; 
}
}


