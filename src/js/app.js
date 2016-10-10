import { isNumber, isPositiveNumber } from './helpers';
import CardinalPoints from './cardinalPoints';
import { MAX_COORD, MAX_INSTRUCTION, bounds } from './config.js'
import Robot from './robot.js';

console.log(isNumber('2'));
console.log(isPositiveNumber('-2'));

const cp = new CardinalPoints();
console.log(cp.getDegree("E"));
console.log(cp.getPointName(270));
console.log(cp.points); 

console.log(`x: ${bounds.point.get("x")}`);
bounds.x = 25;
console.log(`x: ${bounds.point.get("x")}`);
bounds.y = 25;
console.log(`y: ${bounds.point.get("y")}`);
console.log(bounds.point);
console.log(bounds);

let r = new Robot("test", 9, 15, "N", true);
//console.log(r);
console.log(r.orientation);
r.turn(r.orientation, "R");
console.log(r.orientation);
r.turn(r.orientation, "L");
console.log(r.orientation);
console.log(r.point);
/*var [x,y] = r.point;
console.log(`${x[1]},${y[1]}`);*/

r.move("9,15");