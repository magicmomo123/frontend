import React, { useState, useRef, useCallback } from 'react';
import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  useNodesState,
  useEdgesState,
  Controls,
} from 'react-flow-renderer';

import NodeBank from './NodeBank';
import TextUpdaterNode from './node-types/TextUpdaterNode';

import '../index.css';
import '../text-updater-node.css'
import NodeInfo from './NodeInfo';
import HeadControlNode from './node-types/HeadControlNode';
import RailControlNode from './node-types/RailControlNode';
import PlayRecordNode from './node-types/PlayRecordNode';
import ForLoopNode from './node-types/ForLoopNode';
import StartNode from './node-types/StartNode';
import { nodeDefaultData } from './node-types/Nodetypes';


const nodeTypes = { 
  headControl: HeadControlNode, 
  railControl: RailControlNode, 
  playRecord: PlayRecordNode, 
  forLoop: ForLoopNode, 
  start: StartNode, 

};

const initialNodes = [
  {
    id: '0',
    type: 'headControl', 
    position: { x: 0, y: 0 },
    data: { degrees: 0, direction: "cw"}
  },
];

let id = 1;
const getId = () => `${id++}`;
// https://reactflow.dev/docs/examples/drag-and-drop/


const NodeMap = () => {
  const reactFlowWrapper = useRef(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);

  const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), []);

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
      const type = event.dataTransfer.getData('application/reactflow');

      // check if the dropped element is valid
      if (typeof type === 'undefined' || !type) {
        return;
      }

      const position = reactFlowInstance.project({
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top,
      });
      const newNode = {
        id: getId(),
        type,
        position,
        data: nodeDefaultData[type],
      };

      setNodes((nds) => nds.concat(newNode));
    },
    [reactFlowInstance]
  );

  return (
    <div className="dndflow">
      <ReactFlowProvider>
        <div className="reactflow-wrapper" ref={reactFlowWrapper}>
          <ReactFlow
            nodes={nodes}
            nodeTypes={nodeTypes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            onInit={setReactFlowInstance}
            onDrop={onDrop}
            onDragOver={onDragOver}
            
            fitView
          >
            <Controls />
          </ReactFlow>
        </div>
        <NodeBank />
        <NodeInfo nodes={nodes} setNodes={setNodes} edges={edges} />
      </ReactFlowProvider>
    </div>
  );
};

export default NodeMap;
