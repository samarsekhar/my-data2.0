import React, { useState } from "react";

const InitializeState = () => {
  const [token] = useState(() => {
    let token = window.localStorage.getItem("my-token");
    return token || "default#-token#";
  });

  return <div>Token is {token}</div>;
};
export default InitializeState;

// As opposed to just passing an initial state value, state could also be initialized from a function.
