import axios from "axios";
import { GET_USERS_ENDPOINT } from "../helpers/apiConfig";

export const FETCH_USERS = "FETCH_USERS";

export const fetchUsers = () => async (dispatch) => {
  const res = await axios.get(GET_USERS_ENDPOINT);
  console.log("res", res);
  dispatch({
    type: FETCH_USERS,
    payload: res,
  });
};
