import React, { useState } from "react";

const DeclareState = () => {
  const [count] = useState(100);

  return <div>State variable is {count}</div>;
};

export default DeclareState;

// Declaring a state variable is as simple as calling with some initial state value.
