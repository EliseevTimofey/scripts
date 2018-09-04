function sum(){
var summ=0;



for (var i=0;i<arguments.length;i++){
summ+=arguments[i];
}
alert (summ);
}

sum();
sum(1);
sum(1, 2);
sum(1, 2, 3);
sum(1, 2, 3, 4);