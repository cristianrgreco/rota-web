import {
  FETCH_ROTA_COMPLETE,
  SAVE_SCHEDULE,
  MODIFY_SCHEDULE,
  HIDE_PERIOD_SELECTOR,
  SHOW_PERIOD_SELECTOR
} from "./constants";

const initialState = {
  rotas: [],
  periodSelector: {
    enabled: false,
    employee: null,
    scheduleIndex: null,
    hasModified: false
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ROTA_COMPLETE:
      return { ...state, rotas: action.payload };
    case SAVE_SCHEDULE:
      return saveSchedule(state, action);
    case MODIFY_SCHEDULE:
      return modifySchedule(state, action);
    case SHOW_PERIOD_SELECTOR:
      return showPeriodSelector(state, action);
    case HIDE_PERIOD_SELECTOR:
      return hidePeriodSelector(state);
    default:
      return state;
  }
};

function saveSchedule(state, action) {
  return {
    ...state,
    rotas: state.rotas.map(rota => {
      if (rota.id === action.payload.id) {
        return action.payload;
      } else {
        return rota;
      }
    })
  };
}

function modifySchedule(state, action) {
  return {
    ...state,
    periodSelector: {
      ...state.periodSelector,
      hasModified: true,
      employee: {
        ...state.periodSelector.employee,
        schedule: [
          ...state.periodSelector.employee.schedule.slice(
            0,
            action.payload.scheduleIndex
          ),
          action.payload.schedule,
          ...state.periodSelector.employee.schedule.slice(
            action.payload.scheduleIndex + 1
          )
        ]
      }
    }
  };
}

function showPeriodSelector(state, action) {
  return {
    ...state,
    periodSelector: {
      ...state.periodSelector,
      enabled: true,
      employee: action.payload.employee,
      scheduleIndex: action.payload.scheduleIndex
    }
  };
}

function hidePeriodSelector(state) {
  return {
    ...state,
    periodSelector: {
      ...state.periodSelector,
      enabled: false,
      employee: null,
      scheduleIndex: null,
      hasModified: false
    }
  };
}
