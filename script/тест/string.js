function truncate(str, maxlength){
var str;
var maxlength;
var a=str.length;
if(a>maxlength){
return str=str.slice(0,maxlength-2) +"..."}
return str;
}