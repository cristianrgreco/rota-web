import { FETCH_EMPLOYEES_COMPLETE, SHOW_PERIOD_SELECTOR } from "./constants";

export function fetchEmployees() {
  return async dispatch => {
    const employees = await Promise.resolve([
      {
        name: "Adam",
        schedule: [
          { am: null, pm: null },
          { am: null, pm: null },
          { am: null, pm: null },
          { am: null, pm: null },
          { am: null, pm: null },
          { am: null, pm: null },
          { am: null, pm: null }
        ]
      },
      {
        name: "Ellias",
        schedule: [
          { am: { start: 8, end: 16 }, pm: null },
          { am: { start: 8, end: 16 }, pm: null },
          { am: null, pm: null },
          { am: null, pm: { start: 16, end: 23 } },
          { am: null, pm: { start: 16, end: 23 } },
          { am: null, pm: { start: 16, end: 23 } },
          { am: null, pm: null }
        ]
      }
    ]);

    dispatch(fetchEmployeesComplete(employees));
  };
}

function fetchEmployeesComplete(employees) {
  return {
    type: FETCH_EMPLOYEES_COMPLETE,
    payload: employees
  };
}

export function showPeriodSelector(employee, period) {
  return {
    type: SHOW_PERIOD_SELECTOR,
    payload: { employee, period }
  };
}
