import { getWeek } from './week';

describe('week', () => {
  it('should return the week of the given date', () => {
    const date = new Date(2015, 10, 25);

    const week = getWeek(date).map(m => m.toDate());

    expect(week).toEqual([
      new Date(2015, 10, 23),
      new Date(2015, 10, 24),
      new Date(2015, 10, 25),
      new Date(2015, 10, 26),
      new Date(2015, 10, 27),
      new Date(2015, 10, 28),
      new Date(2015, 10, 29),
    ]);
  });
});
