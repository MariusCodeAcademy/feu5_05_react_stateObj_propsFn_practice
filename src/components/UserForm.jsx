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
  const [formSent, setFormSent] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  function handleFormSubmit(e) {
    // perimti formos valdyma ir neleisti perkrauti
    e.preventDefault();
    console.log('lets react');
    console.log(inputs);
    setFormSent(true);
    setCurrentStep(2);
  }

  function handleInput(e) {
    const field = e.target.name;
    const value = e.target.value;
    // const { name, value } = e.target;
    setInputs({ ...inputs, [field]: value });
  }

  return (
    <div className='container'>
      <h2>UserForm {currentStep}/3</h2>
      {currentStep === 1 && (
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
      )}
      {currentStep === 2 && (
        <div className='formSuccess'>
          <h2>Patikrinkite duomenis</h2>
          <p>
            Name: {inputs.firstName}, Lastname: {inputs.lastName}
          </p>
          <p>Town: {inputs.town}</p>
          <Btn onClick={() => setCurrentStep(1)}>Go back</Btn>
          <Btn onClick={() => setCurrentStep(3)}>Siusti</Btn>
        </div>
      )}

      {currentStep === 3 && <div>Forma isiusta</div>}
    </div>
  );
}

export default UserForm;

// supildzius ir pateikus forma, forma paslepiam
// rodom html kortele su visais uzpildytais duomenimis
// pridedi mygtuka "back" kuris atgal parodytu forma ir pasleptu kortele
