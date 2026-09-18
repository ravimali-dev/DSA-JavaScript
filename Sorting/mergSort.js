// let arr = [8, 3, 5, 4, 7, 6, 1, 2];

// function mergeSort(arr) {

//     // Base case
//     if (arr.length <= 1) {
//         return arr;
//     }

//     // Divide
//     let mid = Math.floor(arr.length / 2);

//     let left = arr.slice(0, mid);
//     let right = arr.slice(mid);

//     // Sort left and right
//     left = mergeSort(left);
//     right = mergeSort(right);

//     // Merge
//     return merge(left, right);
// }


// function merge(left, right) {

//     let i = 0;
//     let j = 0;
//     let result = [];

//     // Compare both arrays
//     while (i < left.length && j < right.length) {

//         if (left[i] < right[j]) {
//             result.push(left[i]);
//             i++;
//         } else {
//             result.push(right[j]);
//             j++;
//         }
//     }

//     // If left has remaining elements
//     while (i < left.length) {
//         result.push(left[i]);
//         i++;
//     }

//     // If right has remaining elements
//     while (j < right.length) {
//         result.push(right[j]);
//         j++;
//     }

//     return result;
// }


// let sortedArray = mergeSort(arr);

// console.log(sortedArray);

let arr = [8, 3, 5, 4, 7, 6, 1, 2];
let low = 0;
let high = arr.length-1
function mergeSort(arr, low, high ){
    if(low >= high){
        return
    }
    let mid = Math.floor((low + high) / 2);
    mergeSort(arr, low, mid)
    mergeSort(arr,  mid+1, high)
    merge(arr, low, mid, high)
}

function merge(arr, low, mid, high){
    let temp = [];
    let i = low;
    let j = mid + 1;
    
    while(i <= mid && j <= high){
        if(arr[i] < arr[j]){
            temp.push(arr[i]);
            i++
        }else{
            temp.push(arr[j]);
            j++
        }
    }
    while (i <= mid) {
      temp.push(arr[i]);
            i++
 }
 while (j <= high) {
      temp.push(arr[j]);
            j++
 }
 for(let k=0; k<temp.length; k++){
    arr[low + k] = temp[k]
 }
}

mergeSort(arr, low, high)
console.log(arr)