//Find how many duplicate elements in array.......

var arr =[1,1,1,2,3,4,6,4];
var b=0, value=0,a=0;

for(var i=0;i<arr.length;i++)
{
    
    for(var j=i+1;j<arr.length-1;j++)
    {
    
      if (arr[i]===arr[j])
     {
      
       a++; 
     }
     
    }
    
}
console.log("The duplicate element is:",a);
