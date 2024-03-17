const arr =[];

class Circle {
  // constructor(radius){
  //     this.radius = radius;
  // }
  constructor(radius, color) {
    if (arguments.length === 1) {
      this.radius = radius;
      this.color = undefined;
      arr.push(this);
    } else if (arguments.length === 2) {
      this.radius = radius;
      this.color = color;
      arr.push(this);
    }
  }

  getRadius() {
    console.log(`Raduis of the circle is ${this.radius}`);
  }

  setRadius(radius) {
    this.radius = radius;
  }

  getColor() {
    if (this.color == undefined) {
      console.log(`Color hasn't been initialized`);
    } else {
      console.log(`Color of the circle is ${this.color}`);
    }
  }

  setColor(color) {
    this.color = color;
  }

  toString() {
    if (this.color == undefined) {
      console.log(`Circle: Radius ${this.radius}`);
    } else {
      console.log(`Circle: Radius:${this.radius} Color:${this.color}`);
    }
  }

  getArea() {
    console.log(`Area of the circle is ${Math.PI * this.radius * this.radius}`);
  }

  getCircumference() {
    console.log(`Circumference of the circle is ${2 * Math.PI * this.radius}`);
  }
}

var c1 = new Circle(10);
c1.getRadius();
c1.getColor();
c1.getArea();
c1.getCircumference();
c1.toString();
c1.setColor("Black");
c1.toString();

console.log(arr)
