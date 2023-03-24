import { useState } from 'react';
import Card from '../ui/card/Card';

function Panel(props) {
  // const [showText, setShowText] = useState(false);

  function openPanel() {
    // setShowText(!showText);
    props.openCurrentPanel();
  }

  return (
    <Card>
      <h3 style={{ fontSize: '1.8rem' }} onClick={openPanel}>
        {props.title}
      </h3>
      {!props.showText && <button onClick={openPanel}>show</button>}
      {props.showText && <p>{props.children}</p>}
    </Card>
  );
}

export default Panel;
