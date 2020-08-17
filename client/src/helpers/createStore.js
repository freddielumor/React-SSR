import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import axios from "axios";
import reducers from "../reducers";
import { BASE_URL } from "./apiConfig";

export default (req) => {
  const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: { cookie: req.get("cookie") || "" },
  });

  const store = createStore(
    reducers,
    {},
    composeWithDevTools(applyMiddleware(thunk.withExtraArgument(axiosInstance)))
  );
  return store;
};
