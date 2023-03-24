import React, { ChangeEventHandler } from "react";
import styles from "./Modal.module.css";
import { BiPlus } from "react-icons/bi";

interface IModalProps {
  handleChange: ChangeEventHandler<HTMLInputElement> | undefined;
  isModal: boolean;
  handleSubmit: ()=>void;
 
}
const Modal = (props: IModalProps) => {

  return (
    <>
      {props.isModal ? (
        <form className={styles.form} >
          <label>Add more skills</label>
          <div className={styles.input_box}><input onChange={props.handleChange} />
          <BiPlus 
          size="20px" 
          color="#0b9dcf"
          onClick={props.handleSubmit}/></div>
        </form>
      ) : null}
    </>
  );
};

export default Modal;
