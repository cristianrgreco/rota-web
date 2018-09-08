import moment from 'moment';

export function getWeek(date) {
  const d = moment(date);
  const daysToSubtract = Math.abs(1 - d.day());
  const startOfWeek = d.subtract(daysToSubtract, 'days');

  const week = [startOfWeek.clone()];

  for (let _ = 1; _ < 7; _++) {
    const nextDay = startOfWeek.add(1, 'day');
    week.push(nextDay.clone());
  }

  return week;
}
