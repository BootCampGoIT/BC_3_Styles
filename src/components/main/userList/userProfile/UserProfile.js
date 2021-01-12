import React from "react";

const UserProfile = ({ user }) => {
  return (
    <li
      style={{
        border: "1px solid black",
        width: "200px",
        height: "300px",
        padding: "10px",
      }}>
      <h3>Name: {user.name}</h3>
      <img src={user.avatar} alt='' style={{ height: "100px" }} />
      <p>Age: {user.age}</p>
      <p>Status: {user.status}</p>
    </li>
  );
};

export default UserProfile;
