import should from 'should';

import { extractConfig } from '../dist/config/extract-config';

const normal = require('./config/normal/test.microservice');

describe('extract config', () => {
  it('returns the config in the correct format', () => {
    extractConfig(__dirname + '\\config\\normal\\atomable.yml').should.eql(
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
      });
  });
});