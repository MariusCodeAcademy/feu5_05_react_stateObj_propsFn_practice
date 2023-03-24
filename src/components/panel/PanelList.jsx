import React, { useState } from 'react';
import Card from '../ui/card/Card';
import Panel from './Panel';

function PanelList() {
  const [currentOpenPanelIndex, setCurrentOpenPanelIndex] = useState(0);

  return (
    <Card>
      <Panel
        openCurrentPanel={() => setCurrentOpenPanelIndex(1)}
        showText={currentOpenPanelIndex === 1}
      ></Panel>
      <Panel
        openCurrentPanel={() => setCurrentOpenPanelIndex(2)}
        showText={currentOpenPanelIndex === 2}
      ></Panel>
      <Panel
        openCurrentPanel={() => setCurrentOpenPanelIndex(3)}
        showText={currentOpenPanelIndex === 3}
      ></Panel>
    </Card>
  );
}

export default PanelList;
