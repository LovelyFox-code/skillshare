import { useState } from "react";
import { MdOutlineDeleteForever } from "react-icons/md";
import styles from "./SkillSection.module.css";
import Stars from "../Stars/Stars";

interface ISkillProps {
  skill: string;
  isShowed: boolean;
  id: string;
  onClick?: () => void;
}

const SkillSection = (props: ISkillProps) => {
  const [isDeleted, setIsDelited] = useState("");

const onDelete=(id: string)=> {
    setIsDelited(id);
  }
  return (
    <div className={styles.skill_wrapper}>
      {isDeleted === props.id ? null : (
        <>
          <div className={styles.skill_item}>
            <Stars />
          </div>
          <div className={styles.skill_item}>
            <div id={props.id}>{props.skill}</div>
            {props.isShowed ? (
              <button className = {styles.delete_btn}onClick={() => onDelete(props.id)}>
                <MdOutlineDeleteForever size="20px" color="red" />
              </button>
            ) : null}
          </div>
          <div className={styles.skill_item}>
            <Stars />
          </div>
        </>
      )}
    </div>
  );
};

export default SkillSection;
