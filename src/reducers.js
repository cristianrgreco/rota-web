import { combineReducers } from "redux";
import rotaReducer from "./Rota/reducer";
import employeesReducer from "./Employees/reducer";

export default combineReducers({
  rota: rotaReducer,
  employees: employeesReducer
});
