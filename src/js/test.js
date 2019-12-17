import sortedDamageLevel from './app';

test('should return a sorted array', () => {
  const input = [
    { name: 'Мечник', health: 10 },
    { name: 'Маг', health: 100 },
    { name: 'Лучник', health: 80 },
  ];
  const expected = [
    { name: 'Маг', health: 100 },
    { name: 'Лучник', health: 80 },
    { name: 'Мечник', health: 10 },
  ];
  const received = sortedDamageLevel(input);
  expect(received).toEqual(expected);
});
