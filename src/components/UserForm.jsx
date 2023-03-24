import Btn from './ui/Btn';

function UserForm() {
  function handleBtnClick() {
    console.log('paspaudei');
  }

  return (
    <div className='container'>
      <h2 onClick={handleBtnClick}>UserForm</h2>
      <Btn className='tomato' onClick={handleBtnClick}>
        Click me
      </Btn>
      <form>form</form>
    </div>
  );
}

export default UserForm;
