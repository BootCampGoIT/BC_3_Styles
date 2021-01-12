import React from "react";
import PropTypes from "prop-types";
import UserListItem from "./userListItem/UserListItem";
// import { listStylesMobile, listStylesOther } from "../../../styles/styles";
// import { isMobileOnly } from "react-device-detect";
import "./UserList.css";

const UserList = ({ users, getTheme }) => {
  return (
    <ul className={`listGlobal list`}>
      {users.map((user) => (
        <UserListItem {...user} key={user.id} getTheme={getTheme} />
      ))}
    </ul>
  );
};

export default UserList;

UserList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object),
};
