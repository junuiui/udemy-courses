import { useState } from "react";

export default function Login() {
  const [enteredValues, setEnteredValues] = useState({
    email: '',
    password: '',
  });

  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false,
  });

  const emailIsInvalid = didEdit.email && !enteredValues.email.includes('@');

  function handleSubmit(event) {
    event.preventDefault();

    console.log(enteredValues)
  }

  function handleReset() {
    console.log(
      '%cLogin.jsx%c Reset Button Pressed',
      'color: yellow; background: red; font-weight: bold; padding: 2px 4px;',
      'color: green; background: yellow; font-weight: bold;'
    );

    // Todo
  }

  function handleInputChange(identifier, value) {
    setEnteredValues((prevValues) => ({
      ...prevValues,
      [identifier]: value,
    }))

    setDidEdit(prev => ({
      ...prev,
      [identifier]: false,
    }))
  }

  // when lose focus!
  function handleInputBlur(identifier) {
    setDidEdit(prev => ({
      ...prev,
      [identifier]: true
    }))
  }


  return (
    // form onSubmit is in here, not on the Submit button!
    <form onSubmit={ handleSubmit }>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onBlur={() => handleInputBlur('email')}
            onChange={ (event) => handleInputChange('email', event.target.value) } // Using onchange, error detected too EARLY
            value={ enteredValues.email } />
          <div className="control-error">{ emailIsInvalid && <p>Invalid email! has to include '@'</p> }</div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password" />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat" onClick={ handleReset }>Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}