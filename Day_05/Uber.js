//write a class to calculate the Uber price.
var arrObj = [];

class UberPrice {
  static pricePerKm = 10;

  constructor(distance) {
    this.distance = distance;
    arrObj.push(this);
    console.log(`Total objects: ${arrObj.length}`);
  }

  getFare() {
    console.log("Calculating total fare for the ride");
    return `The total price is ${this.distance * UberPrice.pricePerKm}`;
  }
}

const trip1 = new UberPrice(20);
console.log(trip1.getFare());

const trip2 = new UberPrice(50);
console.log(trip2.getFare());

console.log(arrObj);
