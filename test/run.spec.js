/* jshint -W097, esversion: 6, strict: true, node: true */
/* global module, describe, it */
'use strict';

import { run, promisify } from './sdk.js';
import should from 'should';

describe('A generator', () => {
  it ('will yield hello in then', () => {
    run(function* () {
      should(yield promisify('hello')).equal('hello');
    });
  });
});
