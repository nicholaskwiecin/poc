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
  { id: '1_formula', position: { x: 300, y: 0 }, data: { 
    label: 'Raw Materials',
    type: 'formula_sum' 
  } },
  { id: '2_input_materials', position: { x: 0, y: 100 }, data: { label: 'Feedstock 1', type: 'input_materials', value: 50.4 } },
  { id: '3_input_materials', position: { x: 200, y: 100 }, data: { label: 'Feedstock 2', type: 'input_materials', value: 16.6 } },
  { id: '4_input_materials', position: { x: 400, y: 100 }, data: { label: 'Feedstock 3', type: 'input_materials', value: 5 } },
  { id: '5_input_materials', position: { x: 600, y: 100 }, data: { label: 'Feedstock 4', type: 'input_materials', value: 16.6 } },
];

const initialEdges = [
  { id: 'e1-2', source: '1_formula', target: '2_input_materials' },
  { id: 'e1-3', source: '1_formula', target: '3_input_materials' },
  { id: 'e1-4', source: '1_formula', target: '4_input_materials' },
  { id: 'e1-5', source: '1_formula', target: '5_input_materials' }
];

let id = 0;
const getId = () => `costElement_${id++}`;

const PriceModelWorkbench = () => {


  const reactFlowWrapper = useRef(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  const [menu, setMenu] = useState(null);
  const [selectedFormula, setSelectedFormula] = useState({});

  const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), []);

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  const onSelectionChange = useCallback((elements) => {
 

    // Return if no nodes selected
    if (!elements.nodes.length) {
      return;
    }

    // TODO: Handle multiple selections, right now we populate based on the first element
    let searchElement = elements.nodes[0]

    // TODO:  Travese up multiple levels in the tree, right now this will only work if you select a child node of the formula node
    // Travese the edges to get a formula_sum type node
    let formulaNode = nodes.find((node)=>node.id===edges.find((edge) => edge.target === searchElement.id && edge.source.includes('formula')).source)
    let inputNodes = [];
    
    for (let edge of edges.filter((edge)=>edge.source===formulaNode.id)) {
      inputNodes.push(nodes.find((node)=>edge.target===node.id));
    };

    console.log({formulaNode, inputNodes});
    setSelectedFormula({formulaNode, inputNodes});
  }, []);

  const onNodeContextMenu = useCallback(
    (event, node) => {
      // Prevent native context menu from showing
      event.preventDefault();

      // Calculate position of the context menu. We want to make sure it
      // doesn't get positioned off-screen.
      const pane = reactFlowWrapper.current.getBoundingClientRect();
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
      if (typeof elementName === 'undefined' || !elementName) {
        return;
      }

      const position = reactFlowInstance.project({
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top,
      });
      const newNode = {
        id: getId(),
        position,
        data: { label: elementName },
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
          <CostingPanel selectedFormula={selectedFormula}/>
        </div>
        <div className="bottom-panel">
          <FormulaBar selectedFormula={selectedFormula}/>
        </div>
      </ReactFlowProvider>
    </div>
  );
};
export default PriceModelWorkbench;
