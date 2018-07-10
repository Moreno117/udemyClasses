function hasNoDuplicates(arr){
    return arr.every(function(numb){
        return arr.indexOf(numb) === arr.lastIndexOf(numb);
    });
}

// console.log(hasNoDuplicates([2,1,4,5,7]))

function hasCertainKey(arr, key) {
    return arr.every(function(obj) {
        return obj[key] !== undefined
    });
}

var arr = [
    { title: "Instructor", first: 'Elie', last: "Schoppik" },
    { title: "Instructor", first: 'Tim', last: "Garcia", isCatOwner: true },
    { title: "Instructor", first: 'Matt', last: "Lane" },
    { title: "Instructor", first: 'Colt', last: "Steele", isCatOwner: true }
];

// console.log(hasCertainKey(arr, "title"))

function hasCertainValue(arr, key, value) {
    return arr.every(function(obj){
        return obj[key] === value
    });
};

var arr2 = [
    { title: "Instructor", first: 'Elie', last: "Schoppik", age:23 },
    { title: "Instructor", first: 'Tim', last: "Garcia", isCatOwner: true, age: 23 },
    { title: "Instructor", first: 'Matt', last: "Lane", age: 23 },
    { title: "Instructor", first: 'Colt', last: "Steele", isCatOwner: true, age: 23 }
];

console.log(hasCertainValue(arr2, 'age', 23))

function hasAZero(num) {
    return num.toString().split('').some(function (digit) {
        return Number(digit) === Number(0);
    });
}

// console.log(hasAZero(12334))