/* eslint-disable max-len */
/* eslint-disable no-undef */
/* eslint-disable no-param-reassign */
/* eslint-disable no-console */
//  Open-closed Principle
//  Open for extension means that we should be able to add new features or components to the application without breaking existing code.

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
// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line func-names
const areaCalculator = (s) => {
  const proto = {
    sum() {
      const area = [];
      // eslint-disable-next-line no-restricted-syntax
      for (shape of this.shapes) {
        if (shape.type === 'Square') {
          area.push(shape.length ** 2);
        }
        if (shape.type === 'Circle') {
          area.push(Math.PI * shape.radius ** 2);
        }
      }

      // eslint-disable-next-line no-return-assign
      return area.reduce((v, c) => c += v, 0);
    },
  };
  return Object.assign(Object.create(proto), { shapes: s });
};

const shapes = [
  circle(2),
  square(5),
  square(6),
];

const areas = areaCalculator(shapes);
console.log(areas, '**************', areas.sum());
