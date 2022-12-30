import React, { useState } from "react";

function CreateHouse (){
  const [formInput, setFormInput] = useState({
    username: '',
    password: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    // needs login fetch logic
  }

  const handleChange = (e) => {
    setFormInput({...formInput, [e.target.name]: e.target.value})
  }

  return (
    <div>
      <h1>CreateHouse</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="Username" value={formInput.username} onChange={handleChange} required/>
        <input type="text" name="password" placeholder="Password" value={formInput.password} onChange={handleChange} required/>
        <button>Sign In</button>
      </form>
    </div>
  );
}

export default CreateHouse;