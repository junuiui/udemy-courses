import { useState } from "react";
import { useRef } from "react";

export default function Login() {

  const [emailIsInvalid, setEmailIsInvalid] = useState(false);

  const email = useRef();
  const password = useRef();

  function handleSubmit(event) {
    event.preventDefault();
    console.log(
      '%cLogin.jsx%c Submit Button Pressed',
      'color: yellow; background: red; font-weight: bold; padding: 2px 4px;',
      'color: green; background: yellow; font-weight: bold;'
    );



    // Ref approach!
    // downside: resetting is much harder
    // resetting dom is not recommended
    const enteredEmail = email.current.value;
    const enteredPW = password.current.value;
    console.log(`   ID: ${enteredEmail}`);
    console.log(`   PW: ${enteredPW}`);

    // Validation
    const emailIsValid = enteredEmail.includes('@');
    if (!emailIsValid) {
      setEmailIsInvalid(true);
      return;
    }

    console.log(emailIsInvalid)

    setEmailIsInvalid(false);

    console.log('sending HTTP request....')
  }

  function handleReset() {
    console.log(
      '%cLogin.jsx%c Reset Button Pressed',
      'color: yellow; background: red; font-weight: bold; padding: 2px 4px;',
      'color: green; background: yellow; font-weight: bold;'
    );

    // Todo
  }


  return (
    // form onSubmit is in here, not on the Submit button!
    <form onSubmit={ handleSubmit }>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" ref={ email } />
          <div className="control-error">
            { emailIsInvalid && <p>Please Enter Valid email</p> }
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" ref={ password } />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat" onClick={ handleReset }>Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
