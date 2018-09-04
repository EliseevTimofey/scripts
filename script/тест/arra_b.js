function filterRange(arr, a, b){
var arr,a,b,narr=[];
for (var i=0;i<arr.length;i++){
if(arr[i]>=a && arr[i]<=b){
narr.push(arr[i]);
}
}
return narr;
}