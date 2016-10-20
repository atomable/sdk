/* jshint -W079, esversion: 6, strict: true, node: true */
/* global module, process */
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var isFunction = function isFunction(func) {
  return !!(func && func.constructor && func.call && func.apply);
};

var promisify = exports.promisify = function promisify() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return new Promise(function (resolve, reject) {
    try {
      var first = args.shift();
      resolve(isFunction(first) ? first.apply(undefined, args) : args.length > 0 ? [first].concat(args) : first);
    } catch (error) {
      reject(error);
    }
  });
};

var _require = function _require(filename) {
  return _require(process.cwd() + '/' + filename);
};

exports.require = _require;
var run = exports.run = function run(generator) {
  var iterator = generator();

  var iterate = function iterate(iteration) {
    return iteration.done ? iteration.value : (iteration.value && isFunction(iteration.value.then) ? iteration.value : { then: function then() {} }).then(function (value) {
      return iterate(iterator.next(value));
    });
  };

  return iterate(iterator.next());
};