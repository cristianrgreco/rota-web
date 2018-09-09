import {
  FETCH_EMPLOYEES_COMPLETE,
  HIDE_PERIOD_SELECTOR,
  SHOW_PERIOD_SELECTOR
} from "./constants";

const initialState = {
  employees: [],
  periodSelector: {
    enabled: false,
    employee: null,
    scheduleIndex: null
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EMPLOYEES_COMPLETE:
      return { ...state, employees: action.payload };
    case SHOW_PERIOD_SELECTOR:
      return {
        ...state,
        periodSelector: {
          ...state.periodSelector,
          enabled: true,
          employee: action.payload.employee,
          scheduleIndex: action.payload.scheduleIndex
        }
      };
    case HIDE_PERIOD_SELECTOR:
      return {
        ...state,
        periodSelector: {
          ...state.periodSelector,
          enabled: false,
          employee: null,
          scheduleIndex: null
        }
      };
    default:
      return state;
  }
};
