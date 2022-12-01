import React, { useEffect } from "react";

const CleanUp = () => {
  useEffect(() => {
    const clicked = () => console.log("window clicked");
    window.addEventListener("click", clicked);

    // return a clean-up function
    return () => {
      window.removeEventListener("click", clicked);
    };
  }, []);

  return (
    <div>
      When you click the window you'll find a message logged to the console
    </div>
  );
};
export default CleanUp;

// It's pretty common to clean up an effect after some time. This is possible by returning a function from within the effect function passed to useEffect.an example with addEventListener.
