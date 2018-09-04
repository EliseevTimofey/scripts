function removeClass(obj, cls){
var arr=obj['className'].split(' ');
var n=arr.length;
for(var i=0;i<n;i++){
if(arr[i]==cls){
arr.splice(i,1);
i=i-1;
}
}
return obj['className']=arr.join(' ');
}
