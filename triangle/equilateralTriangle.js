const Triangle = require('./triangle');

class EquilateralTriangle extends Triangle {
    constructor(args) {
        super(args);
        this.welcome = () => EquilateralTriangle.name;
    }
    allInfo() {
        let triangleInfo = super.allInfo();
        triangleInfo.figure = EquilateralTriangle.name;
        return triangleInfo;
    }
}

module.exports = EquilateralTriangle;
