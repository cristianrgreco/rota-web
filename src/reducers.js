import { combineReducers } from "redux";
import rotaReducer from "./Rota/reducer";

export default combineReducers({
  rota: rotaReducer
});
