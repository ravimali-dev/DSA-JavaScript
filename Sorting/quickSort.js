function partition(arr, low, high) {
    let pivot = arr[high];
    let i = low;
    for (let j = low; j < high; j++) {
        if (arr[j] < pivot) {
            let temp = arr[j];
            arr[j] = arr[i];
            arr[i] = temp;
            i++;
        }
    }
    let temp = arr[i];
    arr[i] = arr[high];
    arr[high] = temp;
    return i;
}

function quickSort(arr, low, high) {
    console.log("call: low =", low, "high =", high);
    if (low >= high) return;
    let p = partition(arr, low, high);
    quickSort(arr, low, p - 1);
    quickSort(arr, p + 1, high);
}

let arr = [5, 6, 2, 3, 9, 4];
quickSort(arr, 0, arr.length - 1);
console.log(arr);