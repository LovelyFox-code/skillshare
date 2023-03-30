import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import "./App.css";

import Button from "./components/Button/Button";
import Loader from "./components/Loader/Loader";
import Modal from "./components/Modal/Modal";
import SkillSection from "./components/SkillSection/SkillSection";
import User from "./components/User/User";

interface Skills {
  skill: string;
  id: string;
}
export const createID = () => {
  const idText = (((1 + Math.random()) * 0x10000) | 0)
    .toString(16)
    .substring(1);
  return idText;
};
function App() {
  const [isShowed, setIsShowed] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const [value, setValue] = useState("");
  const [skills, setSkills] = useState<Skills[]>([
    { skill: "React js", id: createID() },
    { skill: "JavaScript", id: createID() },
    { skill: "TypeScript", id: createID() },
    { skill: "Next.js", id: createID() },
    { skill: "Angular", id: createID() },
    { skill: "Node.js", id: createID() },
    { skill: "GitHub", id: createID() },
  ]);
  const [isLoaded, setIsLoaded] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(false);
    }, 3000);
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.target;
    setValue(target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSkills([...skills, { skill: value, id: createID() }]);
  };

  const showHideHandler = () => {
    setIsShowed(!isShowed);
  };
  const modalToggle = () => {
    setIsModal(!isModal);
    console.log("modal", isModal);
  };

  return (
    <div className="main">
      {isLoaded ? (
        <Loader />
      ) : (
        <div className="box">
          <User />
          <div className="container_flex">
            <p>Current Level</p>
            <p>Interest</p>
          </div>
          {skills.map((skill) => (
            <SkillSection
              // could I use as a key value index from map()?
              key={skill.id}
              skill={skill.skill}
              id={skill.id}
              isShowed={isShowed}
            />
          ))}
          <Modal
            isModal={isModal}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            value={value}
          />
          <div className="btn_wrapper">
            <Button
              name={isModal ? "Done" : "Add Skills"}
              onClick={modalToggle}
            />
            <Button
              name={isShowed ? "done" : "remove"}
              onClick={showHideHandler}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
