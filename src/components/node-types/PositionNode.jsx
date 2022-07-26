import { useCallback } from 'react';
import React, { useState } from 'react';
import { Handle, Position } from 'react-flow-renderer';

import '../../text-updater-node.css';

function PositionNode({ data }) {
  const [startAngle, setStartAngle] = useState(0);
  const onStartAngleChange = useCallback((evt) => {
    setStartAngle(evt.target.value);
    data.startAngle = evt.target.value
  }, []);
  const [endAngle, setEndAngle] = useState(360);
  const onEndAngleChange = useCallback((evt) => {
    setEndAngle(evt.target.value);
    data.endAngle = evt.target.value
  }, []);
  const [degrees, setDegrees] = useState(0);
  const onDegreeChange = useCallback((evt) => {
    console.log(evt.target.value);
    setDegrees(evt.target.value);
    data.degrees = evt.target.value
  }, []);

  const [x_pos, setStartXPos] = useState(0);
  const onStartXPosChange = useCallback((evt) => {
    setStartXPos(evt.target.value);
    data.startXPos = evt.target.value;
  }, []);


  return (
    <div className="text-updater-node">
      <Handle type="target" position={Position.Top} />
      <h6>Position Node</h6>
        <form>
        <label htmlFor="text">X:</label>
        <input id="text" name="text" value={degrees} onChange={onStartXPosChange} />
        <br />
        <br />
        </form>
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
}

export default PositionNode;