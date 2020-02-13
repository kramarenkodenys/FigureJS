const Triangle = require('./triangle');

class IsoscelesTriangle extends Triangle {
    constructor(args) {
        super(args);
        this.welcome = () => IsoscelesTriangle.name;
    }
    allInfo() {
        let triangleInfo = super.allInfo();
        triangleInfo.figure = IsoscelesTriangle.name;
        return triangleInfo;
    }
}

module.exports = IsoscelesTriangle;
