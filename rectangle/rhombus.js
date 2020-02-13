const Rectangle = require('./rectangle');
let diagonals;

class Rhombus extends Rectangle {
    constructor(...args) {
        const sides = args[0];
        diagonals = args[1];
        super(sides);
        this.welcome = () => Rhombus.name;
    }

    square(){
        return (diagonals[0]*diagonals[1]*0.5).toFixed(3)
    };

    allInfo() {
        let rhombusInfo = super.allInfo();
        rhombusInfo.figure = Rhombus.name;
        rhombusInfo.square = this.square();
        return rhombusInfo;
    }
}

module.exports = Rhombus;
