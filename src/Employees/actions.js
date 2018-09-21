import { FETCH_EMPLOYEES_COMPLETE } from "../Rota/constants";

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