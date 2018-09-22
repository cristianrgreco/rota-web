import {
  FETCH_ROTA_COMPLETE,
  EDIT_SCHEDULE,
  SHOW_EDIT_SCHEDULE_MODAL,
  HIDE_EDIT_SCHEDULE_MODAL
} from "./constants";

const initialState = {
  rota: [],
  hasMadeChanges: false,
  scheduleToEdit: null,
  isEditScheduleModalVisible: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ROTA_COMPLETE:
      return { ...state, rota: action.payload };
    case EDIT_SCHEDULE:
      return {
        ...state,
        hasMadeChanges: true,
        rota: state.rota.map(rotaEntry => {
          if (rotaEntry.id === action.payload.rotaId) {
            return {
              ...rotaEntry,
              schedule: rotaEntry.schedule.map(scheduleEntry => {
                if (scheduleEntry.id === action.payload.scheduleEntry.id) {
                  return action.payload.scheduleEntry;
                } else {
                  return scheduleEntry;
                }
              })
            };
          } else {
            return rotaEntry;
          }
        })
      };
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
