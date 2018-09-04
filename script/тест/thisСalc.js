//через функцию-конструктор
function Calculator(){
this.sum= function() {
    return this.a + this.b;
  },

  this.mul= function() {
    return this.a * this.b;
  },

  this.read= function() {
    this.a = +prompt('a?', 0);
    this.b = +prompt('b?', 0);
  }
}
/*var calculator = new Calculator();
calculator.read();

alert( "Сумма=" + calculator.sum() );
alert( "Произведение=" + calculator.mul() );*/




//через свойства обьекта
var calculator = {
read: function(){
 var a=prompt('Enter a',''),b=prompt('Enter b','');
 this.a=+a;
 this.b=+b;
},
sum:function(){
return this.a+this.b;
},
mul:function(){
return this.a*this.b ;
}
}

/*calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );*/