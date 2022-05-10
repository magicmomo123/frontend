import React, { useCallback } from 'react';
import { useStore } from 'react-flow-renderer';
import { useAlert } from 'react-alert'
import { nodeTypesMap } from './node-types/Nodetypes';

const transformSelector = (state) => state.transform;

export default ({ nodes, setNodes, edges }) => {
  const transform = useStore(transformSelector);
  const alert = useAlert()

  function submitInfo (ns, edges) {
    // ADD actual sending info to backend here:
    alert.show(
      // (nodes.map((node) => {
      //   if (node.type == "headControl") 
      //     return `${nodeTypesMap[node.type]}` + " " + `${node.id}` + "- degrees: " + `${node.data.degrees}` + ", direction: " + `${node.data.direction}`;
      // })
      "See console for message"
      // this can be changed to any of the code below in the return statement
    )

    for (let node in ns) {
      if (node.type == "start") {
        let start_edges = edges.filter(edge => edge.source == node.id)
      }
    }
  }

  return (
    <aside>
      <div className="description">
        Available information to convert into JSON and send to backend
      </div>
      <div className="title">Zoom & pan transform</div>
      <div className="transform">
        [{transform[0].toFixed(2)}, {transform[1].toFixed(2)}, {transform[2].toFixed(2)}]
      </div>
      <div className="title">Nodes</div>
      {nodes.map((node) => (
        <div key={node.id}>
          Node {node.id} - x: {node.position.x.toFixed(2)}, y: {node.position.y.toFixed(2)}
        </div>
      ))}

      <div className="title">Connections</div>
      {edges.map((edge) => (
        <div key={edge.id}>
          Edge {edge.id} - from: {edge.source}, to: {edge.target}
        </div>
      ))}

      <div className="title">Text Information</div>
      {nodes.map((node) => {
        if (node.type == "headControl") 
          return <div key={node.id}>
              {nodeTypesMap[node.type]} {node.id} - degrees: {node.data.degrees}, direction: {node.data.direction}
            </div>
        else if (node.type == "railControl")
          return <div key={node.id}>
          {nodeTypesMap[node.type]} {node.id} -  meters: {node.data.meters}
        </div>
        else if (node.type == "playRecord")
          return <div key={node.id}>
          {nodeTypesMap[node.type]} {node.id} -  input file: {node.data.inputFile}, input channels: {node.data.inputChannels}
        </div>
            
      })}

      <div className="selectall">
        <button onClick={() => submitInfo(nodes)}>SUBMIT</button>
      </div>
    </aside>
  );
};
