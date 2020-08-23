import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../actions/index";
import { getUsers } from "../selectors";
import loadData from "../helpers/loadData";

const UsersListPage = () => {
  const users = useSelector(getUsers) || [];
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div>
      <h2>USERS</h2>
      <ul>
        {users.map((user) => {
          return (
            <li key={user.id} id={user.id}>
              {user.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default {
  component: UsersListPage,
  loadData,
};
