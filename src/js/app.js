import { beingAsEmoji } from './helpers';
import { bounds, X_BOUNDS, Y_BOUNDS } from './config';
import Martian from './martian';
import Robot from './martianRobot';
import { default as Store } from './store';
import { instruct, getMartians } from './controller';

const vorpal = require('vorpal')();

global.mars = new Store();

vorpal
  .command('show')
  .description('Show me who is on Mars.')
  .option('-l', 'Show me lost Robots.')
  .option('-r', 'Show me all Robots.')
  .option('-m', 'Show me all Martians.')
  .validate(function(args) {
    if(mars.getAll().size === 0) {
      return 'There is nothing on Mars, please run `instruct` then try again.';
    }
    else {
      return true;
    }
  })
  .action(function(args, callback) {
    const self = this;

    if(!args.options.l && !args.options.r && !args.options.m) {
      for (const value of mars.getAll().values()) {
        self.log(`${value.toString()} => ${beingAsEmoji(value.toString(true))}`);
      }
    }

    const marsArr = [...mars.getAll().values()];
    if (args.options.l) {
      self.log(getMartians(marsArr, false, 'isAlive'));
    }
    if (args.options.r) {
      self.log(getMartians(marsArr, 'Robot'));
    }
    if (args.options.m) {
      self.log(getMartians(marsArr, 'Martian'));
    }

    callback();
  });

vorpal
  .command('instruct <x> <y> <orientation> <instructions> [name]')
  .option('-x [xBounds]', `Set x bounds > 0 && <= 50. Invalid entries default to ${X_BOUNDS}`)
  .option('-y [yBounds]', `Set y bounds > 0 && <= 50. Invalid entries default to ${Y_BOUNDS}`)
  .option('-m, --martian', 'Make a Martian, otherwise make a Robot.')
  .description('Make a Martian or a Robot and tell it what to do.')
  .action(function(args, callback) {
    const self = this;
    const name = (args.name) ? args.name : '';
    let tempMartian, newMartian;

    if(bounds.x === undefined || bounds.y === undefined) {
      bounds.x = (args.options.xBounds) ? args.options.xBounds : X_BOUNDS;
      bounds.y = (args.options.yBounds) ? args.options.yBounds : Y_BOUNDS;
    }

    if (args.options.martian) {
      tempMartian = new Martian(name, args.x, args.y, args.orientation);
    }
    else {
      tempMartian = new Robot(name, args.x, args.y, args.orientation);
    }

    newMartian = instruct(tempMartian, args.instructions);
    mars.add(newMartian);

    for (const value of mars.getAll().values()) {
      self.log(`${value.toString()} => ${beingAsEmoji(value.toString(true))}`);
    }
    this.log(...mars.getAll());

    callback();
  });

vorpal
  .use(require('./cli/demo.js'))
  .use(require('./cli/test.js'))
  .delimiter('martian-robots$')
  .show();
