"use strict";

// --- KEYWORD THIS
function House(bedrooms, baths, sqf) {
    this.bedrooms = bedrooms;
    this.baths = baths;
    this.sqf = sqf;
}

var coltHouse = new House(3, 2, 1500);
// console.log(coltHouse)

function Dog(name, age){
    this.name = name;
    this.age = age;
    this.bark = function () {
        console.log(this.name + ' just barked!');
    }
}

var fido = new Dog('Fido', 1);
var rusty = new Dog('Rusty', 3);

fido.bark()
rusty.bark()
// console.log(fido)

