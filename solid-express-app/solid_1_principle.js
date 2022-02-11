/* eslint-disable no-undef */
/* eslint-disable no-param-reassign */
/* eslint-disable no-console */
// Single responsibility principle
const circle = (radius) => {
  const proto = {
    type: 'Circle',
    // code
  };
  return Object.assign(Object.create(proto), { radius });
};

const square = (length) => {
  const proto = {
    type: 'Square',
    // code
  };
  return Object.assign(Object.create(proto), { length });
};

console.log(square(4), circle(10));
