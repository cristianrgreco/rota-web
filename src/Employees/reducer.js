import {
  FETCH_EMPLOYEES_COMPLETE,
  HIDE_NEW_EMPLOYEE_MODAL,
  SHOW_NEW_EMPLOYEE_MODAL
} from "../Rota/constants";

const initialState = {
  employees: [],
  isNewEmployeeModalVisible: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EMPLOYEES_COMPLETE:
      return { ...state, employees: action.payload };
    case SHOW_NEW_EMPLOYEE_MODAL:
      return { ...state, isNewEmployeeModalVisible: true };
    case HIDE_NEW_EMPLOYEE_MODAL:
      return { ...state, isNewEmployeeModalVisible: false };
    default:
      return state;
  }
};
