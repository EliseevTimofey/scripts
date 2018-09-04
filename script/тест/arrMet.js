var obj = {
  className: 'open menu'
}
function addClass(obj, cls){
var arr=obj['className'].split(' ');
if(arr[0]==undefined){arr.shift();}
if (!~arr.indexOf(cls)){
arr.push(cls);
obj['className']=arr.join(' ');
}

return obj['className'];
}

/*function addClass(obj, cls) {
  var classes = obj.className ? obj.className.split(' ') : [];

  for (var i = 0; i < classes.length; i++) {
    if (classes[i] == cls) return; // класс уже есть
  }

  classes.push(cls); // добавить

  obj.className = classes.join(' '); // и обновить свойство
}

var obj = {
  className: 'open menu'
};

addClass(obj, 'new');
addClass(obj, 'open');
addClass(obj, 'me');
alert(obj.className) // open menu new me
*/