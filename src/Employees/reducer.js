import { FETCH_EMPLOYEES_COMPLETE } from "../Rota/constants";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EMPLOYEES_COMPLETE:
      return action.payload;
    default:
      return state;
  }
};
