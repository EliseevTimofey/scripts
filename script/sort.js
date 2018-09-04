var strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", "8-()"];
var obj={};
function unique(arr){
for (var i=0;i<arr.length;i++){
var sorted = arr[i].toLowerCase().split('').sort().join('');
obj[sorted]=arr[i];
}
var arrun=[];
for (var key in obj){
arrun.push(obj[key]);
}
return arrun;
}
alert( unique(strings) );