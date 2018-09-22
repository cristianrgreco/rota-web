import {
  DELETE_EMPLOYEE_COMPLETE,
  FETCH_EMPLOYEES_COMPLETE,
  HIDE_EDIT_EMPLOYEE_MODAL,
  HIDE_NEW_EMPLOYEE_MODAL,
  SAVE_NEW_EMPLOYEE_COMPLETE,
  EDIT_EMPLOYEE_COMPLETE,
  SHOW_EDIT_EMPLOYEE_MODAL,
  SHOW_NEW_EMPLOYEE_MODAL
} from "./constants";

const initialState = {
  employees: [],
  employeeToEdit: null,
  isNewEmployeeModalVisible: false,
  isEditEmployeeModalVisible: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EMPLOYEES_COMPLETE:
      return { ...state, employees: action.payload };
    case SAVE_NEW_EMPLOYEE_COMPLETE:
      return { ...state, employees: [...state.employees, action.payload] };
    case SHOW_NEW_EMPLOYEE_MODAL:
      return { ...state, isNewEmployeeModalVisible: true };
    case HIDE_NEW_EMPLOYEE_MODAL:
      return { ...state, isNewEmployeeModalVisible: false };
    case EDIT_EMPLOYEE_COMPLETE:
      return {
        ...state,
        employees: state.employees.map(employee => {
          if (employee.id === action.payload.id) {
            return action.payload;
          } else {
            return employee;
          }
        })
      };
    case SHOW_EDIT_EMPLOYEE_MODAL:
      return {
        ...state,
        employeeToEdit: action.payload,
        isEditEmployeeModalVisible: true
      };
    case HIDE_EDIT_EMPLOYEE_MODAL:
      return { ...state, isEditEmployeeModalVisible: false };
    case DELETE_EMPLOYEE_COMPLETE:
      return {
        ...state,
        employees: state.employees.filter(
          employee => employee.id !== action.payload
        )
      };
    default:
      return state;
  }
};
