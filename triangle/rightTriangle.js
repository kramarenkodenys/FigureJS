const Triangle = require('./triangle');

class RightTriangle extends Triangle {
    constructor(args) {
        super(args);
        this.welcome = () => RightTriangle.name;
    }
    allInfo() {
        let triangleInfo = super.allInfo();
        triangleInfo.figure = RightTriangle.name;
        return triangleInfo;
    }
}

module.exports = RightTriangle;
