import {
  FETCH_EMPLOYEES_COMPLETE,
  SAVE_NEW_EMPLOYEE_COMPLETE,
  SHOW_NEW_EMPLOYEE_MODAL,
  HIDE_NEW_EMPLOYEE_MODAL,
  DELETE_EMPLOYEE_COMPLETE
} from "./constants";

export function fetchEmployees() {
  return async dispatch => {
    const employees = await Promise.resolve([
      { id: 1, name: "Adam Sandler", phone: "00000000000" },
      { id: 2, name: "Ellias Mustafa", phone: "00000000000" },
      { id: 3, name: "Juan Martines", phone: "00000000000" },
      { id: 4, name: "Gustavo Gonzales", phone: "00000000000" }
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

export function saveNewEmployee(employee) {
  return async dispatch => {
    dispatch(saveNewEmployeeComplete(employee));
  };
}

function saveNewEmployeeComplete(employee) {
  return {
    type: SAVE_NEW_EMPLOYEE_COMPLETE,
    payload: employee
  };
}

export function showNewEmployeeModal() {
  return {
    type: SHOW_NEW_EMPLOYEE_MODAL
  };
}

export function hideNewEmployeeModal() {
  return {
    type: HIDE_NEW_EMPLOYEE_MODAL
  };
}

export function deleteEmployee(employeeId) {
  return async dispatch => {
    dispatch(deleteEmployeeComplete(employeeId));
  };
}

function deleteEmployeeComplete(employeeId) {
  return {
    type: DELETE_EMPLOYEE_COMPLETE,
    payload: employeeId
  };
}
