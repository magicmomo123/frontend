import { useCallback } from 'react';
import React, { useState } from 'react';
import { Handle, Position } from 'react-flow-renderer';

import '../../text-updater-node.css';

function RailControlNode({ data }) {
  const [metStep, setMetStep] = useState(0);
  const onMetStepChange = useCallback((evt) => {
    setMetStep(evt.target.value);
    data.metStep = evt.target.value
  }, []);
  // const [startPosition, setStartPosition] = useState(0);
  // const onStartPosChange = useCallback((evt) => {
  //   setStartPosition(evt.target.value);
  //   data.startPosition = evt.target.value
  // }, []);
  // const [endPosition, setEndPosition] = useState(0.5);
  // const onEndPositionChange = useCallback((evt) => {
  //   setEndPosition(evt.target.value);
  //   data.endPosition = evt.target.value
  // }, []);

  return (
    <div className="text-updater-node">
      <Handle type="target" position={Position.Top} />
      <h6>Rail Controller</h6>
      <div>
        {/* <label htmlFor="text">Start Position:</label>
        <input id="text" name="text" value={startPosition} onChange={onStartPosChange} />
        <br/>
        <br/>
        <label htmlFor="text">End Position:</label>
        <input id="text" name="text" value={endPosition} onChange={onEndPositionChange} />
        <br/>
        <br/> */}
        <label htmlFor="text">Meters per step:</label>
        <input id="text" name="text" value={metStep} onChange={onMetStepChange} />
        
      </div>
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
}

export default RailControlNode;