import React, { useState } from "react";

function SignIn ({ setCont }){
  const [signInForm, setSignInForm] = useState({
    username: '',
    password: ''
  });

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
        r.json().then((cont) => setCont(cont));
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
    </div>
  );
}

export default SignIn;