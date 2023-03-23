import React from "react";
import styles from "./User.module.css";
import { HiOutlineUserCircle } from "react-icons/hi";

const User = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.user}>
        <HiOutlineUserCircle size="100px" color="#0b9dcf" />
        <h1>Name </h1>
        <p>front-end</p>
      </div>
    </div>
  );
};

export default User;
