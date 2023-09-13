/* Create a class named Circle with attributes xPos, yPos and radius. Add a method named move(xOffset, yOffset) 
that will adjust the position of the circle. Add a getter accessor named surface that will return the surface of the circle.
Test its method and accessors by modifying the values and checking if everything is consistent. */

class Circle {
  constructor(xPos, yPos, radius) {
    this.xPos = xPos;
    this.yPos = yPos;
    this.radius = radius;
  }

  move(xOffset, yOffset) {
    this.xPos += xOffset;
    this.yPos += yOffset;
  }

  get surface() {
    return Math.PI * this.radius * this.radius;
  }
}

const myCircle = new Circle(1, 1, 8);

console.log(`Initial Position: x=${myCircle.xPos}, y=${myCircle.yPos}`);
console.log(`Initial Radius: ${myCircle.radius}`);
console.log(`Initial Surface Area: ${myCircle.surface}`);

myCircle.move(2, 8);

console.log(`New Position: x=${myCircle.xPos}, y=${myCircle.yPos}`);
console.log(`Updated Surface Area: ${myCircle.surface}`);
