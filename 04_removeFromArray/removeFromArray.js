const removeFromArray = function(nums, ...theArgs) {
    res = []
    for (i=0; i < nums.length; i++){
        if (!theArgs.includes(nums[i])){
            res.push(nums[i]);
        }
    }
    return res
};

// Do not edit below this line
module.exports = removeFromArray;
