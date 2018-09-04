function sumArgs() {
  arguments.reduce=[].reduce;
return arguments.reduce(function(a, b) {
    return a + b;
  });
}

alert( sumArgs(1, 2, 3) );







/*function sum(a) {

  var currentSum = a;

  function f(b) {
    currentSum += b;
    return f;
  }

  f.toString = function() {
    return currentSum;
  };

  return f;
}
alert( sum(1)(2) );
alert( sum(5)(-1) );
alert(sum(0)(1)(2)(3)(4)(5));*/