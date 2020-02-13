const Rectangle = require('./rectangle');

class Square extends Rectangle {
    constructor(args) {
        super(args);
        this.welcome = () => Square.name;
    }
    allInfo() {
        let squareInfo = super.allInfo();
        squareInfo.figure = Square.name;
        return squareInfo;
    }
}

module.exports = Square;
