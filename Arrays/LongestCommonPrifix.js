let strs = ["flower","flow","flight"];

for(let i=0; i<strs[0].length; i++){
   let ch = strs[0][i];
   for (let j = 1; j < strs.length; j++) {
        if (strs[j][i] !== ch) {
            console.log(strs[0].slice(0, i)) 
        }
    }
    
}