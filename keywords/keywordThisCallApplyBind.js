var person = {
    firstName: "Ellie",
    sayHi: function () {
        return "Hi " + this.firstName;
    },
    determineContext: function () {
        return this === person
    }
}

// console.log(person.sayHi())
// console.log(person.determineContext())

var person2 = {
    firstName: "Colt",
    sayHi: function () {
        return "Hi " + this.firstName;
    },
    determineContext: function () {
        return this === person2
    },
    dog: {
        sayHello: function() {
            return "Hello " + this.firstName;
        },
        determineContext: function () {
            return this === person2;
        }
    }
} 

// --- KEYWORD THIS --- 
// console.log(person2.sayHi())
// console.log(person2.determineContext())

// --- KEYWORD CALL ----
// console.log(person2.dog.sayHello())
// console.log(person2.dog.sayHello.call(person2))
// console.log(person2.dog.determineContext())
// console.log(person2.dog.determineContext.call(person2))

const apiCalls = {
    getUsers: function(){
        return "Fetching " + this.name; 
    },
    postUser: function(){
        return "Creating " + this.route;
    },
    updateUser: function(){
        return "Updating " + this.userName;
    }    
}

const User1 = {
    name: "Carlos",
    route: "/user/1234",
    userName: "cmoreno"
}
const User2 = {
    name: "Ellie",
    route: "/user/4532",
    userName: "elli-m"
}
const User3 = {
    name: "Tim",
    route: "/user/9812",
    userName: "00tim"
}

function sumEvenArguments() {
    var numbers = [].slice.call(arguments);
    var total = 0;
    var even = numbers.filter(number => number % 2 === 0)
    even.forEach(number => {
        total += number
    });
    return total
}

// console.log(sumEvenArguments(2, 4, 5, 1, 5, 3, 6))

// console.log(apiCalls.getUsers.call(User1))
// console.log(apiCalls.getUsers.call(User2))
// console.log(apiCalls.getUsers.call(User3))
// console.log(apiCalls.postUser.call(User1))
// console.log(apiCalls.postUser.call(User2))
// console.log(apiCalls.postUser.call(User3))
// console.log(apiCalls.updateUser.call(User1))
// console.log(apiCalls.updateUser.call(User2))
// console.log(apiCalls.updateUser.call(User3))

// --- KEYWORD APPLY ---
var nums = [5,4,2,2];
// console.log(Math.max(nums))
// console.log(Math.max.apply(this, nums))

function sumValues(a,b,c){
    return a+b+c;
} 

var values = [1,1,1];
// console.log(sumValues(values))
// console.log(sumValues.apply(this,values))

// --- KEYWORD BIND ---
function addNumbers(a,b,c,d){
    return this.name + " calculated " + (a+b+c+d);
}

var user1Calc = addNumbers.bind(User1, 1,1,1,1);
var user2Calc = addNumbers.bind(User2);
var user3Calc = addNumbers.bind(User3, 1111);
// console.log(user1Calc())
// console.log(user2Calc(1,1,1,1))
// console.log(user3Calc(1,1,1))

var colt = {
    firstName: "Colt",
    sayHi: function(){
        setTimeout(function() {
            console.log("Hi " + this.firstName);
        }.bind(this), 3000);
    }
};

// console.log(colt.sayHi());

function add(a, b) {
    return a + b
}

function invokeMax(fn, num) {
    var counter = 0;
    return function(){
        if (counter >= num) {
            return "Maxed Out!"
        }
        counter ++    
        return fn.apply(this, arguments)
    }
}

var addition = invokeMax(add, 3);
// console.log(addition(2,2))
// console.log(addition(2,2))
// console.log(addition(2,2))
// console.log(addition(2,2))

function once(fn, thisArg) {
    var done = false;    
    return function(){
        if(!done){            
            done = true;
            return fn.apply(thisArg, arguments)
        }
    }
}

function add(a,b) {
    return a+b;
}

var addOncce = once(add, this)
console.log(addOncce(2,2))
console.log(addOncce(2,2))
console.log(addOncce(2,2))

