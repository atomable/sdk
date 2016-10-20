/* jshint -W097, esversion: 6, strict: true, node: true */
/* global module, describe, it */
'use strict';

var _sdk = require('./sdk.js');

var _should = require('should');

var _should2 = _interopRequireDefault(_should);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('A generator', function () {
  it('will yield hello in then', function () {
    (0, _sdk.run)(regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return (0, _sdk.promisify)('hello');

            case 2:
              _context.t0 = _context.sent;
              (0, _should2.default)(_context.t0).equal('hello');

            case 4:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    }));
  });
});