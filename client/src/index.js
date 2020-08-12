// Entry point for client side app
import React from "react";
import ReactDOM from "react-dom";
import Home from "./components/Home";

console.log("test");

ReactDOM.hydrate(<Home />, document.getElementById("root"));
