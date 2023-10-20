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

const defaultViewport = { x: 0, y: 0, zoom: .8 };
const options = { hideAttribution: true };
const snapGrid = [20, 20];

const initialNodes = [
  {
    id: '1_header',
    position: { x: 0, y: -50 },
    type: 'input',
    draggable: false,
    deletable: false,
    selectable: false,
    data: {
      label: 'Price Model Header / Total Invoice Price',
      type: 'header'
    }
  },
  {
    id: '1_category',
    position: { x: -400, y: 100 },
    draggable: false,
    deletable: false,
    selectable: false,
    data: {
      label: 'Total Materials',
      type: 'category'
    }
  },
  {
    id: '1_formula',
    position: { x: -500, y: 200 },
    draggable: false,
    deletable: false,
    data: {
      label: 'Raw Materials',
      type: 'formula_sum'
    }
  },
  {
    id: '2_formula',
    position: { x: -300, y: 200 },
    draggable: false,
    deletable: false,
    selectable: false,
    data: {
      label: 'Packaging',
      type: 'formula_sum'
    }
  },
  {
    id: '2_category',
    position: { x: 0, y: 100 },
    draggable: false,
    deletable: false,
    selectable: false,
    data: {
      label: 'Conversion and Fees',
      type: 'category'
    }
  },
  {
    id: '3_formula',
    position: { x: -150, y: 200 },
    draggable: false,
    deletable: false,
    selectable: false,
    data: {
      label: 'Manufacturing',
      type: 'formula_sum'
    }
  },
  {
    id: '4_formula',
    position: { x: 0, y: 200 },
    draggable: false,
    deletable: false,
    selectable: false,
    data: {
      label: 'Labor',
      type: 'formula_sum'
    }
  },
  {
    id: '5_formula',
    position: { x: 150, y: 200 },
    draggable: false,
    deletable: false,
    selectable: false,
    data: {
      label: 'Fees',
      type: 'formula_sum'
    }
  },
  {
    id: '3_category',
    position: { x: 400, y: 100 },
    draggable: false,
    deletable: false,
    selectable: false,
    data: {
      label: 'Logistics',
      type: 'category'
    }
  },
  {
    id: '6_formula',
    position: { x: 500, y: 200 },
    draggable: false,
    deletable: false,
    selectable: false,
    data: {
      label: 'Transportation',
      type: 'formula_sum'
    }
  },
  {
    id: '7_formula',
    position: { x: 300, y: 200 },
    draggable: false,
    deletable: false,
    selectable: false,
    data: {
      label: 'Warehousing',
      type: 'formula_sum'
    }
  },
];

const initialEdges = [
  { id: 'h1-1', source: '1_header', deletable:false, target: '1_category' },
  { id: 'h1-2', source: '1_header', deletable:false, target: '2_category' },
  { id: 'h1-3', source: '1_header', deletable:false, target: '3_category' },
  { id: 'c1-1', source: '1_category', deletable:false, target: '1_formula' },
  { id: 'c1-2', source: '1_category', deletable:false, target: '2_formula' },
  { id: 'c2-3', source: '2_category', deletable:false, target: '3_formula' },
  { id: 'c2-4', source: '2_category', deletable:false, target: '4_formula' },
  { id: 'c2-5', source: '2_category', deletable:false, target: '5_formula' },
  { id: 'c3-6', source: '3_category', deletable:false, target: '6_formula' },
  { id: 'c3-7', source: '3_category', deletable:false, target: '7_formula' }
];

let id = 1;
const getId = () => id++;
const getVendorID = () => Math.floor(Math.random()*100000000);
const getMaterialID = () => Math.floor(Math.random()*100000000);
const getUsage = () => Math.floor(Math.random()*100);


const PriceModelWorkbench = () => {


  const reactFlowWrapper = useRef(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  const [menu, setMenu] = useState(null);
  const [selectedFormula, setSelectedFormula] = useState({formulaNode:{},inputNodes:[]});

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
            {menu && <ContextMenu onClick={onPaneClick} {...menu} />}
          </ReactFlow>
        </div>
        <div className="left-panel">
          <CostElementLibrary />
        </div>
        <div className="right-panel">
          <CostingPanel selectedFormula={selectedFormula} />
        </div>
        <div className="bottom-panel">
          <FormulaBar selectedFormula={selectedFormula} />
        </div>
      </ReactFlowProvider>
    </div>
  );
};
export default PriceModelWorkbench;
