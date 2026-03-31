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

// let arr = [1,2,3,4,5];
// let reversArr = [ ];
// for(let i=arr.length-1; i>=0; i--){
//     reversArr.push(arr[i])
// }
// console.log(reversArr)

//Question 6: Find smallest element

// let arr =  [3, 7, 2, 9, 5]

// let smallest = arr[0];
// for(let i=0; i<arr.length; i++){
//     if(arr[i]<smallest){
//         smallest = arr[i]
//     }
// }

// console.log(smallest);


//Question 7: Find average of array

// let arr = [3, 7, 2, 9, 5];
// let sum = 0;
// for(let i=0; i<arr.length; i++){
//     sum += arr[i]
// }
// console.log(sum/arr.length)

//Question 8: Find second largest element

// let arr = [1,2,3,4,5];
// let largest = arr[0];
// let secLargest =arr[0];
// for(let i=0; i<arr.length; i++){
//     if(largest < arr[i]){
//         largest = arr[i]
//     }
// }
// for(let i=0; i<arr.length; i++){
//     if(arr[i] < largest && arr[i] > secLargest){
//         secLargest = arr[i]
//     }
// }
// console.log(secLargest); 

//Question 9: Check if array sorted hai ya nahi

// let arr = [1,2,3,4,5];
// let isSorted = true;
// for(let i=0; i<arr.length-1; i++){
//     if(arr[i] > arr[i+1]){
//         isSorted = false;
        
//     }
// }
// console.log(isSorted)

// //Qustion 10: Count positive and negative numbers

// let arr = [2,4,-5,-3,6];

// let posi = 0;
// let neg = 0;
// for(let i=0; i<arr.length; i++){
//     if(arr[i] > 0){
//         posi++;
//     }if (arr[i] < 0) {
//         neg++
//     }
// }
// console.log(posi, neg)

//Question 11:Find duplicate element

// let arr = [2,3,4,4,6,5,2,5];
// let dublicate = []
// for(let i = 0; i < arr.length; i++){

//     for(let j = i+1; j < arr.length; j++){

//         if(arr[i] == arr[j]){
//             dublicate.push(arr[j])
//         }

//     }

// }
// console.log(dublicate)

// let arr = [3, 1, 5, 2, 4];

// let largest = -Infinity;
// let secLargest = -Infinity;

// for(let i = 0; i < arr.length; i++){
//   if(arr[i] > largest){
//     secLargest = largest;  // step 1: purana largest → second
//     largest = arr[i];      // step 2: naya element → largest
//   } else if(arr[i] > secLargest && arr[i] !== largest){
//     secLargest = arr[i];   // sirf second update karo
//   }
// }

// console.log("Largest:", largest);       // 5
// console.log("Second Largest:", secLargest); // 4