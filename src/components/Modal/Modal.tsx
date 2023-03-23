import React from "react";
import styles from "./Modal.module.css";

interface IModalProps {
  isModal: boolean;
}
const Modal = (props: IModalProps) => {
  return (
    <>
      {props.isModal ? (
        <form className={styles.form}>
          <label>Add more skills</label>
          <input />
        </form>
      ) : null}
    </>
  );
};

export default Modal;
