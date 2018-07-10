function extractValue(arr, key) {
    return arr.reduce(function (accumulator, nextValue) {
        accumulator.push(nextValue[key])
        return accumulator
    }, []);
}

// // var arr = [{ name: 'Elie', age: 4, genre: 'male' }, { name: 'Tim', age: 4 }, { name: 'Matt', age: 34 }, { name: 'Colt', age: 34 }];
// console.log(extractValue(arr, 'age'))

function vowelCount(str) {
    var vowels = 'aeiou';
    return str.toLowerCase().split('').reduce(function(acc, next) {
        if(vowels.indexOf(next) !== -1){
            if(next in acc){
                acc[next]++
            } else {
                acc[next] = 1;
            }
        }
        return acc;
    }, {});
}

// console.log(vowelCount('I Am awesome and so are you'));

function addKeyValue(arr, key, value) {
    return arr.reduce(function(acc, next, index) {
        acc[index][key] = value
        return acc
    }, arr);
}

// var arr = [{ name: 'Elie' }, { name: 'Tim' }, { name: 'Matt' }, { name: 'Colt' }];
// console.log(addKeyValue(arr, 'title', 'Instructor'));

function partition(arr, callback) {
    return arr.reduce(function(acc, next){
        if(callback(next)){
            acc[0].push(next)
        } else {
            acc[1].push(next)
        }
        return acc
    },[[],[]])
}

var composition = {
    numbers: [1, 2, 3, 4, 5, 6, 7, 8],
    isEven: function (val) {
        return val % 2 === 0;
    },
    names: ['Elie', 'Colt', 'Tim', 'Matt'],
    isLongerThanThreeCharacters: function (val) {
        return val.length > 3;
    }
}


console.log(partition(composition.numbers, composition.isEven))
console.log(partition(composition.names, composition.isLongerThanThreeCharacters))
