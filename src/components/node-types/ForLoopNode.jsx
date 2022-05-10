import { useCallback } from 'react';
import React, { useState } from 'react';
import { Handle, Position } from 'react-flow-renderer';

import '../../text-updater-node.css';
import { robotNodeTypes } from './Nodetypes';

function ForLoopNode({ data }) {

  const [firstIndex, setFirstIndex] = useState(0);
  const onFirstIndexChange = useCallback((evt) => {
    console.log(evt.target.value);
    setFirstIndex(evt.target.value);
    data.firstIndex = evt.target.value
  }, []);

  const [lastIndex, setLastIndex] = useState(1);
  const onLastIndexChange = useCallback((evt) => {
    console.log(evt.target.value);
    setLastIndex(evt.target.value);
    data.lastIndex = evt.target.value
  }, []);

  const [robotType, setRobotType] = useState("")
  const onRobotTypeChange = useCallback((evt) => {
    setRobotType(evt.target.value);
    data.robotType = evt.target.value
  }, []);

  return (
    <div className="text-updater-node">
      <Handle type="target" position={Position.Top} />
      <h6>For Loop</h6>
        <form>
        <label htmlFor="text">First Index:</label>
        <input id="text" name="text" value={firstIndex} onChange={onFirstIndexChange} />
        <br />
        <br />
        <label htmlFor="text">Last Index:</label>
        <input id="text" name="text" value={lastIndex} onChange={onLastIndexChange} />
        <br />
        <br />
        <label htmlFor="selector">NodeType:</label>
        <select value={robotType} onChange={onRobotTypeChange} >
            {robotNodeTypes.map((nodeType) => {
                return <option value={nodeType}>{nodeType}</option>
            })
            }
        {/* //   <option value="head">Clockwise</option>
        //   <option value="rail">Counterclockwise</option> */}
        </select>
        </form>
        <p style={{textAlign: "center"}}>body</p>
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
}

export default ForLoopNode;