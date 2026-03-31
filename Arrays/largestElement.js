//Question 2: Largest Element

let arr = [10, 4, 25, 8, 16];
let largestElement = 0;

for(let i=0; i<arr.length; i++){
    if(arr[i] > largestElement){
        largestElement = arr[i];
    }
}
console.log(`largest Elementof array ${largestElement}`)