function find(arr, searchValue) {
    var temp = arr.filter(function (val) {
        return val === searchValue;
    });    
    if (temp.length >= 1) {
        return temp
    } else {
        return undefined
    }
}

find([1, 2, 3, 4, 5], 3);

function someOwn(array, callback) {
    for(var i = 0; i < 0; i++){        
        if(callback(array[i])){
            return true
        }
    }
    return false;
}