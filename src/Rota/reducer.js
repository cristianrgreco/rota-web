import { FETCH_EMPLOYEES_COMPLETE, SHOW_PERIOD_SELECTOR } from "./constants";

const initialState = {
  employees: [],
  isPeriodSelectorVisible: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EMPLOYEES_COMPLETE:
      return { ...state, employees: action.payload };
    case SHOW_PERIOD_SELECTOR:
      return { ...state, isPeriodSelectorVisible: true };
    default:
      return state;
  }
};
