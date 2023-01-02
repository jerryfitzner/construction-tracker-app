import React, { useState } from "react";

const beginningState = {
  username: '',
  password: ''
};

function SignIn ({ setCont }){
  const [error, setError] = useState('');
  const [signInForm, setSignInForm] = useState(beginningState);

  const handleChange = (e) => {
    setSignInForm({...signInForm, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('/login', {
      method: 'POST',
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(signInForm),
    }).then((r) => {
      if (r.ok) {
        r.json().then((cont) => {
          setSignInForm(beginningState);
          setCont(cont)
        });
      } else {
        r.json().then((error) => setError(error.error))
      }
    });
  }


  return (
    <div>
      <h1>SignIn</h1>
      <form onSubmit={ handleSubmit }>
        <input type="text" placeholder="Username" name="username" value={ signInForm.username } onChange={ handleChange } required/>
        <input type="text" placeholder="Password" name="password" value={ signInForm.password } onChange={ handleChange } required/>
        <button>Sign In</button>
      </form>
      <div>
        {error}
      </div>
    </div>
  );
}

export default SignIn;