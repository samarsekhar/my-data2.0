// Note: "useEffect" accepts a function which can peform any side effects.
// Call signature: useEffect(effectFunction, arrayDependencies)

import React, { useEffect, useState } from "react";

const SideEffect = () => {
  const [age, setAge] = useState(0);
  const handleClick = () => {
    setAge(age + 1);
  };
  useEffect(() => {
    document.title = "You are";
  });

  return (
    <div>
      <p>Look at the title of the current tab in your browser</p>
      <button onClick={handleClick}>Update Title!</button>
    </div>
  );
};
export default SideEffect;
