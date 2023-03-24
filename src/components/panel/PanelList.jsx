import React, { useState } from 'react';
import Card from '../ui/card/Card';
import Panel from './Panel';

function PanelList() {
  const [currentOpenPanelIndex, setCurrentOpenPanelIndex] = useState(0);

  return (
    <Card>
      <Panel showText={currentOpenPanelIndex === 1}></Panel>
      <Panel showText={currentOpenPanelIndex === 2}></Panel>
      <Panel showText={currentOpenPanelIndex === 3}></Panel>
    </Card>
  );
}

export default PanelList;
