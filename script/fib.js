//Эратосфен
var arr = [];

for (var i = 2; i < 100; i++) {
  arr[i] = true
}

// шаг 2
var p = 2;

do {
  // шаг 3
  for (i = 2 * p; i < 100; i += p) {
    arr[i] = false;
  }

  // шаг 4
  for (i = p + 1; i < 100; i++) {
    if (arr[i]) break;
  }

  p = i;
} while (p * p < 100); // шаг 5

// шаг 6 (готово)
// посчитать сумму
var sum = 0;
for (i = 0; i < arr.length; i++) {
  if (arr[i]) {
    sum += i;
  }
}

alert( sum );


/*Бине
function fibBinet(n){
var f=(1+Math.sqrt(5))/2;
var F=Math.pow(f,n)/Math.sqrt(5);
return Math.round(F);
}*/

/*var f=function fib(n){
return  n>2 ? fib(n-1)+fib(n-2):1;
}
function fib(n){
}*/

/*function fib(n){
var a=1,b=1;
for(var i=3;i<=n;i++){
var c=a+b;
a=b;b=c;

}
return b;
}*/
