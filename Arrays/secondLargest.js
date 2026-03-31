//Question : Find second largest element in a array

let arr = [3, 1, 5, 2, 4];

let largest = -Infinity;
let secLargest = -Infinity;

for(let i = 0; i < arr.length; i++){
  if(arr[i] > largest){
    secLargest = largest;  
    largest = arr[i];      
  } else if(arr[i] > secLargest && arr[i] !== largest){
    secLargest = arr[i];  
  }
}

console.log("Largest:", largest);       
console.log("Second Largest:", secLargest);