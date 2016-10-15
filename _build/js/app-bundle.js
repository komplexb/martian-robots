!function(t){function e(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,e,n){Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=48)}({0:function(t,e,n){"use strict";var r=n(2);n.d(e,"c",function(){return i}),n.d(e,"b",function(){return o}),n.d(e,"a",function(){return f});var i=50,o=100,a=5,u=3,c=void 0,s=void 0,f={set x(t){c=n.i(r.a)(t)&&t<=i?t:a},set y(t){s=n.i(r.a)(t)&&t<=i?t:u},get point(){return new Map([["x",c],["y",s]])}}},17:function(t,e,n){"use strict";function r(t,e){e=e.trim().substring(0,o.b);for(var n=0;n<e.length&&i(e.charAt(n).toUpperCase(),t)!==!1;n++);return t}function i(t,e){switch(t){case"L":case"R":e.turn(t);break;case"F":e.move();break;default:console.log("Invalid command received while processing '"+e.name+"', moving to next character.")}return e.isAlive}var o=n(0);e.a=r},18:function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var a=n(7),u=n(2),c=n(0),s=n(4),f=n(8),l=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),y=(new s.a,new WeakMap),p=new WeakMap,h=function(t){function e(t,o,a,s,l){r(this,e);var h=i(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,o,a,s,l));return y.set(h,function(t,e){var n=p.get(h);switch(n(h.point,t,c.a.point.get(e))){case!0:break;case!1:h.isAlive=!1,f.a.push(h.point);break;case null:h[e]=t}}),p.set(h,function(t,e,r){return!(!f.a.find(function(e){return e==t})||n.i(u.b)(e,r))||!!n.i(u.b)(e,r)&&null}),h}return o(e,t),l(e,[{key:"move",value:function(){var t=y.get(this);switch(this._orientation){case"N":t(this._y+1,"y");break;case"S":t(this._y-1,"y");break;case"E":t(this._x+1,"x");break;case"W":t(this._x-1,"x")}}},{key:"type",value:function(){return"Robot"}}]),e}(a.a);e.a=h},2:function(t,e,n){"use strict";function r(t){return!!/^(\-|\+)?([0-9]+|Infinity)$/.test(t)}function i(t){return!!(r(t)&&t>0)}function o(t,e){return!(t<0||t>parseInt(e,10))}function a(t){var e=/N|S|E|W|(\bLOST\b)/g;return c.get(t.type())+" "+t.toString().replace(e,u)}function u(t){return c.get(t)}e.a=i,e.b=o,e.c=a;var c=new Map;c.set("LOST","🆘"),c.set("N","⬆️"),c.set("S","⬇️"),c.set("E","➡️"),c.set("W","⬅️"),c.set("Martian","👾"),c.set("Robot","🤖")},4:function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var i=function(){function t(t,e){var n=[],r=!0,i=!1,o=void 0;try{for(var a,u=t[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){i=!0,o=t}finally{try{!r&&u.return&&u.return()}finally{if(i)throw o}}return n}return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),o=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),a=new WeakMap,u=function(){function t(){r(this,t),a.set(this,new Map([["N",0],["E",90],["S",180],["W",270]]))}return o(t,[{key:"getDegree",value:function(t){var e=a.get(this);return e.get(t.toString().toUpperCase())}},{key:"getPointName",value:function(t){var e=a.get(this),n=!0,r=!1,o=void 0;try{for(var u,c=e[Symbol.iterator]();!(n=(u=c.next()).done);n=!0){var s=i(u.value,2),f=s[0],l=s[1];if(l===Number.parseInt(t,10))return f}}catch(t){r=!0,o=t}finally{try{!n&&c.return&&c.return()}finally{if(r)throw o}}}},{key:"isValidPoint",value:function(t){var e=a.get(this);return e.has(t.toString().toUpperCase())}}]),t}();e.a=u},48:function(t,e,n){"use strict";var r=n(2),i=(n(4),n(0)),o=n(7),a=n(18),u=n(8),c=n(17),s=function(){function t(t,e){var n=[],r=!0,i=!1,o=void 0;try{for(var a,u=t[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){i=!0,o=t}finally{try{!r&&u.return&&u.return()}finally{if(i)throw o}}return n}return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();i.a.x=5,i.a.y=3,console.log("Bounds"),console.log(i.a.point);var f=new a.a("a",1,1,"E",!0),l=new a.a("b",3,2,"N",!0),y=new a.a("c",0,3,"W",!0),p=new o.a("aM",3,2,"N",!0),h=new u.b;h.add(f),h.add(l),h.add(y),h.add(p),console.log(h.getAll());var v=n.i(c.a)(h.get(f.name),"RFRFRFRF");h.update(v),v=n.i(c.a)(h.get(l.name),"FRRFLLFFRRFLL"),h.update(v),v=n.i(c.a)(h.get(y.name),"LLFFFLFLFL"),h.update(v),v=n.i(c.a)(h.get(p.name),"FRRFLLFFRRFLLFFF"),h.update(v),console.log(h.getAll());var b=!0,g=!1,d=void 0;try{for(var w,_=h.getAll()[Symbol.iterator]();!(b=(w=_.next()).done);b=!0){var m=s(w.value,2),k=(m[0],m[1]);console.log(k.toString()),console.log(n.i(r.c)(k))}}catch(t){g=!0,d=t}finally{try{!b&&_.return&&_.return()}finally{if(g)throw d}}},7:function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var i=n(2),o=n(0),a=n(4),u=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),c=new a.a,s=function(){function t(e,a,u,s,f){r(this,t),this._name=0==e.length?Date.now().toString():e+"-"+Date.now(),this._x=n.i(i.a)(a)&&a<=o.a.point.get("x")?a:0,this._y=n.i(i.a)(u)&&u<=o.a.point.get("y")?u:0,this._orientation=c.isValidPoint(s)?s.toUpperCase():"N",this._isAlive="boolean"!=typeof f||f}return u(t,[{key:"toString",value:function(){var t=this._isAlive===!1?" LOST":"";return this._x+" "+this._y+" "+this._orientation+t}},{key:"turn",value:function(t){var e=c.getDegree(this._orientation);"R"==t.toUpperCase()?e=270==e?0:e+90:"L"==t.toUpperCase()&&(e=0==e?270:e-90),this.orientation=c.getPointName(e)}},{key:"move",value:function(){switch(this._orientation){case"N":++this._y;break;case"S":--this._y;break;case"E":++this._x;break;case"W":--this._x}}},{key:"type",value:function(){return"Martian"}},{key:"name",get:function(){return this._name}},{key:"x",set:function(t){this._x=t},get:function(){return this._x}},{key:"y",set:function(t){this._y=t},get:function(){return this._y}},{key:"orientation",set:function(t){if(!c.isValidPoint(t))throw new Error("This orientation "+t+" is not supported.");this._orientation=t.toUpperCase()},get:function(){return this._orientation}},{key:"isAlive",set:function(t){if("boolean"!=typeof t)throw new Error("A robot can only be alive (true) or lost (false).");this._isAlive=t},get:function(){return this._isAlive}},{key:"point",get:function(){return this._x+","+this._y}}]),t}();e.a=s},8:function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",function(){return o});var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),o=["10,12","9,15"],a=new WeakMap,u=function(){function t(){r(this,t),a.set(this,new Map)}return i(t,[{key:"add",value:function(t){var e=a.get(this);e.set(t.name,t)}},{key:"update",value:function(t){this.add(t)}},{key:"remove",value:function(t){var e=a.get(this);e.delete(t)}},{key:"get",value:function(t){var e=a.get(this);return e.get(t)}},{key:"getAll",value:function(){var t=a.get(this);return t}}]),t}();e.b=u}});
//# sourceMappingURL=app-bundle.js.map