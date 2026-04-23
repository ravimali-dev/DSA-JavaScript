//Question :Find duplicate element

let arr = [1,1,2,2,3,3];

let count = 0;
for(let i = 0; i < arr.length; i++){

    let k = arr[i];
    if(k != arr[i]){
        arr[i] = arr[k];
        k++
    }

}
console.log(arr,k)