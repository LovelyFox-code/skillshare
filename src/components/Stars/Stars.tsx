import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const starsLevel = [
  { num: 0, id: 0 },
  { num: 1, id: 1 },
  { num: 2, id: 2 },
  { num: 3, id: 3 },
  { num: 4, id: 4 },
];
const Stars = () => {
  const [isActive, setIsActive] = useState(0);
  const [hover, setHover] = useState(0);
  function setLevel(index: number) {
    setIsActive(index);
    
  }
  return (
    <>
      {starsLevel.map((star, index) => (
        <FaStar
          key={star.id}
          color={index <= (isActive || hover) ? "orange" : "lightgray"}
          onClick={() => setLevel(index)}
          onMouseEnter={() => setHover(index)}
          onMouseLeave={() => setHover(isActive)}
        />
      ))}
    </>
  );
};
export default Stars;
