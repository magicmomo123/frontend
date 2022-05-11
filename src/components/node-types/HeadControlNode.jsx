import { useCallback } from 'react';
import React, { useState } from 'react';
import { Handle, Position } from 'react-flow-renderer';

import '../../text-updater-node.css';

function HeadControlNode({ data }) {
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

  const [direction, setDirection] = useState("cw")
  const onDirectionChange = useCallback((evt) => {
    setDirection(evt.target.value);
    data.direction = evt.target.value
  }, []);

  return (
    <div className="text-updater-node">
      <Handle type="target" position={Position.Top} />
      <h6>Head Controller</h6>
        <form>
        {/* <label htmlFor="text">Start Angle:</label>
        <input id="text" name="text" value={startAngle} onChange={onStartAngleChange} />
        <br />
        <br />
        <label htmlFor="text"> End Angle:</label>
        <input id="text" name="text" value={endAngle} onChange={onEndAngleChange} />
        <br />
        <br /> */}
        <label htmlFor="text">Degrees per step:</label>
        <input id="text" name="text" value={degrees} onChange={onDegreeChange} />
        <br />
        <br />
        <label htmlFor="selector">Direction:</label>
        <select value={direction} onChange={onDirectionChange} >
          <option value="cw">Clockwise</option>
          <option value="ccw">Counterclockwise</option>
        </select>
        </form>
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
}

export default HeadControlNode;