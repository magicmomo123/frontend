import { useCallback } from 'react';
import React, { useState } from 'react';
import { Handle, Position } from 'react-flow-renderer';

import '../../text-updater-node.css';

function StartNode({ data }) {

  return (
    <div className="text-updater-node">
      <h6>Start Node</h6>
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
}

export default StartNode;