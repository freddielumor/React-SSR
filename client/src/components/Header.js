import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCurrentUser } from "../selectors";
import { fetchCurrentUser } from "../actions/index";

const Header = () => {
  const currentUser = useSelector(getCurrentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, []);

  return (
    <div>
      <Link to="/">React SSR</Link>
      <div>
        <Link to="/users">Users</Link>
        <Link to="/admins">Admins</Link>
      </div>
    </div>
  );
};

export default Header;
