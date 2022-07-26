import React from 'react';

// nodeTypes={nodeTypes}
export default () => {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <aside>
      <div className="description">You can drag these nodes to the blue area.</div>
      <div className="dndnode output" onDragStart={(event) => onDragStart(event, 'headControl')} draggable>
        Head Control Node
      </div>
      <div className="dndnode output" onDragStart={(event) => onDragStart(event, 'railControl')} draggable>
        Rail Control Node
      </div>
      <div className="dndnode output" onDragStart={(event) => onDragStart(event, 'playRecord')} draggable>
        Play Record Node
      </div>
      <div className="dndnode output" onDragStart={(event) => onDragStart(event, 'forLoop')} draggable>
        For Loop Node
      </div>
      <div className="dndnode output" onDragStart={(event) => onDragStart(event, 'start')} draggable>
        Start Node
      </div>


    </aside>
  );
};
