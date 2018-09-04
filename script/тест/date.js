function formatDate(date){
var now=new Date();
var diff=now-date;
if(diff<1000) return 'только что';
if(diff<60000) return Math.round(diff/1000)+ ' сек. назад';
if(diff<60*60*1000) return Math.round(diff/60000)+ ' мин. назад';
return formatDate1(date);
}


function formatDate1(date){
var d= date.getDate();
if (d<10) {d='0'+d;
}

var m=date.getMonth()+1
if (m<10) {m='0'+m;
}
var y=''+ date.getFullYear();
y=y.slice(2);
var h=date.getHours();
if (h<10){h='0'+h;}
var mi=date.getMinutes();
if (mi<10){mi='0'+mi;}
return d+'.'+ m +'.'+ y + ' '+h+':'+mi;
}
/*Вариант с массивом
 var d = date;
  d = [
    '0' + d.getDate(),
    '0' + (d.getMonth() + 1),
    '' + d.getFullYear(),
    '0' + d.getHours(),
    '0' + d.getMinutes()
  ];

  for (var i = 0; i < d.length; i++) {
    d[i] = d[i].slice(-2);
  }

  return d.slice(0, 3).join('.') + ' ' + d.slice(3).join(':');*/