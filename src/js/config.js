import { isPositiveNumber } from './helpers';

export const MAX_COORD = 50;
export const MAX_INSTRUCTION = 100;
const X_BOUNDS = 5, Y_BOUNDS = 3;

/*
 * set boundaries for mars
 * as a object literal, but we wanna control how values are set
 * and return a boundaries a map with our points
 * 
 * es6 class syntax has 
 */
let x, y;
export const bounds = {
  set x(value) {
    x = (isPositiveNumber(value) && value <= MAX_COORD) ? value : X_BOUNDS;
  }, 
  set y(value) {
    y = (isPositiveNumber(value) && value <= MAX_COORD) ? value : Y_BOUNDS;
  }, 
  get point() {
    return new Map([["x", x], ["y", y]]);
  }
};