import { useState } from "react";
import "./App.css";

const BasicForm = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [formIsValid, setFormValidation] = useState(true);
  const [isTouched, setIsTouched] = useState(false); // Renamed for clarity

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    setIsTouched(true);

    if (
      firstName.trim() === "" ||
      lastName.trim() === "" ||
      email.trim() === "" ||
      !email.includes("@") ||
      firstName.length <= 5 ||
      lastName.length <= 6
    ) {
      setFormValidation(false);
      return;
    }

    setFormValidation(true);

    console.log(firstName);
    console.log(lastName);
    console.log(email);

    // Optional: Reset form fields after submission
    setFirstName("");
    setLastName("");
    setEmail("");
    setIsTouched(false); // Reset touch state
  };

  const firstNameIsInvalid = isTouched && firstName.trim() === "";
  const lastNameIsInvalid = isTouched && lastName.trim() === "";
  const emailIsInvalid =
    isTouched && (email.trim() === "" || !email.includes("@"));

  const firstNameClass = firstNameIsInvalid
    ? "form-control invalid"
    : "form-control";
  const lastNameClass = lastNameIsInvalid
    ? "form-control invalid"
    : "form-control";
  const emailClass = emailIsInvalid ? "form-control invalid" : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="control-group">
        <div className={firstNameClass}>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            value={firstName} // Fixed: Added value attribute
            onChange={(event) => setFirstName(event.target.value)}
          />
        </div>
        <div className={lastNameClass}>
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            value={lastName} // Fixed: Added value attribute
            onChange={(event) => setLastName(event.target.value)}
          />
        </div>
      </div>
      <div className={emailClass}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="email"
          id="email"
          value={email} // Fixed: Added value attribute
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
      {!formIsValid && (
        <p className="error-text">
          All fields must be valid and filled correctly!
        </p>
      )}
    </form>
  );
};

export default BasicForm;
