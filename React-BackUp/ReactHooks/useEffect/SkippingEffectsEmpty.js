/**
 *   Skipping Effects (Empty Array Dependency)
 *  "useEffect" is passed an empty array, [] , the effect function will be called only on mount.
 *
 *  Click the button and you'll see that the effect function isn't invoked.
 */

import React, { useEffect, useState } from "react";

const Empty = () => {
  const [randomNumber, setRandomNumber] = useState(0);
  const [effectLogs, setEffectLogs] = useState([]);

  useEffect(() => {
    setEffectLogs((prevEffectLogs) => [
      ...prevEffectLogs,
      "effect fn has been invoked!",
    ]);
  }, []);
  return (
    <div>
      <h1>{randomNumber}</h1>
      <button
        onClick={() => {
          setRandomNumber(Math.random());
        }}
      >
        Generate random number!
      </button>
      <div>
        {effectLogs.map((effect, index) => (
          <div key={index}>{"🍔".repeat(index) + effect}</div>
        ))}
      </div>
    </div>
  );
};
export default Empty;
