var a=prompt('Username','');

if(a=='admin') {
var b=prompt('Введите Пароль','');
if(b==322){
alert('welcome!');
} else if (b==null){
alert('Вход отменен');
} else {
alert('wrong password!')
}

}
else if (a==null){
alert('Вход отменен');
} else {
alert('Unkmown user');
}
