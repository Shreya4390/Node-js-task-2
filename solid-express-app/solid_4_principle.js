/* eslint-disable no-multi-assign */
/* eslint-disable max-len */
//   Interface segregation principle
// This principle advises to avoid depending on things that they don’t use.

const areaInterface = (state) => ({
  type: 'areaInterface',
  area: () => state.area(state),
});
const volumeShapeInterface = (state) => ({
  type: 'volumeShapeInterface',
  volume: () => state.volume(state),
});
const cubo = (length) => {
  const proto = {
    length,
    type: 'cubo',
    area: (args) => args.length ** 2,
    volume: (args) => args.length ** 3,
  };

  const area = areaInterface(proto);
  const volume = volumeShapeInterface(proto);
  const composite = { ...area, ...volume };

  return Object.assign(Object.create(composite), { composite });
};

// eslint-disable-next-line no-console
console.log(cubo(2).composite.volume(), cubo(2).composite.area());
