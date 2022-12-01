import React, { useState } from "react";

const MultipleState = () => {
  const [age, setAge] = useState(18);
  const [siblingsNum, setSiblingsNum] = useState(10);

  const handleAge = () => {
    setAge(age + 1);
  };
  const handleSiblingsNum = () => {
    setSiblingsNum(siblingsNum + 1);
  };
  return (
    <div>
      <h3>Today I am {age} years of age!</h3>
      <h4>I have {siblingsNum} siblings!</h4>
      <div>
        <button onClick={handleAge}>Get Older!</button>
        <button onClick={handleSiblingsNum}>More Siblings!</button>
      </div>
    </div>
  );
};
export default MultipleState;

// Multiple state variables may be used and updated from within a functional component.
