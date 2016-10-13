import { isPositiveNumber } from './helpers';
import { bounds } from './config';
import CardinalPoints from './cardinalPoints';

const cp = new CardinalPoints();

/*
 * defines a martian and its current state
 * a martian can move anywhere
 */
export default class Martian {
  constructor(name, x, y, orientation, isAlive) {
    this._name = (name.length == 0) ? Date.now().toString() : `${name}-${Date.now()}`;
    this._x = (isPositiveNumber(x) && x <= bounds.point.get("x")) ? x : 0; // default to zero
    this._y = (isPositiveNumber(y) && y <= bounds.point.get("y")) ? y : 0; // default to zero
    this._orientation = (cp.isValidPoint(orientation)) ? orientation.toUpperCase() : "N"; // default to north
    this._isAlive = (typeof isAlive === 'boolean') ? isAlive : true; // default to true
  }
  
  get name() {
    return this._name; 
  }

  set x(value) {
    this._x = value;
  }

  get x() {
    return this._x;
  }

  set y(value) {
    this._y = value;
  }

  get y() {
    return this._y;
  }

  set orientation(value) {
    if (cp.isValidPoint(value)) {
      this._orientation = value.toUpperCase();
    }
    else {
      throw new Error(`This orientation ${value} is not supported.`);
    }
  }

  get orientation() {
    return this._orientation;
  }

  set isAlive(value) {
    if(typeof value === 'boolean') {
        this._isAlive = value;
      }
      else {
//          this._isAlive = true;
        throw new Error("A robot can only be alive (true) or lost (false).");
      }
  }

  get isAlive() {
    return this._isAlive;
  }

  get point() {
    return `${this._x},${this._y}`;
//    return new Map([["x", this._x], ["y", this._y]]);
  }

  toString() {
    const isAliveStr = (this._isAlive === false) ? " LOST" : "";
    return `${this._x} ${this._y} ${this._orientation}${isAliveStr}`;
  }
  
  turn(direction) {
    var degree = cp.getDegree(this._orientation);

    if(direction.toUpperCase() == "R") {
        degree = (degree == 270) ? 0 : degree + 90; // when turning right make sure degree never becomes 360 since that value is not mapped
    }
    else if (direction.toUpperCase() == "L") {
        degree = (degree == 0) ? 270 : degree - 90; // when turning left make sure degree never becomes 360 since that value is not mapped
    }

    this.orientation = cp.getPointName(degree); // orientation is defined in cardinal points so lets go back to that instead of degrees
  };
  
  /**
   * orientation determines which axis to increment/decrement along
   */
  move() {
    switch (this._orientation) {
      case "N":
          ++this._y;
          break;
      case "S":
          --this._y;
          break;
      case "E":
          ++this._x;
          break;
      case "W":
          --this._x;
        break;
    }
  }
  
  type() {
    return "Martian";
  }
}