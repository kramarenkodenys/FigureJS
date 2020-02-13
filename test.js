const Point = require('./point');
const FigureFactory = require('./factory');


// Isosceles Triangle
const a = new Point(0, 0, 'a');
const b = new Point(2, 3, 'b');
const c = new Point(4, 0, 'c');

const newFigure0 = new FigureFactory(a,b,c);
console.log(newFigure0.allInfo);
//
// Right Triangle
const d = new Point(0, 0, 'd');
const e = new Point(0, 4, 'e');
const f = new Point(3, 0, 'f');

const newFigure1 = new FigureFactory(d,e,f);
console.log(newFigure1.allInfo);
//
//
//Rhombus
const g = new Point(0, 0, 'g');
const h = new Point(1, 2, 'h');
const i = new Point(3, 3, 'i');
const j = new Point(2, 1, 'j');

const newFigure2 = new FigureFactory(g,h,i,j);
console.log(newFigure2.allInfo);
//
//
//Square
const k = new Point(0, 0, 'k');
const l = new Point(0, 3, 'l');
const m = new Point(3, 3, 'm');
const n = new Point(3, 0, 'n');

const newFigure3 = new FigureFactory(k,l,m,n);
console.log(newFigure3.allInfo);
//
//
//Circle
const radius = 5;
const newFigure4 = new FigureFactory(radius);
console.log(newFigure4.allInfo);
//


