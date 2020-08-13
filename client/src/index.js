// Entry point for client side app
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import Routes from "./Routes";
import reducers from "./reducers";

const middleware = [thunk];
const store = createStore(
  reducers,
  {},
  composeWithDevTools(applyMiddleware(...middleware))
);

ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
