const Shape = require('../shape');

class Rectangle extends Shape {
    constructor(args) {
        super();
        this.args = args;
        this.welcome = () => Rectangle.name;
        this.allInfo = this.allInfo();
    };

    square() {
        return (this.args[0] * this.args[1]).toFixed(3)
    };
}

module.exports = Rectangle;
