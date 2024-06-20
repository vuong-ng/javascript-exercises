const add = function(n1, n2) {
  return n1 + n2;
	
};

const subtract = function(n1, n2) {
  return n1 - n2;
	
};

const sum = function(nums) {
  var res = 0;
  for (let i=0;i < nums.length; i++){
    res += nums[i];
  }
	return res;
};

const multiply = function(nums) {
  if (nums.length === 0){
    return 0;
  }
  res = 1;
  for (let i = 0; i < nums.length; i++){
    res *= nums[i];
  } return res;
};

const power = function(n1, n2) {
  return n1 ** n2;
};

const factorial = function(n) {
  var res = 1; 
  for (let i = 1; i <= n; i++){
    res *= i;
  }
  return res;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
