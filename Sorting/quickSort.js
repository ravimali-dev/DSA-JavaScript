function partition(arr, low, high) {
    let pivot = arr[high];          // har call mein naya pivot
    let i = low;                    // pehla chhota yahan baithega

    for (let j = low; j < high; j++) {
        if (arr[j] < pivot) {
            let temp = arr[j];
            arr[j] = arr[i];
            arr[i] = temp;
            i++;
        }
    }

    let temp = arr[i];              // pivot ko i pe baithao
    arr[i] = arr[high];
    arr[high] = temp;

    return i;                       // pivot ka index
}

function quickSort(arr, low, high) {
    if (low >= high) return;        // base case

    let p = partition(arr, low, high);
    quickSort(arr, low, p - 1);     // left
    quickSort(arr, p + 1, high);    // right
}

let arr = [5, 6, 2, 3, 9, 4];
quickSort(arr, 0, arr.length - 1);
console.log(arr);                   // [2, 3, 4, 5, 6, 9]