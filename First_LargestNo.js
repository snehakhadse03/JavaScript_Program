// Find the Largest Number in array..............

const arr =[1,5,11,2,3,9];

for(i=1; i < arr.length; i++){

if(arr[0]<arr[i]){
    arr[0]=arr[i]
    
    }
 }

console.log("The First Largest Element in Array :",arr[0]);
