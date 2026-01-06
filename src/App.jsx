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

    console.log({ email, password }); // object shorthand to log an object with those two values.
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
        />
        <br />

        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          // to access the value of the input, we need to add a
          name="password"
          placeholder="Enter your password"
        />
        <br />

        <button type="submit">Sign Up</button>
      </form>
    </section>
  );
}

export default App;
