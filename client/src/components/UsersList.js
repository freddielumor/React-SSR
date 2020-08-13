import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../actions/index";
import { getUsers } from "../selectors";

const UsersList = () => {
  const currentUsers = useSelector(getUsers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  if (!currentUsers) return <p>NO USERS</p>;

  return (
    <div>
      <h2>USERS</h2>
      <ul>
        {currentUsers &&
          currentUsers.map((user) => {
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

export default UsersList;
