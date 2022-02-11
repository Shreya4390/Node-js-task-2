/* eslint-disable no-console */
/* eslint-disable no-multi-assign */
/* eslint-disable max-len */
// Dependency inversion principle
// Entities must depend on abstractions not on concretions. It states that the high level module must not depend on the low level module, but they should depend on abstractions.
const shapeInterface = (state) => ({
  type: 'shapeInterface',
  area: () => state.area(state),
});

const solidShapeInterface = (state) => ({
  type: 'solidShapeInterface',
  volume: () => state.volume(state),
});

const manageShapeInterface = (fn) => ({
  type: 'manageShapeInterface',
  calculate: () => fn(),
});

const square = (length) => {
  const proto = {
    length,
    type: 'Square',
    area: (args) => args.length ** 2,
  };
  const basics = shapeInterface(proto);
  const abstraccion = manageShapeInterface(() => basics.area());
  const composite = { ...basics, ...abstraccion };
  return Object.assign(Object.create(composite), { length });
};

const circle = (radius) => {
  const proto = {
    radius,
    type: 'Circle',
    area: (args) => Math.PI * args.radius ** 2,
  };

  const basics = shapeInterface(proto);
  const abstraccion = manageShapeInterface(() => basics.area());
  const composite = { ...basics, ...abstraccion };
  return Object.assign(Object.create(composite), { radius });
};
const cubo = (length) => {
  const proto = {
    length,
    type: 'Cubo',
    area: (args) => args.length ** 2,
    volume: (args) => args.length ** 3,
  };
  const basics = shapeInterface(proto);
  const complex = solidShapeInterface(proto);
  const abstraccion = manageShapeInterface(() => basics.area() + complex.volume());
  const composite = { ...basics, ...abstraccion };
  return Object.assign(Object.create(composite), { composite });
};

const areaCalculator = (s) => {
  const proto = {
    sum() {
      const area = [];
      // eslint-disable-next-line no-restricted-syntax
      for (shape of this.shapes) {
        area.push(shape.calculate());
      }

      // eslint-disable-next-line no-return-assign
      return area.reduce((v, c) => c += v, 0);
    },
  };
  return Object.assign(Object.create(proto), { shapes: s });
};

const volumeCalculator = (s) => {
  const proto = {
    type: 'volumeCalculator',
  };
  const areaCalProto = Object.getPrototypeOf(areaCalculator());
  const inherit = { ...areaCalProto, ...proto };
  return Object.assign(Object.create(inherit), { shapes: s });
};

const shapes = [
  circle(2),
  square(5),
  square(6),
];

areaCalculator(shapes);

const solids = [
  cubo(4),
];

volumeCalculator(solids);

console.log(cubo(6).composite.calculate());
