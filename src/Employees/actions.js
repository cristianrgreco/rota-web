import {
  FETCH_EMPLOYEES_COMPLETE,
  ADD_EMPLOYEE_COMPLETE,
  SHOW_ADD_EMPLOYEE_MODAL,
  HIDE_ADD_EMPLOYEE_MODAL,
  EDIT_EMPLOYEE_COMPLETE,
  SHOW_EDIT_EMPLOYEE_MODAL,
  HIDE_EDIT_EMPLOYEE_MODAL,
  DELETE_EMPLOYEE_COMPLETE
} from "./constants";

export function fetchEmployees() {
  return async dispatch => {
    const employees = await Promise.resolve([
      { id: 1, name: "Adam Sandler", phone: "07950060075" },
      { id: 2, name: "Ellias Mustafa", phone: "07950060076" },
      { id: 3, name: "Juan Martines", phone: "07950060077" },
      { id: 4, name: "Gustavo Gonzales", phone: "07950060078" }
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

export function addEmployee(employee) {
  return async dispatch => {
    dispatch(addEmployeeComplete(employee));
  };
}

function addEmployeeComplete(employee) {
  return {
    type: ADD_EMPLOYEE_COMPLETE,
    payload: employee
  };
}

export function showAddEmployeeModal() {
  return {
    type: SHOW_ADD_EMPLOYEE_MODAL
  };
}

export function hideAddEmployeeModal() {
  return {
    type: HIDE_ADD_EMPLOYEE_MODAL
  };
}

export function editEmployee(employee) {
  return async dispatch => {
    dispatch(editEmployeeComplete(employee));
  };
}

function editEmployeeComplete(employee) {
  return {
    type: EDIT_EMPLOYEE_COMPLETE,
    payload: employee
  };
}

export function showEditEmployeeModal(employee) {
  return {
    type: SHOW_EDIT_EMPLOYEE_MODAL,
    payload: employee
  };
}

export function hideEditEmployeeModal() {
  return {
    type: HIDE_EDIT_EMPLOYEE_MODAL
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
