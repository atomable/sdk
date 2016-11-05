import should from 'should';

import { buildConfig } from '../dist/config/build-config';

const normal = require('./config/normal/test.microservice');
const promise = require('./config/promise/test-promise.microservice');
const empty = require('./config/nested/level2/null.microservice');

describe('build runtime config', () => {
  it('returns all the configs merged together from the current directory', () => {
    buildConfig().should.eql(
      [
        {
          microservice: 'null',
          handler: empty,
          https:
          {
            path: 'null',
            method: 'get',
            parameters: [
              {
                in: 'query',
                name: '*'
              },
              {
                in: 'body',
                name: '*'
              },
              {
                in: 'headers',
                name: '*',
              }
            ]
          }
        },
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
        },
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

  it('returns all the configs merged together from the specified working directory', () => {
    buildConfig(__dirname + '/config/promise').should.eql(
      [
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