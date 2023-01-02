import React, { useState } from "react";

function CreateHouse ({ addHouse }){
  const [formInput, setFormInput] = useState({
    owner_first_name: '',
    owner_last_name: '',
    street: '',
    city: '',
    state: '',
    zip: '',
    image: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // needs login fetch logic
    fetch('/houses', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formInput)
    }).then((resp) => {
      if (resp.ok) {
        resp.json().then(house => addHouse(house))
      } else {
        resp.json().then((error) => console.log(error))
      }
    })
  }

  const handleChange = (e) => {
    setFormInput({...formInput, [e.target.name]: e.target.value})
  }

  return (
    <div>
      <h1>Add a New House</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="owner_first_name" placeholder="First Name" value={formInput.owner_first_name} onChange={handleChange} required/>
        <input type="text" name="owner_last_name" placeholder="Last Name" value={formInput.owner_last_name} onChange={handleChange} required/>
        <input type="text" name="street" placeholder="Street" value={formInput.street} onChange={handleChange} required/>
        <input type="text" name="city" placeholder="City" value={formInput.city} onChange={handleChange} required/>
        <input type="text" name="state" placeholder="State" value={formInput.state} onChange={handleChange} required/>
        <input type="text" name="zip" placeholder="Zip" value={formInput.zip} onChange={handleChange} required/>
        <input type="text" name="image" placeholder="Image URL" value={formInput.image} onChange={handleChange} />
        <button>Add House</button>
      </form>
    </div>
  );
}

export default CreateHouse;