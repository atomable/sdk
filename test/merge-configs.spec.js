import should from 'should';

import { mergeConfigs } from '../dist/config/merge-configs';
import { extractConfig } from '../dist/config/extract-config';

const normal = require('./config/normal/test.microservice');
const promise = require('./config/promise/test-promise.microservice');

describe('merge config', () => {
  it('returns all the configs merged together', () => {
    mergeConfigs([extractConfig(__dirname + '\\config\\normal\\atomable.yml'), extractConfig(__dirname + '\\config\\promise\\atomable.yml')]).should.eql(
      [
        {
          microservice: 'test',
          handler: normal,
          https:
          {
            path: 'test',
            method: 'post',
            parameters: [
              {
                in: 'body',
                name: 'bodyValue',
                required: false
              },
              {
                in: 'query',
                name: 'queryValue'
              },
              {
                in: 'headers',
                name: '*',
                required: true
              }
            ]
          }
        }
        ,
        {
          microservice: 'testPromise',
          handler: promise,
          https:
          {
            path: 'testPromise',
            method: 'get',
            parameters: [
              {
                in: 'body',
                name: 'bodyValue',
                required: false
              },
              {
                in: 'query',
                name: 'queryValue'
              },
              {
                in: 'headers',
                name: '*',
                required: true
              }
            ]
          }
        }
      ]
    );
  });
});