import KDTree from '../pages/builder/helpers/kdTree';

let kdTree;

beforeAll(() => {
  kdTree = new KDTree([
    { x: 5, y: 10 },
    { x: 7, y: 15 },
    { x: 12, y: 40 },
    { x: 1, y: 6 },
    { x: -3, y: 5 },
  ]);
});


it('can find the nearest neighbor', () => {
  const nearest = kdTree.nearest({ x: 5, y: 3 })[0].coordinates;
  expect(nearest).toEqual({ x: 1, y: 6 });
});

it('can find items in a range', () => {
  const range = [{ x: -3, y: 0 }, { x: 4, y: 12 }];
  expect(kdTree.range(range).map(r => r.coordinates)).toEqual([{ x: -3, y: 5 }, { x: 1, y: 6 }]);
});

it('can add items on the fly', () => {
  const range = [{ x: -3, y: 0 }, { x: 4, y: 12 }];
  kdTree.insert({ x: 1, y: 2 });
  const inRange = kdTree.range(range).map(r => r.coordinates);
  expect(inRange.length).toBe(3);
  expect(inRange).toEqual(
    expect.arrayContaining([
      { x: -3, y: 5 },
      { x: 1, y: 6 },
      { x: 1, y: 2 },
    ]),
  );

});
