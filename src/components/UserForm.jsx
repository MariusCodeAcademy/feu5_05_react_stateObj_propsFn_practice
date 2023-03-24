import Btn from './ui/Btn';

function UserForm() {
  function handleBtnClick() {
    console.log('paspaudei');
  }

  return (
    <div>
      <h2 onClick={handleBtnClick}>UserForm</h2>
      <Btn onClick={handleBtnClick}>Click me</Btn>
      <form>form</form>
    </div>
  );
}

export default UserForm;
