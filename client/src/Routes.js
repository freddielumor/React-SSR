import React from "react";
import HomePage from "./pages/HomePage";
import UsersListPage from "./pages/UsersListPage";
import loadData from "./helpers/loadData";

export default [
  {
    path: "/",
    component: HomePage,
    exact: true,
  },
  {
    loadData,
    path: "/users",
    component: UsersListPage,
  },
];
