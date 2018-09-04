function applyAll(func, arg1, arg2){
// var args = [].slice.call(arguments);
//args=args.slice(1);
return func.apply(null,[].slice.call(arguments,1));
}
function sum() {
  return [].reduce.call(arguments, function(a, b) {
    return a + b;
  });
}

function mul() {
  return [].reduce.call(arguments, function(a, b) {
    return a * b;
  });
}
alert( applyAll(sum, 1, 2, 3) ); // 6
alert( applyAll(mul, 2, 3, 4) ); // 24
alert( applyAll(Math.max, 2, -2, 3) ); // 3
alert( applyAll(Math.min, 2, -2, 3) ); // -2




/*function Article() {
  this.created = new Date();
  Article.count++;
 Article.last = this.created;
}
 Article.count=0;
 Article.showStats=function(){
alert('Всего: '+ Article.count+', Последняя: '+this.last);
}*/
