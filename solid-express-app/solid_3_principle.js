/* eslint-disable no-multi-assign */
/* eslint-disable max-len */
//  Liskov substitution principle
// a subclass should override the parent class methods in a way that does not break functionality from a client’s point of view.
const area = (rectangle) => (rectangle.length * rectangle.width);

const item = {
  length: 5,
  width: 6,
};
// eslint-disable-next-line no-console
console.log(area(item));
