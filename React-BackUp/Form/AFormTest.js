import React, { useState } from "react";
import "./styles.css";

function Form() {
  const [enteredText, setEnteredText] = useState("");
  const [submittedText, setSubmittedText] = useState(null);

  const textChangeHandler = (e) => {
    setEnteredText(e.target.value);
    console.log(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setSubmittedText(enteredText);
    setEnteredText("");
  };

  return (
    <div className="App">
      <h1>Get User Input</h1>
      <form onSubmit={submitHandler}>
        <input
          placeholder="type something"
          type="text"
          value={enteredText}
          onChange={textChangeHandler}
        />
        <button type="submit">Submit</button>
      </form>
      {submittedText && <p>You just typed: {submittedText}</p>}
    </div>
  );
}
export default Form;
