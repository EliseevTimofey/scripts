﻿function f(x) {
  return Math.random() * x; // random для удобства тестирования
}
function makeCaching(f){
 var cache = {};

  return function(x) {
    if (!(x in cache)) {
      cache[x] = f.call(this, x);
    }
    return cache[x];
  };

}
f = makeCaching(f);







/*function work(a, b) {
  alert( a + b ); // work - произвольная функция
}

function makeLogging(f, log) {

  function wrapper() {
      log.push([].slice.call(arguments));
      return f.apply(this, arguments);
    }

  return wrapper;
}

var log = [];
work = makeLogging(work, log);

work(1, 2); // 3
work(4, 5); // 9

for (var i = 0; i < log.length; i++) {
  var args = log[i]; // массив из аргументов i-го вызова
  alert( 'Лог:' + args.join() ); // "Лог:1,2", "Лог:4,5"
}
function work(a) {
  /*... // work - произвольная функция, один аргумент
}

function makeLogging(f, log) {

  function wrapper(a) {
      log.push(a);
      return f.call(this, a);
    }

  return wrapper;
}

var log = [];
work = makeLogging(work, log);

work(1); // 1
work(5); // 5

for (var i = 0; i < log.length; i++) {
  alert( 'Лог:' + log[i] ); // "Лог:1", затем "Лог:5"
}*/