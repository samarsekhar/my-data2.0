// Functional setState
// The updater function returned from invoking useState can also take a function similar to the good ol' setState.

/**
 * const [value, updateValue] = useState(0)
 * // both forms of invoking updateValue are valid
 *
 * updateValue(1);
 * updateValue(previousValue => previousValue + 1)
 *
 */

//this is ideal when the state update depends on some previous value of state.

import React, { useState } from "react";

const FunctionalState = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <h3>Count value is: {count}</h3>
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Plus(+)
      </button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>
        Minus(-)
      </button>
    </>
  );
};
export default FunctionalState;
