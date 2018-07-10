function Car(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
    this.numberWheels = 4;
}

function Motorcycle(make, model, year) {
    Car.call(this, make, model, year)
    this.numberWheels = 2;
}

function Truck(make, model, year) {
    Car.apply(this, [make, model, year])
    this.numberWheels = 6;
}

function Bicycle(make, model, year) {
    Car.apply(this, arguments)
    this.numberWheels = 2;
}

var audiA4 = new Car('audi', 'A4', 2018);
var bmwKnigth = new Motorcycle('bmw', 'Knight 243', 2019);
var jhonsonKf = new Truck('jhonson', 'control-Z2', 2017); 
var benottoMount = new Bicycle('benotto', 'mount 12', 2028);
// console.log(audiA4)
// console.log(bmwKnigth)
// console.log(jhonsonKf)
// console.log(benottoMount)

function Person(firstName, lastName, favoriteColor, favoriteNumber) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.favoriteColor = favoriteColor;
    this.favoriteNumber = favoriteNumber;
    this.multiplyFavoriteNumber = function(number){
        return number * this.favoriteNumber
    }
}

var Naomi = new Person('Naomi', 'Escalante', 'blue', 3);

console.log(Naomi.multiplyFavoriteNumber(5))