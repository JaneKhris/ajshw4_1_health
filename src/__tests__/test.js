import getHealth from '../health';

test.each([
  [{ nameHero: 'one', health: 9 }, 'critical'],
  [{ nameHero: 'one', health: 20 }, 'wounded'],
  [{ nameHero: 'three', health: 99 }, 'healthy'],
])(
  (' %s  %i'),
  (hero, expected) => {
    const res = getHealth(hero);
    expect(res).toBe(expected);
  },
);
