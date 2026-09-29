//complete this code
// Rectangle class
class Rectangle {

    constructor(width, height) {
        this._width = width;
        this._height = height;
    }

    // Getter for width
    get width() {
        return this._width;
    }

    // Getter for height
    get height() {
        return this._height;
    }

    // Calculate area
    getArea() {
        return this.width * this.height;
    }
}


// Square inherits from Rectangle
class Square extends Rectangle {

    constructor(side) {
        super(side, side);
    }

    // Calculate perimeter
    getPerimeter() {
        return this.width * 4;
    }
}


// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;