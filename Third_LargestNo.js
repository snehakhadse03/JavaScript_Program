// Find Third Largest Number in array...........

const arr =[11,15,1,2,10,3];
let first_largest = 0,second_largest = 0,third_largest =0;;
for( i=0;i<arr.length;i++){
    if(arr[i] > first_largest){
        second_largest = first_largest;
        first_largest = arr[i];
    }
    else if(arr[i] > second_largest){
        third_largest = second_largest;
        second_largest = arr[i];
    }
    else if(arr[i]>third_largest && arr[i]<second_largest){
        third_largest = arr[i];
    }
}


console.log("The Third Largest Element in Array: ",third_largest,second_largest, first_largest)
