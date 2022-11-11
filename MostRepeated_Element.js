// Find the Most Repeated Element in array............

let myarr = [1,2,3,4,4,4,5,5,7];

let max=0, count=0, value, value_ans=0,tempmax=0;

for(let i=0; i < myarr.length; i++){

    let temp = myarr[i];
    count =1;

    for(let x=i; x < myarr.length -1; x++){

        if(temp===myarr[x+1]){
            count++;
        }
    }

    if(max < tempmax){
        max = tempmax;
        value = temp;
    }else if(max === tempmax){
        value_ans++;
    }

}
console.log("Count is: ", max);
console.log(" value is: ", value_ans);