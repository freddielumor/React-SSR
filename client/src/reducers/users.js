import { FETCH_USERS } from "../actions/index";

const initialState = {
  users: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS: {
      return {
        ...state,
        users: action.payload.data,
      };
    }

    default:
      return state;
  }
};
