const Triangle = require('./triangle/triangle');
const RightTriangle = require('./triangle/rightTriangle');
const EquilateralTriangle = require('./triangle/equilateralTriangle');
const IsoscelesTriangle = require('./triangle/isoscelesTriangle');
const Rectangle = require('./rectangle/rectangle');
const Square = require('./rectangle/square');
const Rhombus = require('./rectangle/rhombus');
const Circle = require('./circle/circle');
const { rectangleSides,
        defineDiagonals,
        isSquare,
        isSidesEqual,
        triangleSides,
        isIsoscelesTriangle,
        isRightTriangle } = require('./helper');


function FigureFactory(...argsArray){
    this.args = argsArray;
//Triangle
    if (this.args.length === 3){
        const sidesArray = triangleSides(this.args);

        if (isSidesEqual(sidesArray)){
            return new EquilateralTriangle(sidesArray);

        } else if (isIsoscelesTriangle(sidesArray)){
            return new IsoscelesTriangle(sidesArray);

        } else if (isRightTriangle(sidesArray)){
            return new RightTriangle(sidesArray);

        } return new Triangle(sidesArray);
    }
//Rectangle
    else if (this.args.length === 4){
        const sidesArray = rectangleSides(this.args);
        if (isSidesEqual(sidesArray)){
           if (isSquare(this.args)) {
               return new Square(sidesArray)
           } return new Rhombus(sidesArray, defineDiagonals(this.args));
        } return new Rectangle(sidesArray)
    }
//Circle
    else if (this.args.length === 1){
        return new Circle(this.args);
    }
}


module.exports = FigureFactory;
