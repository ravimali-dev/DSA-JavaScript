let arr = [9, 5, 1, 4, 3];
for(let i=1; i<arr.length; i++){
    let j = i;
    
    while(j > 0 && arr[j] < arr[j-1] ){
        let temp = arr[j];
        arr[j] = arr[j-1];
        arr[j-1] = temp;
        j--
    }
}
console.log(arr)

// for (i = 1; i < n; i++) {
//   key = arr[i];
//   j = i - 1;
//   while (j >= 0 && arr[j] > key) {
//     arr[j+1] = arr[j];  // shift right, swap nahi
//     j--;
//   }
//   arr[j+1] = key;  // key ko sahi jagah rakho
// }
