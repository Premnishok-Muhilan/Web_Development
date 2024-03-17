//Write a “person” class to hold all the details.
var personObjects = [];
var totalObjects = 0;

class Person {
  constructor(name, gender, age) {
    console.log("constructor has been called!");
    this.name = name;
    this.gender = gender;
    this.age = age;
    personObjects.push(this);
    totalObjects += 1
  }
}

const p1 = new Person("a", "Male", 24);
console.log("p1:", p1);
console.log("p1.name:", p1.name);
console.log("p1.gender:", p1.gender);
console.log("p1.age:", p1.age);

console.log("\n");

const p2 = new Person("c", "Female", 32);
console.log("p2:", p2);
console.log("p2.name:", p2.name);
console.log("p2.gender:", p2.gender);
console.log("p2.age:", p2.age);

console.log(personObjects);
console.log("Total objects in personObjects array:",totalObjects);