import React, { useState } from "react";
import styles from "./SkillSection.module.css";
import { BiMinus } from "react-icons/bi";
import Stars from "../Stars/Stars";

interface ISkillProps {
  skill: string;
  isShowed: boolean;
  id: string;
  onClick?: () => void;
}

const SkillSection = (props: ISkillProps) => {
  const [isDeleted, setIsDelited] = useState("");

  function onDelete(id: string) {
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
              <div onClick={() => onDelete(props.id)}>
                <BiMinus size="20px" color="red" />
              </div>
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
