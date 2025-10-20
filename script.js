'use strict';

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;

  //   this.calcAge = function () {
  //     console.log();
  //   };
};

const jonas = new Person('jonas', 1991);

//create new objects from the constructor
const matilda = new Person('matilda', 1991);
const jack = new Person('Jack', 2001);
const andrew = new Person('andrew', 1998);
console.log(jonas, andrew, jack, matilda);

// behind the sceenes

//new {)is created
// function is called, this = {}
// {} linked to prototype
// function automatically return {}

// prototypes

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

Person.prototype.species = 'Homo Sapiens';

jonas.calcAge();
matilda.calcAge();

console.log(jonas.__proto__);

//object proto type
console.log(jonas.__proto__.__proto__);
console.log(jonas.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [2, 3, 4, 5, 5, 6, 5, 5, 6, 6, 6];
console.log(arr.__proto__);

///////////////////////////////////////
// Coding Challenge #1

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

const bmw = new Car('BMW', 120);
const mercedez = new Car('Mercedes', 95);

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`this ${this.make} is going at the speed of ${this.speed}KM/H`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`this ${this.make} is going at the speed of ${this.speed}KM/H`);
};

bmw.accelerate();
mercedez.brake();
