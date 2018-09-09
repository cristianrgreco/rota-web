const initialState = {
  employees: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_EMPLOYEES_COMPLETE':
      return {...state, employees: action.payload };
    default:
      return state;
  }
};
