const Shape = require('../shape');

class Circle extends Shape {
    constructor(args) {
        super();
        this.welcome = () => Circle.name;
        this.radius = args;
    };

    get circumference(){
        return (2 * Math.PI * this.radius).toFixed(3)
    };

    get square(){
        return (Math.PI * this.radius**2).toFixed(3)
    };

    get allInfo() {
        return {
            figure: this.welcome(),
            circumference: this.circumference,
            square: this.square
        }
    }
}

module.exports = Circle;
