//Question 5: Reverse Array

let arr = [1,2,3,4,5];
let reversArr = [ ];
for(let i=arr.length-1; i>=0; i--){
    reversArr.push(arr[i])
}
console.log(reversArr)