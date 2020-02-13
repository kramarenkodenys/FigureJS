const Shape = require('../shape');

class Triangle extends Shape {
    constructor(args) {
        super();
        this.args = args;
        this.welcome = () => Triangle.name;
        this.allInfo = this.allInfo();
    }

    square() {
        const p = this.perimeter()*0.5;
        return (Math.sqrt(p * (p - this.args[0]) * (p - this.args[1]) * (p - this.args[2]))).toFixed(3)
    };

}

module.exports = Triangle;
