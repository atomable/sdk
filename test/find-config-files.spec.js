import should from 'should';

import { findConfigFiles } from '../dist/config/find-config-files';

describe('find config files', () => {
  it('returns all files recursively', () => {
    const expectedFiles = [
      '\\test\\config\\nested\\level2\\atomable.yml',
      '\\test\\config\\normal\\atomable.yml',
      '\\test\\config\\promise\\atomable.yml'];
    
    const files = findConfigFiles(__dirname + '/config');
    
    if (!files.every(file => expectedFiles.some(expected => file.indexOf(expected) >= 0))) {
      should.fail('not all files were found');
    }
  });

  it('returns nothing when no files match', () => {    
    findConfigFiles(__dirname + '/config/empty').should.eql([]);
  });
});