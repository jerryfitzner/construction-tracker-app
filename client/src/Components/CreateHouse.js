import React, { useState } from "react";

const beginningState = {
  owner_first_name: '',
  owner_last_name: '',
  street: '',
  city: '',
  state: '',
  zip: '',
  image: ''
};

function CreateHouse ({ addHouse, handleClick }){
  const [formInput, setFormInput] = useState(beginningState);

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
        resp.json().then(house => {
          setFormInput(formInput);
          addHouse(house);
          handleClick();
        })
      } else {
        resp.json().then((error) => console.log(error))
      }
    })
  }

  const handleChange = (e) => {
    setFormInput({...formInput, [e.target.name]: e.target.value})
  }

  return (
    <div className="House-form">
      <h3>Add a New House</h3>
      <br/>
      <form onSubmit={handleSubmit}>
        <input type="text" name="owner_first_name" placeholder="Owner First Name" value={formInput.owner_first_name} onChange={handleChange} required/>
        <input type="text" name="owner_last_name" placeholder="Owner Last Name" value={formInput.owner_last_name} onChange={handleChange} required/>
        <br/>
        <input type="text" name="street" placeholder="Street" value={formInput.street} onChange={handleChange} required/>
        <input type="text" name="city" placeholder="City" value={formInput.city} onChange={handleChange} required/>
        <input type="text" name="state" placeholder="State" value={formInput.state} onChange={handleChange} required/>
        <input type="text" name="zip" placeholder="Zip" value={formInput.zip} onChange={handleChange} required/>
        {/* <input type="text" name="image" placeholder="House Image URL" value={formInput.image} onChange={handleChange} /> */}
        <br/>
        <button>Add House</button>
        <button onClick={handleClick}>Close</button>
      </form>
    </div>
  );
}

export default CreateHouse;