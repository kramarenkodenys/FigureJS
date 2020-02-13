class Shape {
    constructor() {
        this.welcome = () => Shape.name;
    };

    perimeter() {
        return (this.args.reduce((previous,current)=> previous + current, 0)).toFixed(3);
    };

    allInfo() {
        return {
            figure: this.welcome(),
            perimeter: this.perimeter(),
            square: this.square()
        }
    };
}

module.exports = Shape;
