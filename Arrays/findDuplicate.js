//Question :Find duplicate element

let arr = [2,3,4,4,6,5,2,5];
let dublicate = []
for(let i = 0; i < arr.length; i++){

    for(let j = i+1; j < arr.length; j++){

        if(arr[i] == arr[j]){
            dublicate.push(arr[j])
        }

    }

}
console.log(dublicate)