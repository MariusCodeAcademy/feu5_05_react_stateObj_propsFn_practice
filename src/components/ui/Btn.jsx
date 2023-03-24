function Btn(props) {
  return <button onClick={props.onClick}>{props.children}</button>;
}

export default Btn;
