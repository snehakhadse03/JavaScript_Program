// Find Second Largest Number in array...........

const arr =[0,11,5,2,10,3];
let first_largest = 0,second_largest = 0;
for( i=0;i<arr.length;i++){
    if(arr[i] > first_largest){
        second_largest = first_largest;
        first_largest = arr[i];
    }
    else if(arr[i]>second_largest && arr[i]<first_largest){
        second_largest = arr[i];
    }
}

console.log("The Second Largest Element in Arrar: ",second_largest);
