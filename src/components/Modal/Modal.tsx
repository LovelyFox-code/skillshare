import { ChangeEventHandler, FormEvent } from "react";
import { BiPlus } from "react-icons/bi";

import styles from "./Modal.module.css";

interface IModalProps {
  handleChange: ChangeEventHandler<HTMLInputElement> | undefined;
  isModal: boolean;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  value: string;
}
const Modal = (props: IModalProps) => {
  return (
    <>
        <form className={styles.form} onSubmit={props.handleSubmit}>
          <label htmlFor="input">Add more skills</label>
          <div className={styles.input_box}>
            <input onChange={props.handleChange} />
            <button className={styles.btn_plus}  type="submit">
              <BiPlus size="20px" color="#0b9dcf" values={props.value} />
            </button>
          </div>
        </form>
  
    </>
  );
};

export default Modal;
