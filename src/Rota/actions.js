import moment from "moment";

import {
  FETCH_ROTA_COMPLETE,
  SAVE_ROTA_COMPLETE,
  EDIT_SCHEDULE,
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
            id: 1,
            date: moment(new Date(2018, 7, 13)),
            am: { start: null, end: null },
            pm: { start: null, end: null }
          },
          {
            id: 2,
            date: moment(new Date(2018, 7, 14)),
            am: { start: null, end: null },
            pm: { start: null, end: null }
          },
          {
            id: 3,
            date: moment(new Date(2018, 7, 15)),
            am: { start: null, end: null },
            pm: { start: null, end: null }
          },
          {
            id: 4,
            date: moment(new Date(2018, 7, 16)),
            am: { start: null, end: null },
            pm: { start: null, end: null }
          },
          {
            id: 5,
            date: moment(new Date(2018, 7, 17)),
            am: { start: null, end: null },
            pm: { start: null, end: null }
          },
          {
            id: 6,
            date: moment(new Date(2018, 7, 18)),
            am: { start: null, end: null },
            pm: { start: null, end: null }
          },
          {
            id: 7,
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
            id: 1,
            date: moment(new Date(2018, 7, 13)),
            am: { start: 8, end: 16 },
            pm: { start: null, end: null }
          },
          {
            id: 2,
            date: moment(new Date(2018, 7, 14)),
            am: { start: 8, end: 16 },
            pm: { start: null, end: null }
          },
          {
            id: 3,
            date: moment(new Date(2018, 7, 15)),
            am: { start: null, end: null },
            pm: { start: null, end: null }
          },
          {
            id: 4,
            date: moment(new Date(2018, 7, 16)),
            am: { start: null, end: null },
            pm: { start: 16, end: 23 }
          },
          {
            id: 5,
            date: moment(new Date(2018, 7, 17)),
            am: { start: null, end: null },
            pm: { start: 16, end: 23 }
          },
          {
            id: 6,
            date: moment(new Date(2018, 7, 18)),
            am: { start: null, end: null },
            pm: { start: 16, end: 23 }
          },
          {
            id: 7,
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

export function saveRota(rota) {
  return async dispatch => {
    dispatch(saveRotaComplete());
  };
}

function saveRotaComplete() {
  return {
    type: SAVE_ROTA_COMPLETE
  };
}

export function editSchedule(rotaId, scheduleEntry) {
  return {
    type: EDIT_SCHEDULE,
    payload: { rotaId, scheduleEntry }
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
