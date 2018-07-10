
function specialMultiply(a, b) {
    var first = a;
    if (arguments.length < 2) {
        return function (number) {
            return first * number;
        };
    } else {
        return first * b;
    }
}

// console.log(specialMultiply(3,4))
// console.log(specialMultiply(3)(4))
// console.log(specialMultiply(3))

function guessingGame(amount) {
    var answer = Math.floor(Math.random() * 11);
    var guesses = 0;
    return function(guess) {
        if(guesses >= amount){
            return "Your time is done"
        } else {
            if(guess === answer){
                guesses++
                return "You got it!"
            } else if (guess > answer) {
                guesses++
                return "Your guess is too high!"
            } else {
                guesses++
                return "Your guess is too low"
            }
        }
    }
}

var game = guessingGame(5)

// console.log(game(2))
// console.log(game(4))
// console.log(game(6))
// console.log(game(7))
// console.log(game(8))