import { FETCH_EMPLOYEES_COMPLETE } from "../Rota/constants";

export function fetchEmployees() {
  return async dispatch => {
    const employees = await Promise.resolve([
      { name: "Adam", phone: "00000000000" },
      { name: "Ellias", phone: "00000000000" },
      { name: "Juan", phone: "00000000000" },
      { name: "Gustavo", phone: "00000000000" }
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
