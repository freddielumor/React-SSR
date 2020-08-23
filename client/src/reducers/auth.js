import { FETCH_CURRENT_USER } from "../actions/index";

const initialState = {
  currentUser: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CURRENT_USER: {
      return {
        ...state,
        currentUser: action.payload.data || false,
      };
    }

    default:
      return state;
  }
};
