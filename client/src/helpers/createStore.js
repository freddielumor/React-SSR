import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import reducers from "../reducers";

export default () => {
  const middleware = [thunk];
  const store = createStore(
    reducers,
    {},
    composeWithDevTools(applyMiddleware(...middleware))
  );
  return store;
};
