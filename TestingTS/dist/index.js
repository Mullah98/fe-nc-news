"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Basic Types
let character = 'John Snow';
let characters = ['Baratheon', 'Starks', 'Targaereyan'];
let multi = [true, true, 'Hi', 94309];
let phoneNum = 9239239;
//Enums
var Directions;
(function (Directions) {
    Directions[Directions["Up"] = 0] = "Up";
    Directions[Directions["Right"] = 1] = "Right";
    Directions[Directions["Down"] = 2] = "Down";
    Directions[Directions["Left"] = 3] = "Left";
})(Directions || (Directions = {}));
const footballer = {
    name: 'Jude Bellingham',
    shirt: 5,
    baller: true
};
//Functions
function addNumber(x, y) {
    return x + y;
}
function greetings(name, age) {
    return `Hi, my name is ${name} and I am ${age} years old`;
}
const pizza = {
    slices: 8,
    inch: 12
};
const CarYear = 2024;
const CarMake = 'Porsche';
const CarModel = 'GT3RS';
const car = {
    year: CarYear,
    make: CarMake,
    model: CarModel
};
//Classes
class Baller {
    constructor(shirtNum, lName) {
        this.shirtNum = shirtNum;
        this.lName = lName;
    }
}
const messi = new Baller(10, 'Lionel');
const ronaldo = new Baller(7, 'Cristiano');
console.log(messi, ronaldo);
