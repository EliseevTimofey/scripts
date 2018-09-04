var x=prompt('Введите число',000),n=prompt('Введите степень',000);
function pow(x,n){
var result=x;
for( var i=1;i<n;i++){
result*=x;
}
return result;
}
alert(pow(x,n)); 