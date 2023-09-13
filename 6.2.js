/*Create a class name Rectangle with attributes topLeftXPos, topLeftYPos, width and length. 
Add a method named collides(otherRectangle) that returns true only if the current rectangle collides with otherRectangle.
Test the collides(otherRectangle) method by using multiple test cases.*/

class Rectangle {
  constructor(topLeftXPos, topLeftYPos, width, length) {
    this.topLeftXPos = topLeftXPos;
    this.topLeftYPos = topLeftYPos;
    this.width = width;
    this.length = length;
  }

  collides(otherRectangle) {
 
    const thisTopLeft = {
      x: this.topLeftXPos,
      y: this.topLeftYPos,
    };
    const thisTopRight = {
      x: this.topLeftXPos + this.width,
      y: this.topLeftYPos,
    };
    const thisBottomLeft = {
      x: this.topLeftXPos,
      y: this.topLeftYPos + this.length,
    };
    const thisBottomRight = {
      x: this.topLeftXPos + this.width,
      y: this.topLeftYPos + this.length,
    };

    const otherTopLeft = {
      x: otherRectangle.topLeftXPos,
      y: otherRectangle.topLeftYPos,
    };
    const otherTopRight = {
      x: otherRectangle.topLeftXPos + otherRectangle.width,
      y: otherRectangle.topLeftYPos,
    };
    const otherBottomLeft = {
      x: otherRectangle.topLeftXPos,
      y: otherRectangle.topLeftYPos + otherRectangle.length,
    };
    const otherBottomRight = {
      x: otherRectangle.topLeftXPos + otherRectangle.width,
      y: otherRectangle.topLeftYPos + otherRectangle.length,
    };

    if (
      thisTopLeft.x < otherBottomRight.x &&
      thisTopRight.x > otherTopLeft.x &&
      thisTopLeft.y < otherBottomRight.y &&
      thisBottomLeft.y > otherTopLeft.y
    ) {
      return true;
    }

    return false;
  }
}

const rectangle1 = new Rectangle(0, 0, 4, 4);
const rectangle2 = new Rectangle(2, 2, 4, 4);
const rectangle3 = new Rectangle(5, 5, 2, 2);
const rectangle4 = new Rectangle(1, 1, 2, 2);

console.log(rectangle1.collides(rectangle2));
console.log(rectangle1.collides(rectangle3)); 
console.log(rectangle1.collides(rectangle4)); 
