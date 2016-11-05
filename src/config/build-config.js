import { findConfigFiles } from './find-config-files';
import { extractConfig } from './extract-config';
import { mergeConfigs } from './merge-configs';

export const buildConfig = (basePath) => {
  basePath = basePath || process.cwd();

  return mergeConfigs(findConfigFiles(basePath).map(extractConfig));
};