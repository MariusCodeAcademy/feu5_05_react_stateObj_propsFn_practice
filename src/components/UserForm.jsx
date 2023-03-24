import { useState } from 'react';
import Btn from './ui/Btn';

function UserForm() {
  const [inputs, setInputs] = useState({
    firstName: '',
    lastName: '',
    town: '',
    hobbies: '',
    age: '',
    height: '',
  });

  function handleFormSubmit(e) {
    // perimti formos valdyma ir neleisti perkrauti
    e.preventDefault();
    console.log('lets react');
    console.log(inputs);
  }

  function handleInput(e) {
    const field = e.target.name;
    const value = e.target.value;
    // const { name, value } = e.target;
    setInputs({ ...inputs, [field]: value });
  }

  return (
    <div className='container'>
      <h2>UserForm</h2>
      <p>
        Name: {inputs.firstName}, Lastname: {inputs.lastName}
      </p>
      <form onSubmit={handleFormSubmit}>
        <input
          value={inputs.firstName}
          onChange={handleInput}
          type='text'
          name='firstName'
          placeholder='first Name'
        />
        <input
          value={inputs.lastName}
          onChange={handleInput}
          type='text'
          name='lastName'
          placeholder='Last Name'
        />
        <input
          value={inputs.town}
          onChange={handleInput}
          type='text'
          name='town'
          placeholder='Town'
        />
        <input
          value={inputs.hobbies}
          onChange={handleInput}
          type='text'
          name='hobbies'
          placeholder='hobbies'
        />
        <input
          value={inputs.age}
          onChange={handleInput}
          type='number'
          name='age'
          placeholder='age'
        />
        <input
          value={inputs.height}
          onChange={handleInput}
          type='number'
          name='height'
          placeholder='height'
        />
        <Btn submit>Add</Btn>
      </form>
    </div>
  );
}

export default UserForm;

// supildzius ir pateikus forma, forma paslepiam
// rodom html kortele su visais uzpildytais duomenimis
// pridedi mygtuka "back" kuris atgal parodytu forma ir pasleptu kortele
