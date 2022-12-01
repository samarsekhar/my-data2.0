// Multiple useEffect calls can happen within a functional component as shown

import React, { useEffect } from "react";

const MultipleEffect = () => {
  useEffect(() => {
    const clicked = () => console.log("window clicked");
    window.addEventListener("click", clicked);

    return () => {
      window.removeEventListener("click", clicked);
    };
  }, []);

  // another useEffect hook
  useEffect(() => {
    console.log("another useEffect hook call");
  });
  return <div>Check your console logs</div>;
};
export default MultipleEffect;

//
