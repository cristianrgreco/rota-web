export function calculateTotalRotaEntryHours(rotaEntry) {
  return rotaEntry.schedule.reduce((totalHours, { am, pm }) => {
    const amHours = (am.end || 0) - (am.start || 0);
    const pmHours = (pm.end || 0) - (pm.start || 0);
    return totalHours + (amHours + pmHours);
  }, 0);
}
