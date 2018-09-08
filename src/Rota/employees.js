export function fetchEmployees() {
  return Promise.resolve([
    {
      name: 'Adam',
      schedule: [
        { am: null, pm: null },
        { am: null, pm: null },
        { am: null, pm: null },
        { am: null, pm: null },
        { am: null, pm: null },
        { am: null, pm: null },
        { am: null, pm: null },
      ]
    },
    {
      name: 'Ellias',
      schedule: [
        { am: { start: 8, end: 16 }, pm: null },
        { am: { start: 8, end: 16 }, pm: null },
        { am: null, pm: null },
        { am: null, pm: { start: 16, end: 23 } },
        { am: null, pm: { start: 16, end: 23 } },
        { am: null, pm: { start: 16, end: 23 } },
        { am: null, pm: null },
      ]
    }
  ]);
}
