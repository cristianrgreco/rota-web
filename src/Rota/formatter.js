export function formatSchedulePeriod(period) {
  if (!period.start || !period.end) {
    return "";
  } else {
    return `${formatTime(period.start)}-${formatTime(period.end)}`;
  }
}

function formatTime(time) {
  return time > 12 ? time - 12 : time;
}
