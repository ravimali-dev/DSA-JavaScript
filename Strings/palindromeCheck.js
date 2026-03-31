//Question : Check palindrome string
let str = "ravi";
let reverseString = ""
for(let i=str.length-1; i>=0; i--){
     reverseString += str[i]
}
 if(str == reverseString){
    console.log("isPalindrome");
 }else{
    console.log("notPalindrome");
 }