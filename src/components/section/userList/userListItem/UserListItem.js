import React from "react";
import PropTypes from "prop-types";
import styles from "./UserListItem.module.css";

// import redColor from "../../../../styles/styles.module.css"

const UserListItem = ({
  name,
  avatar,
  age,
  status,
  isOnline = true,
  getTheme,
}) => {
  const color = isOnline ? styles.online : styles.offline;

  return (
    <li
      style={{ backgroundColor: `${getTheme().colors.cards}` }}
      className={[styles.listItem, "listGlobalItem"].join(" ")}>
      <h3>Name: {name}</h3>
      <img src={avatar} alt='' className={styles.avatar} />
      <p>Age: {age}</p>
      <p>
        Status: {"  "}
        {/* <span className={[styles.template, color].join(" ")}></span> */}
        <span className={color}></span>
      </p>
      <button style={{backgroundColor: `${getTheme().colors.button}`}}>Delete</button>
    </li>
  );
};

export default UserListItem;

// UserListItem.defaultProps = {
//   avatar:
//     "https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder",
// };

UserListItem.propTypes = {
  name: PropTypes.string,
  avatar: PropTypes.string,
  age: PropTypes.number,
  status: PropTypes.string,
};
