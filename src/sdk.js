/* jshint -W079, esversion: 6, strict: true, node: true */
/* global module, process */
'use strict';

const isFunction =
  func =>
    !!(func && func.constructor && func.call && func.apply);

export const promisify = (...args) =>
  new Promise((resolve, reject) => {
    try {
      const first = args.shift();
      resolve(isFunction(first) ? first(...args) : (args.length > 0 ? [first].concat(args) : first));
    } catch (error) {
      reject(error);
    }
  });

export const require =
  filename =>
    require(process.cwd() + '/' + filename);

export const run = (generator) => {
  const iterator = generator();

  const iterate = (iteration) =>
    iteration.done ? iteration.value :
      (iteration.value && isFunction(iteration.value.then) ? iteration.value : { then: () => { } })
        .then(value =>
          iterate(iterator.next(value)));

  return iterate(iterator.next());
};

