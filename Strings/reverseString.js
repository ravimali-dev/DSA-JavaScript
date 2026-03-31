//Question : Reverse string
let str = "Hellow World";
let reverseString = ""
for(let i=str.length-1; i>=0; i--){
    reverseString += str[i]
}
console.log(reverseString);