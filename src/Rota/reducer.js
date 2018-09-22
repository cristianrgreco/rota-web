import {
  FETCH_ROTA_COMPLETE,
  SHOW_EDIT_SCHEDULE_MODAL,
  HIDE_EDIT_SCHEDULE_MODAL
} from "./constants";

const initialState = {
  rota: [],
  scheduleToEdit: null,
  isEditScheduleModalVisible: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ROTA_COMPLETE:
      return { ...state, rota: action.payload };
    case SHOW_EDIT_SCHEDULE_MODAL:
      return {
        ...state,
        isEditScheduleModalVisible: true,
        scheduleToEdit: action.payload
      };
    case HIDE_EDIT_SCHEDULE_MODAL:
      return { ...state, isEditScheduleModalVisible: false };
    default:
      return state;
  }
};
