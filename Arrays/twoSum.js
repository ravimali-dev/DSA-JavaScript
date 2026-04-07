//Input: nums = [2,7,11,15], target = 9
//Output: [0,1]

let nums = [2,7,11,15];
let target = 9;
let left = 0;
let right = nums.length;

while(left < right){
    if(nums[left] + nums[right] == target ){
        console.log(left, right);
        break;
    }
    left++;
    right--
}
