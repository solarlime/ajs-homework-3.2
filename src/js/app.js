const sortedDamageLevel = (data = []) => data.sort((first, second) => {
  if (first.health < second.health) {
    return 1;
  }
  if (first.health > second.health) {
    return -1;
  }
  return 0;
});

console.log(sortedDamageLevel([
  { name: 'Мечник', health: 10 },
  { name: 'Маг', health: 100 },
  { name: 'Лучник', health: 80 },
]));

export default sortedDamageLevel;
