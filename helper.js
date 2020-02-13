module.exports = {
    rectangleSides: rectangleSides,
    defineDiagonals: defineDiagonals,
    isSquare: isSquare,
    isSidesEqual: isSidesEqual,
    triangleSides: triangleSides,
    isIsoscelesTriangle: isIsoscelesTriangle,
    isRightTriangle: isRightTriangle
};


//Rectangle helpers
    function rectangleSides(args){
        const aSide = distance(args[0], args[1]);
        const bSide = distance(args[1], args[2]);
        const cSide = distance(args[2], args[3]);
        const dSide = distance(args[3], args[0]);
        return [aSide, bSide, cSide, dSide];
    }

    function defineDiagonals(args){
        const eDiagonal = distance(args[0], args[2]);
        const fDiagonal = distance(args[3], args[1]);
        return [eDiagonal, fDiagonal];
    }

    function isSquare(args){
        const diagonals = defineDiagonals(args);
        return diagonals[0] === diagonals[1];
    }


//Triangle helpers
    function triangleSides(args){
        const aSide = distance(args[0], args[1]);
        const bSide = distance(args[1], args[2]);
        const cSide = distance(args[2], args[0]);
        return [aSide, bSide, cSide];
    }

    function isIsoscelesTriangle(arr){
        return arr[0] === arr[1] || arr[1] === arr[2] || arr[2] === arr[0]
    }

    function isRightTriangle(arr){
        const sorted = arr.sort((a, b) => {
            return a - b;
        });
        return sorted[2]**2 === sorted[0]**2 + sorted[1]**2
    }

//Main
    function distance(a, b){
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        return Math.hypot(dx, dy);
    }

    function isSidesEqual(arr) {
        const checkSides = arr.filter(item => item === arr[0]);
        return checkSides.length === arr.length
    }


