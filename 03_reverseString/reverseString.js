const reverseString = function(s) {
    if (s.length <=1 ){
        return s
    }
    return reverseString(s.slice(1, s.length)) + s[0];


};

// Do not edit below this line
module.exports = reverseString;
