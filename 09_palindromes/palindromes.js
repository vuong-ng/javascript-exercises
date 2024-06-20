function isalnum(s, i){
    n = s.charCodeAt(i);
    if ((n > 47 && n < 58) || (n > 96 && n < 123)) {
        return true;
    }
    else {
        return false;
    }
}
const palindromes = function (s) {
    s = s.toLowerCase();
    var l = 0;
    var r = s.length;
    while (l < r){
        while (l < r && !isalnum(s, l)){
            l += 1;
        }
        while (l < r && !isalnum(s, r)){
            r -= 1;
        }
        if (s[l] != s[r]){
            return false;
        }
        l+=1;
        r-=1;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
