import React, { useState } from "react";

const beginningState = {
  name: '',
  specialty: '',
  company: '',
  city: '',
  state: '',
  username: '',
  password: '',
  password_confirmation: ''
};

function SignUp ({ setCont }){
  const [signupForm, setSignupForm] = useState(beginningState);

  const handleChange = (e) => {
    setSignupForm({...signupForm, [e.target.name]: e.target.value})
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submit")
    fetch('/signup', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(signupForm)
    }).then((r) => {
      r.json().then((cont) => {
        setSignupForm(beginningState);
        setCont(cont);
      });
    });
  };

  return (
    <div className="First-form">
      <form onSubmit={handleSubmit}>
        <h1>Sign-Up</h1>
        <input type="text" placeholder="First and Last Name" value={signupForm.name} name="name" onChange={handleChange} required />
        <br/>
        <input type="text" placeholder="Company Name" value={signupForm.company} name="company" onChange={handleChange} required/>
        <br/>
        <input type="text" placeholder="Company Specialty" value={signupForm.specialty} name="specialty" onChange={handleChange} required/>
        <br/>
        <input type="text" placeholder="Company City" value={signupForm.city} name="city" onChange={handleChange} required/>
        <br/>
        <input type="text" placeholder="Company State" value={signupForm.state} name="state" onChange={handleChange} required/>
        <br/>
        <input type="text" placeholder="Username" value={signupForm.username} name="username" onChange={handleChange} required/>
        <br/>
        <input type="text" placeholder="Password" value={signupForm.password} name="password" onChange={handleChange} required/>
        <br/>
        <input type="text" placeholder="Password Confirmation" value={signupForm.password_confirmation} name="password_confirmation" onChange={handleChange} required/>
        <br/>
        <button>Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;