//Question 1: Array Sum

// let arr = [2, 5, 7, 1];
// let sum = 0;
// for(let i=0; i<arr.length; i++){
//     sum += arr[i]
// }
// console.log(`sum of array ${sum}`)

//Question 2: Largest Element

// let arr = [10, 4, 25, 8, 16];
// let largestElement = 0;

// for(let i=0; i<arr.length; i++){
//     if(arr[i] > largestElement){
//         largestElement = arr[i];
//     }
// }
// console.log(`largest Elementof array ${largestElement}`)

//Question 3: Count Even and Odd

// let arr = [1,2,3,4,5,6];
// let even = 0;
// let odd = 0;
// for(let i=0; i<arr.length; i++){
//     if(arr[i]%2==0){
//         even++;
//     }else{
//         odd++
//     }
// }
// console.log(`total even number is ${even},total odd number is ${odd}`);

//Question 4: Linear Search

// let arr = [5, 8, 2, 9, 1]
// let target = 10;
// let isTarget = "Not Found";

// for(let i=0; i<arr.length; i++){
//      if(arr[i] == target){
//         isTarget = "Found";
//      }
// }
// console.log(isTarget);


//Question 5: Reverse Array

let arr = [1,2,3,4,5];
let reversArr = [ ];
for(let i=arr.length-1; i>=0; i--){
    reversArr.push(arr[i])
}
console.log(reversArr)