import React, { useState } from "react";
import styles from "./SkillSection.module.css";
import { FaStar } from "react-icons/fa";
import {BiMinus} from 'react-icons/bi'

interface ISkillProps {
  skill: string;
  isShowed: boolean;
  id: string;
  onClick?: () => void;
}
const stars = [0, 1, 2, 3, 4];
const SkillSection = (props: ISkillProps) => {
  const [isActive, setIsActive] = useState(0);
  const [isDeleted, setIsDelited] = useState("");
  function starHandler(index: number) {
    setIsActive(index);
  }
  function onDelete(id: string) {
    setIsDelited(id);
  }
  return (
    <div className={styles.skill_wrapper}>
      {isDeleted === props.id ? null : (
        <>
          <div className={styles.skill_item}>
            {stars.map((star, index) => (
              <FaStar
                key={star}
                color={isActive === star ? "orange" : "lightgray"}
                onClick={() => starHandler(index)}
                className={styles.star}
              />
            ))}
          </div>
          <div className={styles.skill_item}>
            <div id={props.id}>{props.skill}</div>
            {props.isShowed ? (
              <div onClick={() => onDelete(props.id)}>
                <BiMinus size="20px" color="red"/>
              </div>
            ) : null}
          </div>
          <div className={styles.skill_item}>
            {stars.map((star) => (
              <FaStar key={star} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default SkillSection;
