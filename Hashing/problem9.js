let str1 = "efewffe";
let str2 = "dcsvesv";
let anagram = true;
let myMap = new Map();

if(str1.length !== str2.length){
    anagram = false;
} else {
    for(let i=0; i<str1.length; i++){
        if(myMap.has(str1[i])){
            let oldValue = myMap.get(str1[i]);
            myMap.set(str1[i], oldValue + 1);
        } else {
            myMap.set(str1[i], 1);
        }
    }

    for(let i=0; i<str2.length; i++){
        if(!myMap.has(str2[i])){
            anagram = false;
        } else {
            let oldValue = myMap.get(str2[i]);
            myMap.set(str2[i], oldValue - 1);

            if(myMap.get(str2[i]) < 0){
                anagram = false;
            }
        }
    }
}

console.log(anagram);