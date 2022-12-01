import React, { useState } from "react";

const UpdateState = () => {
  const [age, setAge] = useState(18);

  const handleChange = () => {
    setAge(age + 1);
  };
  return (
    <div>
      <h2>Today I am {age} years of Age</h2>
      <div>
        <button onClick={handleChange}>Get Older!</button>
      </div>
    </div>
  );
};
export default UpdateState;

// Update a state variable ia as simple as invoking the updater function returned by the useState invocation.
//   const [stateValue, updaterFn] = useState(initialStateValue);
