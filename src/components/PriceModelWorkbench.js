import React, { useState, useRef, useCallback } from 'react';
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
import ContextMenu from './ContextMenu';
import database from '../database.json';

const defaultViewport = { x: 0, y: 0, zoom: .8 };
const options = { hideAttribution: true };
const snapGrid = [20, 20];

let id = 1;
const getId = () => id++;
const getVendorID = () => Math.floor(Math.random()*100000000);
const getMaterialID = () => Math.floor(Math.random()*100000000);
const getUsage = () => Math.floor(Math.random()*100);


const PriceModelWorkbench = () => {


  const reactFlowWrapper = useRef(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(database.price_model_template.initial_nodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(database.price_model_template.initial_edges);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  const [menu, setMenu] = useState(null);
  const [selectedFormula, setSelectedFormula] = useState({formulaNode:{},inputNodes:[]});

  // Change the value of a given input node
  const onInputValueChange = useCallback((event, node) => {
    setNodes(nodes.map((mapNode) => {
      if (mapNode.id === node.id) {
        mapNode.data.value = event.target.value;
      }
      return mapNode;
    }));
  });

  const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), []);

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  const onSelectionChange = useCallback((elements) => {


    // Return if no nodes selected
    if (!elements.nodes.length) {
      setSelectedFormula({ formulaNode:{}, inputNodes:[] });
      return;
    }

    // TODO: Handle multiple selections, right now we populate based on the first element
    let searchElement = elements.nodes[0]
    let formulaNode;

    // If you selected a formula node directly, use that
    if (searchElement.id.includes('formula')) {
      formulaNode = nodes.find((node) => node.id === searchElement.id)
    }
    else {
      // TODO:  Travese up multiple levels in the tree, right now this will only work if you select a child node of the formula node
      // Travese the edges to get a formula_sum type node
      let searchEdge = edges.find((edge) => edge.target === searchElement.id && edge.source.includes('formula'));
      
      // If no edge was found that matches a forumla type node then return
      if (!searchEdge){
        return;
      }
      
      // Find the formula node
      formulaNode = nodes.find((node) => node.id === searchEdge.source)

      // If there is no formula node found then return
      if (!formulaNode) {
        return;
      }
    }

    // Find all other input nodes for a given formula node
    let inputNodes = [];
    for (let edge of edges.filter((edge) => edge.source === formulaNode.id)) {
      inputNodes.push(nodes.find((node) => edge.target === node.id));
    };
    setSelectedFormula({ formulaNode, inputNodes });
  }, [nodes, edges]);

  const onNodeContextMenu = useCallback(
    (event, node) => {
      // Prevent native context menu from showing
      event.preventDefault();

      // Calculate position of the context menu. We want to make sure it
      // doesn't get positioned off-screen.
      const pane = reactFlowWrapper.current.getBoundingClientRect();

      // TODO: Fix the menu positioning
      setMenu({
        id: node.id,
        top: event.clientY < pane.height - 200 && event.clientY,
        left: event.clientX < pane.width - 200 && event.clientX,
        right: event.clientX >= pane.width - 200 && pane.width - event.clientX,
        bottom: event.clientY >= pane.height - 200 && pane.height - event.clientY,
      });
    },
    [setMenu]
  );

  // Close the context menu if it's open whenever the window is clicked.
  const onPaneClick = useCallback(() => setMenu(null), [setMenu]);

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
      const elementName = event.dataTransfer.getData('application/reactflow');

      // check if the dropped element is valid
      // TODO: Implement other element types, right now we only support Feedstock elements
      if (typeof elementName === 'undefined' || !elementName || elementName !== 'Feedstock') {
        return;
      }

      const position = reactFlowInstance.project({
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top,
      });
      const inputId = getId();
      const newNode = {
        id: `${inputId}_input_${elementName}`,
        position,
        data: { 
          label: `${elementName} ${inputId}`,
          type: `input_${elementName}`,
          value: 0,
          vendorId: getVendorID(),
          usage: getUsage(),
          materialID: getMaterialID(),
          unit: 'KG',
          usageUnit: 'Percent',
         },
      };

      setNodes((nds) => nds.concat(newNode));
    },
    [reactFlowInstance]
  );


  return (
    <div className="container">
      <ReactFlowProvider>
        <div className="reactflow-wrapper center-panel" ref={reactFlowWrapper}>
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
            onPaneClick={onPaneClick}
            onNodeContextMenu={onNodeContextMenu}
            snapGrid={snapGrid}
            snapToGrid={true}
            proOptions={options}
            fitView
          ><Controls />
            <Background />
            {/* //TODO: Add the context menu back in after fixing the positioning
            {menu && <ContextMenu onClick={onPaneClick} {...menu} />}
             */}
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
        </div>
      </ReactFlowProvider>
    </div>
  );
};
export default PriceModelWorkbench;
