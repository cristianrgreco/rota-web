import moment from "moment";

import {
  FETCH_EMPLOYEES_COMPLETE,
  SAVE_SCHEDULE,
  MODIFY_SCHEDULE,
  SHOW_PERIOD_SELECTOR,
  HIDE_PERIOD_SELECTOR
} from "./constants";

export function fetchEmployees() {
  return async dispatch => {
    const employees = await Promise.resolve([
      {
        id: 1,
        name: "Adam",
        schedule: [
          { date: moment(new Date(2018, 7, 13)), am: null, pm: null },
          { date: moment(new Date(2018, 7, 14)), am: null, pm: null },
          { date: moment(new Date(2018, 7, 15)), am: null, pm: null },
          { date: moment(new Date(2018, 7, 16)), am: null, pm: null },
          { date: moment(new Date(2018, 7, 17)), am: null, pm: null },
          { date: moment(new Date(2018, 7, 18)), am: null, pm: null },
          { date: moment(new Date(2018, 7, 19)), am: null, pm: null }
        ]
      },
      {
        id: 2,
        name: "Ellias",
        schedule: [
          {
            date: moment(new Date(2018, 7, 13)),
            am: { start: 8, end: 16 },
            pm: null
          },
          {
            date: moment(new Date(2018, 7, 14)),
            am: { start: 8, end: 16 },
            pm: null
          },
          { date: moment(new Date(2018, 7, 15)), am: null, pm: null },
          {
            date: moment(new Date(2018, 7, 16)),
            am: null,
            pm: { start: 16, end: 23 }
          },
          {
            date: moment(new Date(2018, 7, 17)),
            am: null,
            pm: { start: 16, end: 23 }
          },
          {
            date: moment(new Date(2018, 7, 18)),
            am: null,
            pm: { start: 16, end: 23 }
          },
          { date: moment(new Date(2018, 7, 19)), am: null, pm: null }
        ]
      }
    ]);

    dispatch(fetchEmployeesComplete(employees));
  };
}

export function saveSchedule(employee) {
  return {
    type: SAVE_SCHEDULE,
    payload: employee
  };
}

export function modifySchedule(scheduleIndex, schedule) {
  return {
    type: MODIFY_SCHEDULE,
    payload: { scheduleIndex, schedule }
  };
}

function fetchEmployeesComplete(employees) {
  return {
    type: FETCH_EMPLOYEES_COMPLETE,
    payload: employees
  };
}

export function showPeriodSelector(employee, scheduleIndex) {
  return {
    type: SHOW_PERIOD_SELECTOR,
    payload: { employee, scheduleIndex }
  };
}

export function hidePeriodSelector() {
  return {
    type: HIDE_PERIOD_SELECTOR
  };
}
