import React, { useState } from "react";

function SignUp ({ setCont }){
  const [signupForm, setSignupForm] = useState({
    name: '',
    specialty: '',
    company: '',
    city: '',
    state: '',
    username: '',
    password: '',
    password_confirmation: ''
  });

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
      r.json().then((cont) => setCont(cont))
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Sign-Up</h1>
        <input type="text" placeholder="Name" value={signupForm.name} name="name" onChange={handleChange} required />
        <input type="text" placeholder="Specialty" value={signupForm.specialty} name="specialty" onChange={handleChange} required/>
        <input type="text" placeholder="Company" value={signupForm.company} name="company" onChange={handleChange} required/>
        <input type="text" placeholder="City" value={signupForm.city} name="city" onChange={handleChange} required/>
        <input type="text" placeholder="State" value={signupForm.state} name="state" onChange={handleChange} required/>
        <input type="text" placeholder="Username" value={signupForm.username} name="username" onChange={handleChange} required/>
        <input type="text" placeholder="Password" value={signupForm.password} name="password" onChange={handleChange} required/>
        <input type="text" placeholder="Password Confirmation" value={signupForm.password_confirmation} name="password_confirmation" onChange={handleChange} required/>
        <button>Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;