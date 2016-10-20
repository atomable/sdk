/* jshint -W097, esversion: 6, strict: true, node: true */
/* global module, describe, it */
'use strict';

var _sdk = require('./sdk.js');

var _should = require('should');

var _should2 = _interopRequireDefault(_should);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('A promise', function () {
  it('will return that throws an error would be handeled by catch', function () {
    (0, _sdk.promisify)(function () {
      throw new Error('oups');
    }).then(function () {
      throw 'this should not be called';
    }).catch(function (err) {
      return (0, _should2.default)(err.message).equal('oups');
    });
  });

  it('will be hello in then', function () {
    (0, _sdk.promisify)('hello').then(function (greeting) {
      return (0, _should2.default)(greeting).equal('hello');
    });
  });

  it('will be good morning after lambda', function () {
    (0, _sdk.promisify)(function () {
      return 'good morning';
    }).then(function (greeting) {
      return (0, _should2.default)(greeting).equal('good morning');
    });
  });

  it('will be an array of 4 in then after lambda', function () {
    (0, _sdk.promisify)(function (a, b, c, d) {
      return [a, b, c, d];
    }, 'hi', 'hello', 'bye', 'more').then(function (greetings) {
      return (0, _should2.default)(greetings.length).equal(4);
    });
  });
});