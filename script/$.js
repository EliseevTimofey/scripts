var menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

function multiplyNumeric(menu){
for(var pos in menu){
if(isNumeric(menu[pos])){
menu[pos]*=2;

}
}
}
multiplyNumeric(menu);
alert(menu. width);
alert(menu. height);
alert(menu.title );

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
}