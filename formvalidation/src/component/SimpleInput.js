import { useState, useEffect } from "react";
import "./App.css";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [nameIsValid, setNameIsValid] = useState(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  useEffect(() => {
    if (nameIsValid) {
      console.log("Name input is valid");
    }
  }, [nameIsValid]);

  const enteredNameChangeHandler = (event) => {
    setEnteredName(event.target.value);
    if (enteredName.trim() !== "") {
      setNameIsValid(true);
    }
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    setEnteredNameTouched(true);

    if (enteredName.trim() === "") {
      setNameIsValid(false);
    }
    setNameIsValid(true);

    console.log(enteredName);
  };
  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true);
    if (enteredName.trim() === "") {
      setNameIsValid(false);
      return;
    }
  };

  const nameInputIsInvalid = !nameIsValid && enteredNameTouched;
  const nameInputClass = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClass}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={enteredNameChangeHandler}
          onBlur={nameInputBlurHandler}
        />
      </div>
      {nameInputIsInvalid && (
        <p className="error-text">You must enter a valid name.</p>
      )}
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
