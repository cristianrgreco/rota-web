import { FETCH_EMPLOYEES_COMPLETE, SHOW_PERIOD_SELECTOR } from "./constants";

const initialState = {
  employees: [],
  periodSelector: {
    enabled: false,
    employee: null,
    periodIndex: null
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
          periodIndex: action.payload.periodIndex
        }
      };
    default:
      return state;
  }
};
