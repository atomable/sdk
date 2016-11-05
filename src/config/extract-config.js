import * as fs from 'fs';
import * as yaml from 'js-yaml';

export const extractConfig = (filePath) => {
  let rawConfig = yaml.safeLoad(fs.readFileSync(filePath, 'utf8'));
  // TODO: change handler from string to func
  rawConfig.handler = require(filePath.replace(/[^\\\/]*$/, '') + rawConfig.handler);
  return rawConfig;
};