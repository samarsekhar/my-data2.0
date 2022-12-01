/**
 *  Skipping Effects (Array Dependency)
 *
 *  "useEffect" is passed an array of one value, [randomNumber], the effect function will be called on mount and whenever a new "randomNumber" is generated.
 *  Click the "Generate random number" button to this.
 */

import React, { useEffect, useState } from "react";

const SkippingEffect = () => {
  const [randomNumber, setRandomNumber] = useState(0);
  const [effectLogs, setEffectLogs] = useState([]);

  useEffect(() => {
    setEffectLogs((prevEffectLogs) => [
      ...prevEffectLogs,
      "effect fn has been invoked",
    ]);
  }, [randomNumber]);
  return (
    <div>
      <h1>{randomNumber}</h1>
      <button
        onClick={() => {
          setRandomNumber(Math.random());
        }}
      >
        Generate random rumber!
      </button>
      <div>
        {effectLogs.map((effect, index) => (
          <div key={index}>{"🍔".repeat(index) + effect}</div>
        ))}
      </div>
    </div>
  );
};
export default SkippingEffect;
