/* jshint -W097, esversion: 6, strict: true, node: true */
/* global module, describe, it */
'use strict';

import { promisify } from './sdk.js';
import should from 'should';

describe('A promise', () => {
  it('will return that throws an error would be handeled by catch', () => {
    promisify(() => {
      throw new Error('oups');
    }).then(() => { throw 'this should not be called'; })
      .catch(err => should(err.message).equal('oups'));
  });

  it('will be hello in then', () => {
    promisify('hello')
      .then(greeting => should(greeting).equal('hello'));
  });

  it('will be good morning after lambda', () => {
    promisify(() => 'good morning')
      .then(greeting => should(greeting).equal('good morning'));
  });

  it('will be an array of 4 in then after lambda', () => {
    promisify((a, b, c, d) => [a, b, c, d], 'hi', 'hello', 'bye', 'more')
      .then(greetings => should(greetings.length).equal(4));
  });
});