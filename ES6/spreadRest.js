function joinArrays(...arrays) {    
    let reduced = [];
    arrays.forEach(array => reduced.push(...array));
    return reduced
}
// console.log(joinArrays([1, 2, 3], [4, 5, 6], [7, 8, 9]))

function sumEvenArgs(...numbers) {
    let sum = 0;
    numbers.forEach(number => {
        if(number % 2 === 0){
            sum += number
        }
    })
    return sum
}
// console.log(sumEvenArgs(1, 2))

function flip(fn, thisArg, ...restArguments) {
    return function(...innerArguments){
        fn.apply(thisArg)
    }
}

