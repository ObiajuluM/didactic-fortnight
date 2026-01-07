import { useState } from "react";
import "./App.css";

function App() {
  // function signUp(event) {
  //   event.preventDefault();

  //
  //   const formData = new FormData(event.currentTarget);
  //   const email = formData.get("email");
  //   const password = formData.get("password");

  //   console.log({ email, password }); // object shorthand to log an object with those two values.
  //   event.currentTarget.reset();
  // }

  // react 19 way
  // automatic event.preventDefault() and form reset after submission
  // and the form data is passed as the first argument
  function signUp(formData) {
    const email = formData.get("email");
    const password = formData.get("password");
    const employmentStatus = formData.get("employmentStatus");
    const dietaryRestrictions = formData.getAll("dietaryRestrictions"); // getAll for checkboxes to get all selected values

    console.log({ email, password, employmentStatus }); // object shorthand to log an object with those two values.
    console.log(dietaryRestrictions);
  }

  return (
    <section>
      <h1>Sign Up Form!</h1>

      <form
        // method="POST" // not neccessary for react 19
        // onSubmit={signUp}

        // react 19
        action={signUp}
      >
        <label
          htmlFor="email" // It should match the id of the input it labels.
        >
          Email Address
        </label>
        <input
          id="email" // linking the label to the input
          type="email"
          // to access the value of the input, we need to add a
          name="email"
          placeholder="joe@schmoe.com"
          defaultValue="joe@schmoe.com" // pre-filling the input with a value
        />
        <br />

        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          // to access the value of the input, we need to add a name
          name="password"
          placeholder="Enter your password"
        />
        <br />

        <button type="submit">Sign Up</button>

        {/* text area example for bigger inputs*/}
        <label htmlFor=""></label>
        <textarea name="" id="" defaultValue="this is some text"></textarea>

        {/* creates the black border and supports label on border */}
        <fieldset>
          <legend>Emplyoment Status</legend>

          {/* radio: same name makes for single select*/}
          <label htmlFor="">
            <input
              type="radio"
              name="employmentStatus"
              value="employed" // to access the value of the input we need to add a value
            />
            employed
          </label>
          <label htmlFor="">
            <input type="radio" name="employmentStatus" value="unemployed" />
            unemployed
          </label>
          <label htmlFor="">
            <input
              type="radio"
              name="employmentStatus"
              value="student"
              defaultChecked={true} // pre-selecting this option
            />
            student
          </label>
        </fieldset>

        {/* Checkbox */}
        <fieldset>
          <legend>Dietary Restrictions</legend>

          {/* radio: same name makes for single select*/}
          <label htmlFor="">
            <input
              type="checkbox"
              name="dietaryRestrictions" // same name for grouping
              value="beef" // to access the value of the input we need to add a value
            />
            beef
          </label>
          <label htmlFor="">
            <input type="checkbox" name="dietaryRestrictions" value="pork" />
            pork
          </label>
          <label htmlFor="">
            <input
              type="checkbox"
              name="dietaryRestrictions"
              value="kosher"
              defaultChecked={true} // pre-selecting this option
            />
            kosher
          </label>
        </fieldset>
      </form>
    </section>
  );
}

export default App;
