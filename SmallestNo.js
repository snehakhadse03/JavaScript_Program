//  Find Smallest Number in array............
 
const arr =[0,11,5,2,10,3];
let a=0;
for (i=0; i<arr.length; ++i){
   for (j=i+1; j<arr.length; ++j){
      if (arr[i] < arr[j]){
         a = arr[i];
         arr[i] = arr[j];
         arr[j] = a;
      }
   }
}
console.log("Smallest Number in Array :",a);