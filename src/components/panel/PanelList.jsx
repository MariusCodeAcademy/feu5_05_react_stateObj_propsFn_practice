import React, { useState } from 'react';
import Card from '../ui/card/Card';
import Panel from './Panel';

// sukti cikla per gauta masyva ir generuoti Panels

function PanelList(props) {
  const [panelsArr, setPanelsArr] = useState([...props.list]);

  function togglePannel(idToToggle) {
    console.log('idToToggle ===', idToToggle);
    // sukti map per panelsArr
    // ieskoti elemento su id lygiu idToToggle
    // suradus grazinti jo kopija su priesga isExpanded verte
    // jei id yra ne tas kurio ieskom (else) tai grazinam kopija kurioje isExpanded nustatom i false
  }

  return (
    <Card>
      {panelsArr.map((pObj) => (
        <Panel
          key={pObj.id}
          title={pObj.title}
          openCurrentPanel={() => togglePannel(pObj.id)}
          showText={pObj.isExpanded}
        >
          {pObj.content}
        </Panel>
      ))}
    </Card>
  );
}

export default PanelList;
