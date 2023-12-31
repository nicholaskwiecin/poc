import React, { useState, useRef, useEffect, useCallback } from 'react';
import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  useNodesState,
  useEdgesState,
  Controls,
  Background
} from 'reactflow';
import './PriceModelWorkbench.scss';
import 'reactflow/dist/style.css';
import FormulaBar from './FormulaBar';
import CostElementLibrary from './CostElementLibrary';
import CostingPanel from './CostingPanel';
import database from '../database.json';
import CostElementNode from './CostElementNode';
import { useParams, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';


const defaultViewport = { x: 0, y: 0, zoom: 1 };
const options = { hideAttribution: true };
const snapGrid = [20, 20];
const nodeTypes = {
  cost_element: CostElementNode,
};

const getHash = () => (Math.random() + 1).toString(36).substring(7);
const getRandomID = () => Math.floor(Math.random() * 100000000);
// const getMaterialID = () => Math.floor(Math.random() * 100000000);
// const getUsage = () => Math.floor(Math.random() * 100);


const PriceModelWorkbench = () => {
  const reactFlowWrapper = useRef(null);
  const params = useParams();
  const location = useLocation();

  let priceModel;
  if (params.id) {
    priceModel = database.price_model_graphs.find(graph => graph.id === params.id);
  } else {
    priceModel = database.price_model_template;
  }

  const id = params.id && location.state.isDuplicate === false ? params.id : "PM-000000" + (location.state.records.length + 1);

  const record = database.price_model_records.find(record => record.id === params.id);
  let [title, setTitle] = React.useState(record ? record.description : "New Price Model");

  const saveEditModel = (nodes, edges) => {
    const model = database.price_model_graphs.find(graph => graph.id === params.id);
    model.initial_nodes = nodes;
    model.initial_edges = edges;
    record.description = title;
  }

  const applyColorsToCss = (nodes) => {
    nodes.forEach(node => {
      if (node) {
        const el = document.querySelector(`[data-id="${node.id}"]`);
        if (el) {
          const brightness = node.brightness - 55;
          el.style.backgroundColor = `hsl(${node.color}, 75%, ${brightness}%)`;
          if (brightness > 60 || node.color === 97 && brightness > 40) {
            el.style.color = 'black';
          }
        }
      }
    });
  }

  const recursiveBrightnessColorSet = (nodes, edges, currentNode) => {
    const childEdges = edges.filter((edge) => edge.source === currentNode.id);
    const childNodes = childEdges.map((edge) => nodes.find((node) => edge.target === node.id));
    if (childEdges.length === 0 || childNodes.length === 0) {
      return;
    }
    childNodes.forEach(child => {
      if (child) {
        child.color = currentNode.color;
        child.brightness = currentNode.brightness + 12;
        recursiveBrightnessColorSet(nodes, edges, child);
      }
    });
  }

  const calculateBrightness = (nodes, edges) => {
    const rootNodes = nodes.filter((node) => node.id === '3_category' || node.id === "1_category" || node.id === "2_category");
    rootNodes.forEach(node => {
      recursiveBrightnessColorSet(nodes, edges, node);
    });
    applyColorsToCss(nodes);
  }


  const saveNewModel = (nodes, edges) => {
    const newRecord = {
      id: id,
      description: title,
      barId: '1234456',
      barDescription: 'Sasol',
      spendPool: 'Chemicals/Surfactants/LAB',
      suppliers: 'SASOL (01523242)',
      bu: 'Hair Care',
      regions: 'ALL'
    };
    location.state.records.push(newRecord);
    database.price_model_graphs.push({ id: id, initial_nodes: nodes, initial_edges: edges });
  }

  const onSave = (nodes, edges) => {
    if (location.state.isAdd) {
      saveNewModel(nodes, edges);
    }
    else {
      saveEditModel(nodes, edges);
    }
  }

  const [nodes, setNodes, onNodesChange] = useNodesState(priceModel.initial_nodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(priceModel.initial_edges);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  const [selectedFormula, setSelectedFormula] = useState({ formulaNode: {}, inputNodes: [] });

  // Change the value of a given input node
  const onInputValueChange = useCallback((event, node, key) => {
    setNodes(nodes.map((mapNode) => {
      if (mapNode.id === node.id) {
        mapNode.data[key] = event.target.value;
      }
      return mapNode;
    }));
  });

  const onConnect = useCallback(
    (params) => {
      setEdges((eds) => addEdge(params, eds));
      calculateBrightness(nodes, edges);
    }, []);

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  const onSelectionChange = useCallback((elements) => {
    // Return if no nodes selected
    if (!elements.nodes.length) {
      setSelectedFormula({ formulaNode: {}, inputNodes: [] });
      return;
    }

    // TODO: Handle multiple selections, right now we populate based on the first element
    let searchElement = elements.nodes[0]
    let formulaNode;

    // If you selected a formula node directly, use that else return
    if (searchElement.id.includes('formula')) {
      formulaNode = nodes.find((node) => node.id === searchElement.id)
    }
    else {
      return;
    }

    // Find all other input nodes for a given formula node
    let inputNodes = [];
    for (let edge of edges.filter((edge) => edge.source === formulaNode.id)) {
      inputNodes.push(nodes.find((node) => edge.target === node.id));
    };
    setSelectedFormula({ formulaNode, inputNodes });
  }, [nodes, edges]);


  const onRenameNode = (event) => {
    setNodes(nodes.map((node) => {
      if (node.id === event.detail.nodeId) {
        node.data.label = event.detail.label;
      }
      return node;
    }));
  };

  // FIXME: This should use a better method to listen to the event rather than on the window
  // This should be done via a custom event listener or a ref passed down to each child node
  // This is a temporary solution to get the rename functionality working
  useEffect(() => {
    calculateBrightness(nodes, edges);
    window.addEventListener('nodeRename', onRenameNode);
    return () => { window.removeEventListener('nodeRename', onRenameNode) }
  }, [nodes, edges]);


  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();

      // Get the element information from the dropped event using the dataTransfer key
      // NOTE: We have to convert to and from JSON as the setData won't accept an object
      const element = JSON.parse(event.dataTransfer.getData('application/reactflow'));

      // check if the dropped element is valid
      if (typeof element === 'undefined' || !element) {
        return;
      }

      const position = reactFlowInstance.project({
        x: event.clientX + - 35 - reactFlowBounds.left,
        y: event.clientY -115- reactFlowBounds.top,
      });
      const newNodes = [];
      const newEdges = [];
      const inputHash = getHash();

      // Generate the cost element parent element
      newNodes.push({
        id: `${inputHash}_input_${element.id}`,
        type: 'cost_element',
        position,
        data: {
          label: `${element.label}`,
          type: `input_${element.id}`,
          costPerUnit: 0,
          vendorId: 0,
          usage: 0,
          materialID: getRandomID(),
          unit: 'KG',
          usageUnit: 'Percent',
        },
      });


      // Add child inputs to the cost element
      for (const [index, child] of element.child_inputs.entries()) {
        newNodes.push({
          id: `${inputHash}_input_${element.id}_${child.id}`,
          type: 'cost_element',
          position: {
            x: position.x + 100,
            y: position.y + ((index + 1) * 50)
          },
          data: {
            label: `${child.label}`,
            type: `input_child_${child.id}`,
            costPerUnit: 0,
          },
        });
        // Add the edges to connect the to the parent element
        newEdges.push({
          id: `${inputHash}_input_${element.id}-${inputHash}_input_${element.id}_${child.id}`,
          "source": `${inputHash}_input_${element.id}`,
          "deletable": false,
          "target": `${inputHash}_input_${element.id}_${child.id}`
        });
      }

      setNodes((nds) => nds.concat(newNodes));
      setEdges((eds) => eds.concat(newEdges));
    },
    [reactFlowInstance]
  );


  return (
    <div className="container">
      <ReactFlowProvider>
        <div className="reactflow-wrapper center-panel" ref={reactFlowWrapper}>
          <div class="top-bar">
            <span className="page-title"><h2>Price Model Workbench</h2></span>
            <span><input id="description-input" value={title} onChange={event => { setTitle(event.target.value); }}></input></span>

            <span className="spacer"></span>
          </div>
          <ReactFlow
            defaultViewport={defaultViewport}
            nodes={nodes}
            edges={edges}
            onConnect={onConnect}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onInit={setReactFlowInstance}
            onDrop={onDrop}
            onDragOver={onDragOver}
            onSelectionChange={onSelectionChange}
            snapGrid={snapGrid}
            snapToGrid={true}
            proOptions={options}
            nodeTypes={nodeTypes}
            fitView
          >
            <Controls />
            <Background />
          </ReactFlow>
        </div>
        <div className="left-panel">
          <CostElementLibrary />
        </div>
        <div className="right-panel">
          <CostingPanel onInputValueChange={onInputValueChange} selectedFormula={selectedFormula} />
        </div>
        <div className="bottom-panel">
          <FormulaBar selectedFormula={selectedFormula} />
          <div class="action-buttons">
            <Link to="/price-model-library" id="save-button">
              <button className="active-button" onClick={() => onSave(nodes, edges)}>Save</button>
            </Link>
            <Link to="/linear-pricing-model" id="price-model-button">
              <button className="active-button">Linear Pricing Model</button>
            </Link>
          </div>
        </div>
      </ReactFlowProvider>
    </div>
  );
};
export default PriceModelWorkbench;
