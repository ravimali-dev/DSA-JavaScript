//Question : Find smallest element

let arr =  [3, 7, 2, 9, 5]

let smallest = arr[0];
for(let i=0; i<arr.length; i++){
    if(arr[i]<smallest){
        smallest = arr[i]
    }
}

console.log(smallest);