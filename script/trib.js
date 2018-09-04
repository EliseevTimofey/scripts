 var arr=[];
function tribonacci(signature,n){
 
 for  (var i=0;i<signature.length;i++){arr.push(signature[i]);
 }
 var a=arr[0],b=arr[1],c=arr[2]
for (var j=3;j<n;j++){
var d=a+b+c;
a=b;b=c;c=d;
arr.push(d)
}
return arr;
}
tribonacci([0.5,0.5,0.5],30);
alert (arr)

/*if(n<=3){
 for (var k=0;k<n;k++){
 arr1.push(signature[k]);
  }
 return arr1;

 }*/