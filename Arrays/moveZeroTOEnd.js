let arr = [1, 0, 2, 0, 0, 3, 4];
let j = 0;

for(let i=0; i<arr.length; i++){
    
    if(arr[i] != 0){
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      j++
    }
    // console.log(arr[i])
}
console.log(arr)