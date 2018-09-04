/*function getMaxSubSum(arr){
var maxSum=0;
for(i=0;i<arr.length;i++){
   var sum=0;
  for(var j=i;j<arr.length;j++){ 
sum+=arr[j];
maxSum = Math.max(maxSum, sum);
}
}
return maxSum;
}*/
function getMaxSubSum(arr){
var maxSum=0,sum=0;
for(i=0;i<arr.length;i++){
 sum+=arr[i];
if (sum<0){
sum=0}
maxSum = Math.max(maxSum, sum);
}
return maxSum;
}