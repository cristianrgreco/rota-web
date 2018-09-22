import { FETCH_ROTA_COMPLETE } from "./constants";

const initialState = {
  rota: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ROTA_COMPLETE:
      return { ...state, rota: action.payload };
    default:
      return state;
  }
};
