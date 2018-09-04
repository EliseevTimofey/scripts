var arr = [];
var a;
do {a=prompt('Enter number','');
if(isNumeric(a)){
arr.push(+a);
}
} while (isNumeric(a));
var b=arr.length;
alert(arr);
var sum=0;
for(var i=0;i<b;i++){
 sum+=arr[i]}
alert(sum);


function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
}