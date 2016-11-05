import * as fs from 'fs';
import * as path from 'path';

export const findConfigFiles = function (dir, filelist) {
  filelist = filelist || [];

  let files = fs.readdirSync(dir);
  files.forEach((file) => {
    if (fs.statSync(path.join(dir, file)).isDirectory()) {
      filelist = findConfigFiles(path.join(dir, file), filelist);
    }
    else if (file === 'atomable.yml') {
      filelist.push(path.join(dir, file));
    }
  });

  return filelist;
};