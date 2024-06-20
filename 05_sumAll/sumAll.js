const sumAll = function(n1, n2) {
    
    var res = 0;
    if (n1 < 0 || n2 < 0 || arguments.length != 2 || typeof n1 != "number" || typeof n2 != "number"){
        return "ERROR";
    }
    if (n1 > n2){
        var temp = n2;
        n2 = n1;
        n1 = temp;
    }
    for (i=n1; i <= n2; i++){
        res += i;
    }
    return res

};

// Do not edit below this line
module.exports = sumAll;
