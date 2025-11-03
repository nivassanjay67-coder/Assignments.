class Shape {
  constructor(name) {
    this.name = name;
  }
  area() {
    console.log("Area calculation not defined for generic shape.");
  }
}
class Circle extends Shape {
  constructor(radius) {
    super("Circle"); 
    this.radius = radius;
  }
  area() {
    const areaValue = Math.PI * this.radius ** 2;
    console.log(`The area of the ${this.name} is ${areaValue.toFixed(2)} square units.`);
  }
}
const circle1 = new Circle(5);
circle1.area();