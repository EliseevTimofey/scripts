function getSecondsLeft(){
var d=new Date();

var tomorrow = new Date(d.getFullYear(), d.getMonth(), d.getDate()+1);

  var left = tomorrow - d; // разница в миллисекундах
  return Math.round(left / 1000);
}

alert('to tomorrow '+getSecondsLeft()+ 'sec');






/*function getSecondsLeft(){
var d=new Date();
return 24*3600-(d.getHours()*3600 + d.getMinutes()*60+ d.getSeconds());
}*/
//alert('to tomorrow '+getSecondsLeft()+ 'sec');