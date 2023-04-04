import React, { useState, useEffect } from "react";
import styles from "./User.module.css";
import { HiOutlineUserCircle } from "react-icons/hi";

const User = () => {
  const [user, setUser] = useState({
    name: "Name",
    picture: "logo",
  });
  useEffect(() => {
    const userFetch = async () => {
      const user = await (await fetch("https://randomuser.me/api")).json();
      setUser({
        ...user,
        name: user.results[0].name.first,
        picture: user.results[0].picture.large,
      });
    };
    userFetch();
  }, []);
  const { name, picture } = user;
  return (
    <div className={styles.wrapper}>
      <div className={styles.user}>
        {picture ? (
          <img src={picture} alt="user" />
        ) : (
          <div className={styles.user_img}>
            <HiOutlineUserCircle size="100px" color="#0b9dcf" />
          </div>
        )}
        {name ? (
          <h1>{name}</h1>
        ) : (
          <form>
            <label>
              Enter your name:
              <input type="text" />
            </label>
          </form>
        )}
        <p>front-end</p>
      </div>
    </div>
  );
};

export default User;
