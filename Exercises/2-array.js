'use strict';

const array = () => {
  const arr = [];
  const result = (idx) => arr[idx];
  result.push = (element) => arr.push(element);
  result.pop = () => arr.pop();
  return result;
};

module.exports = { array };
