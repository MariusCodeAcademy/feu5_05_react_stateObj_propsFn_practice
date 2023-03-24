function Btn(props) {
  return (
    <button type={props.submit && 'submit'} className={props.className} onClick={props.onClick}>
      {props.children}
    </button>
  );
}

export default Btn;
