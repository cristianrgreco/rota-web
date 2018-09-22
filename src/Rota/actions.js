import moment from "moment";

import {
  FETCH_ROTA_COMPLETE,
  SHOW_EDIT_SCHEDULE_MODAL,
  HIDE_EDIT_SCHEDULE_MODAL
} from "./constants";

export function fetchRota() {
  return async dispatch => {
    const rota = await Promise.resolve([
      {
        id: 1,
        name: "Adam",
        schedule: [
          {
            date: moment(new Date(2018, 7, 13)),
            am: { start: null, end: null },
            pm: { start: null, end: null }
          },
          {
            date: moment(new Date(2018, 7, 14)),
            am: { start: null, end: null },
            pm: { start: null, end: null }
          },
          {
            date: moment(new Date(2018, 7, 15)),
            am: { start: null, end: null },
            pm: { start: null, end: null }
          },
          {
            date: moment(new Date(2018, 7, 16)),
            am: { start: null, end: null },
            pm: { start: null, end: null }
          },
          {
            date: moment(new Date(2018, 7, 17)),
            am: { start: null, end: null },
            pm: { start: null, end: null }
          },
          {
            date: moment(new Date(2018, 7, 18)),
            am: { start: null, end: null },
            pm: { start: null, end: null }
          },
          {
            date: moment(new Date(2018, 7, 19)),
            am: { start: null, end: null },
            pm: { start: null, end: null }
          }
        ]
      },
      {
        id: 2,
        name: "Ellias",
        schedule: [
          {
            date: moment(new Date(2018, 7, 13)),
            am: { start: 8, end: 16 },
            pm: { start: null, end: null }
          },
          {
            date: moment(new Date(2018, 7, 14)),
            am: { start: 8, end: 16 },
            pm: { start: null, end: null }
          },
          {
            date: moment(new Date(2018, 7, 15)),
            am: { start: null, end: null },
            pm: { start: null, end: null }
          },
          {
            date: moment(new Date(2018, 7, 16)),
            am: { start: null, end: null },
            pm: { start: 16, end: 23 }
          },
          {
            date: moment(new Date(2018, 7, 17)),
            am: { start: null, end: null },
            pm: { start: 16, end: 23 }
          },
          {
            date: moment(new Date(2018, 7, 18)),
            am: { start: null, end: null },
            pm: { start: 16, end: 23 }
          },
          {
            date: moment(new Date(2018, 7, 19)),
            am: { start: null, end: null },
            pm: { start: null, end: null }
          }
        ]
      }
    ]);

    dispatch(fetchRotaComplete(rota));
  };
}

function fetchRotaComplete(rota) {
  return {
    type: FETCH_ROTA_COMPLETE,
    payload: rota
  };
}

export function showEditScheduleModal(rotaId, name, scheduleEntry) {
  return {
    type: SHOW_EDIT_SCHEDULE_MODAL,
    payload: { rotaId, name, scheduleEntry }
  };
}

export function hideEditScheduleModal() {
  return {
    type: HIDE_EDIT_SCHEDULE_MODAL
  };
}
