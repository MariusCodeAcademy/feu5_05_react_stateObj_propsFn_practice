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

  function hancleFormSubmit() {
    // perimti formos valdyma ir neleisti perkrauti
  }

  function handleFirstnameInput() {
    inputs.firstName = '';
  }
  function handleLastnameInput() {
    inputs.lastName = '';
  }

  return (
    <div className='container'>
      <h2 onClick={handleBtnClick}>UserForm</h2>
      <Btn className='' onClick={handleBtnClick}>
        Click me
      </Btn>
      <form>
        <input type='text' name='firstName' placeholder='first Name' />
        <input type='text' name='lastName' placeholder='Last Name' />
        <input type='text' name='town' placeholder='Town' />
        <input type='text' name='hobbies' placeholder='hobbies' />
        <input type='number' name='age' placeholder='age' />
        <input type='number' name='height' placeholder='height' />
        <Btn submit>Add</Btn>
      </form>
    </div>
  );
}

export default UserForm;
