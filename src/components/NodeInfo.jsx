import React, { useCallback } from 'react';
import { useStore } from 'react-flow-renderer';
import { useAlert } from 'react-alert'
import { nodeTypesMap } from './node-types/Nodetypes';

const transformSelector = (state) => state.transform;

export default ({ nodes, setNodes, edges }) => {
  const transform = useStore(transformSelector);
  const alert = useAlert()
  var obj = {}
  function giveMaxNode(ns, edges, edge) {
    let min = -2000000
    let minNode = {}
    var startid = 100
    var mintargetid = 100
    var targetid = 100

     for (let item in edge) {
        startid = edge[item].source

        targetid = edge[item].target

        let targetnode = ns.filter(node => node.id === targetid)

        if (targetnode[0].position.x > min) {
          min = targetnode[0].position.x 
          minNode = targetnode
          mintargetid = targetid
          
        }

  }
    return [minNode, startid, mintargetid]
  }
  // function findParent(node) {
  //   for(let item in edges) {
  //     if(edges[item].target === node.id) {
  //       //console.log(node.id)
  //       //console.log(edges[item])
  //     }
  //   }
  // }
  
  function populateObject(nodearray) {
    //**THIS SOLUTION IS TENTATIVE. The reason behind the if statements is because I'm not sure of a better way to dynamically create a nested JS Object. This solution will be updated when I figure a better way out */
    obj = new Object()
    
    //findParent(node)
    let wd = []
    for (let i = 0; i < nodearray.length; i++) {
      let node = nodearray[i]
      console.log(node.type)
      
      if (node.type == 'forLoop') {

        let id = node.type + node.id
        
        console.log(wd)
        if (wd.length == 2) {
          obj[wd[0]][wd[1]][id] = {"start" : node.data.firstIndex, "end" : node.data.lastIndex, "type" : node.data.robotType}
          obj[wd[0]][wd[1]][id]["body"] = new Object()
        }
        if (wd.length == 3) {
          obj[wd[0]][wd[1]][wd[2]][id] = {"start" : node.data.firstIndex, "end" : node.data.lastIndex, "type" : node.data.robotType}
          obj[wd[0]][wd[1]][wd[2]][id]["body"] = new Object()
        }
        if (wd.length == 4) {
          obj[wd[0]][wd[1]][wd[2]][wd[3]][id] = {"start" : node.data.firstIndex, "end" : node.data.lastIndex, "type" : node.data.robotType}
          obj[wd[0]][wd[1]][wd[2]][wd[3]][id]["body"] = new Object()
        }
        if (wd.length == 5) {
          obj[wd[0]][wd[1]][wd[2]][wd[3]][wd[4]][id] = {"start" : node.data.firstIndex, "end" : node.data.lastIndex, "type" : node.data.robotType}
          obj[wd[0]][wd[1]][wd[2]][wd[3]][wd[4]][id]["body"] = new Object()
        }
        if (wd.length == 6) {
          obj[wd[0]][wd[1]][wd[2]][wd[3]][wd[4]][wd[5]][id] = {"start" : node.data.firstIndex, "end" : node.data.lastIndex, "type" : node.data.robotType}
          obj[wd[0]][wd[1]][wd[2]][wd[3]][wd[4]][wd[5]][id]["body"] = new Object()
        }
        if (wd.length == 7) {
          obj[wd[0]][wd[1]][wd[2]][wd[3]][wd[4]][wd[5]][wd[6]][id] = {"start" : node.data.firstIndex, "end" : node.data.lastIndex, "type" : node.data.robotType}
          obj[wd[0]][wd[1]][wd[2]][wd[3]][wd[4]][wd[5]][wd[6]][id]["body"] = new Object()
        }
        if (wd.length == 8) {
          obj[wd[0]][wd[1]][wd[2]][wd[3]][wd[4]][wd[5]][wd[6]][wd[7]][id] = {"start" : node.data.firstIndex, "end" : node.data.lastIndex, "type" : node.data.robotType}
          obj[wd[0]][wd[1]][wd[2]][wd[3]][wd[4]][wd[5]][wd[6]][wd[7]][id]["body"] = new Object()
        }

        wd.push(id)
        wd.push("body")
        console.log(obj)

      }
      if (node.type == 'playRecord') {
        let id = node.type + node.id
        if (wd.length == 2) {
          obj[wd[0]][wd[1]][id] = {"sound" :node.data.inputFile, "mic_channels" : node.data.inputChannels, "speaker_channels" :node.data.outputChannels, "duration" : node.data.duration}
        }
        if (wd.length == 3) {
          obj[wd[0]][wd[1]][wd[2]][id] = {"sound" :node.data.inputFile, "mic_channels" : node.data.inputChannels, "speaker_channels" :node.data.outputChannels, "duration" : node.data.duration}

        }
        if (wd.length == 4) {
          obj[wd[0]][wd[1]][wd[2]][wd[3]][id] = {"sound" :node.data.inputFile, "mic_channels" : node.data.inputChannels, "speaker_channels" :node.data.outputChannels, "duration" : node.data.duration}

        }
        if (wd.length == 5) {
          obj[wd[0]][wd[1]][wd[2]][wd[3]][wd[4]][id] = {"sound" :node.data.inputFile, "mic_channels" : node.data.inputChannels, "speaker_channels" :node.data.outputChannels, "duration" : node.data.duration}

        }
        if (wd.length == 6) {
          obj[wd[0]][wd[1]][wd[2]][wd[3]][wd[4]][wd[5]][id] = {"sound" :node.data.inputFile, "mic_channels" : node.data.inputChannels, "speaker_channels" :node.data.outputChannels, "duration" : node.data.duration}

        }
        if (wd.length == 7) {
          obj[wd[0]][wd[1]][wd[2]][wd[3]][wd[4]][wd[5]][wd[7]][id] = {"sound" :node.data.inputFile, "mic_channels" : node.data.inputChannels, "speaker_channels" :node.data.outputChannels, "duration" : node.data.duration}

        }
        console.log(obj)

        
      }
      if (node.type == 'start') {
        let id = node.type + node.id
        obj[id] = new Object()

        //console.log(id)
        obj[id]["body"]= new Object()
        wd = [id, "body"]
        console.log(obj)


      } 

      if (node.type == 'headControl') {
        let id = node.type + node.id
        if (wd.length == 2) {
          obj[wd[0]][wd[1]][id] = {"degrees" :node.data.degrees}
        }
        if (wd.length == 3) {
          obj[wd[0]][wd[1]][wd[2]][id] = {"degrees" :node.data.degrees}

        }
        if (wd.length == 4) {
          obj[wd[0]][wd[1]][wd[2]][wd[3]][id] = {"degrees" :node.data.degrees}

        }
        if (wd.length == 5) {
          obj[wd[0]][wd[1]][wd[2]][wd[3]][wd[4]][id] = {"degrees" :node.data.degrees}

        }
        if (wd.length == 6) {
          obj[wd[0]][wd[1]][wd[2]][wd[3]][wd[4]][wd[5]][id] = {"degrees" :node.data.degrees}

        }
        if (wd.length == 7) {
          obj[wd[0]][wd[1]][wd[2]][wd[3]][wd[4]][wd[5]][wd[7]][id] = {"degrees" :node.data.degrees}

        }
        console.log(obj)

        
        
      }
      if (node.type == 'railControl') {
        console.log(wd)
  
        let id = node.type + node.id
        if (wd.length == 2) {
          obj[wd[0]][wd[1]][id] = {"met_step": node.data.metStep}
        }
        if (wd.length == 3) {
          obj[wd[0]][wd[1]][wd[2]][id] = {"met_step": node.data.metStep}

        }
        if (wd.length == 4) {

          obj[wd[0]][wd[1]][wd[2]][wd[3]][id] += {"met_step": node.data.metStep}

        }
        if (wd.length == 5) {
          obj[wd[0]][wd[1]][wd[2]][wd[3]][wd[4]][id] = {"met_step": node.data.metStep}

        }
        if (wd.length == 6) {
          obj[wd[0]][wd[1]][wd[2]][wd[3]][wd[4]][wd[5]][id] = {"met_step": node.data.metStep}

        }
        if (wd.length == 7) {
          obj[wd[0]][wd[1]][wd[2]][wd[3]][wd[4]][wd[5]][wd[7]][id] = {"met_step": node.data.metStep}

        }
        console.log(obj)
      }
    }


  }
  const dfs = (node, nodes, edges) => {
    let stack = []
    let explored = []
    let toreturn = []

    stack.push(node)

    explored.push(node)

    while (stack.length !== 0) {
      let curr = stack.pop()
      //console.log(stack)
      toreturn.push(curr)
      //console.log(curr)
      


      let curr_edges = edges.filter(edge => {
        return edge.source === curr.id;
      })

      while ( curr_edges.length !== 0) {

      //console.log(curr_edges)
      let maxNodeEdge = giveMaxNode(nodes, edges, curr_edges)
      //console.log(maxNodeEdge)
      let maxNode = maxNodeEdge[0]
      //check if minNode in Visited
      //remove this edge from the implementation
      edges = edges.filter(edge=> !((edge.source === maxNodeEdge[1]) && (edge.target === maxNodeEdge[2])))
      curr_edges = edges.filter(edge => {
        return edge.source === curr.id;
      })
      var seen = false
      for (var item in explored) {
        if (maxNode.id === explored[item].id) {
          seen = true
        }
      }
      if (!seen ) {
        //console.log("here")
        stack.push(maxNode[0])
        explored.push(maxNode[0])
        
      }
      curr_edges = edges.filter(edge => {
        return edge.source === curr.id;
      })

    }

      
      //console.log('before', edges)
      

      //console.log('after', edges)


      
    }
    console.log(toreturn)
    populateObject(toreturn)

    var json = JSON.stringify(obj)
    

    const handleSaveToPC = json => {
      const fileData = json;
      const blob = new Blob([fileData], {type: "text/plain"});
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.download = 'filename.json';
      link.href = url;
      link.click();
    }
    handleSaveToPC(json)
    //console.log(explored)

  }

  function submitInfo (ns, edges) {
    // ADD actual sending info to backend here:
    alert.show(
      "See console for message"
    )
    let spareNodes = ns
    let spareEdges = edges
    console.log(spareNodes)
    console.log(spareEdges)
    



    
    // TODO: Parse all information from created tree 
    for (let node in ns) {
      let currnode = ns[node]
      //Create basic object for start 
      if (currnode.type == "start") {
        dfs(currnode, ns, edges)        
        //console.log(typeof start_edges)
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
          return <div key={node.id}> {/* id is just order that nodes are created in*/}
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

      <div >
        <button onClick={() => submitInfo(nodes, edges)}>SUBMIT</button>
      </div>
    </aside>
  );
};
