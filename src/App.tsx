import { useState } from "react";
import "./App.css";
import Button from "./components/Button/Button";
import Modal from "./components/Modal/Modal";
import SkillSection from "./components/SkillSection/SkillSection";
import User from "./components/User/User";

const skills = [
  { skill: "HTML/CSS", id: "1" },
  { skill: "React js", id: "2" },
  { skill: "JavaScript", id: "3" },
  { skill: "TypeScript", id: "4" },
  { skill: "Next.js", id: "5" },
  { skill: "Angular", id: "6" },
  { skill: "Node.js", id: "7" },
  { skill: "GitHub", id: "8" },
];

function App() {
  const [isShowed, setIsShowed] = useState(false);
  const [isModal, setIsModal] = useState(false);
  function showHideHandler() {
    setIsShowed(!isShowed);
  }
  function modalToggle() {
    setIsModal(!isModal);
    console.log(isModal);
  }

  return (
    <div className="main">
      <h1>Skill matrix</h1>
      <div className="box">
        <User />
        {skills.map((skill) => (
          <SkillSection
            key={skill.id}
            skill={skill.skill}
            id={skill.id}
            isShowed={isShowed}
          />
        ))}
        <Modal isModal={isModal} />
        <div className="btn_wrapper">
          <Button name="add Skill" onClick={modalToggle} />
          <Button name="remove" onClick={showHideHandler} />
        </div>
      </div>
    </div>
  );
}

export default App;
