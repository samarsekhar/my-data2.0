import React, { useState } from "react";

const ObjectState = () => {
  const [state, setState] = useState({ age: 18, siblingsNum: 4 });
  const handleClick = (val) =>
    setState({
      ...state,
      [val]: state[val] + 1,
    });

  const { age, siblingsNum } = state;

  return (
    <div>
      <h3>Today I am {age} years of age.</h3>
      <h4>I have {siblingsNum} siblings!</h4>
      <div>
        <button onClick={handleClick.bind(null, "age")}>Get Older!</button>
        <button onClick={handleClick.bind(null, "siblingsNum")}>
          More Siblings!
        </button>
      </div>
    </div>
  );
};
export default ObjectState;

// As opposed to stringd and numbers, you could also use an object as the initial value passed on to useState.

// setState (object merge) vs useState (object replace)
// assume initial state is {name: "Ohans"}

// setState({ age: "unknown" })
// new object will be
// {name: "Ohans", age: "unknown"}

// useStateUpdater({ age: "unknown" })
// new state object will be
// {age: "unknown"} - initial object is replaced
// {age: "unknown"} - initial state object is replaced
