import React, { useState, useRef, useCallback } from 'react';
import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  useNodesState,
  useEdgesState,
  Controls
} from 'reactflow';
import './PriceModelWorkbench.scss';
import 'reactflow/dist/style.css';
import FormulaBar from './FormulaBar';
import CostElementLibrary from './CostElementLibrary';
import CostingPanel from './CostingPanel';


const defaultViewport = { x: 0, y: 0, zoom: .8 };
const options = { hideAttribution: true };
const snapGrid = [20, 20];
const initialNodes = [
  { id: '1', position: { x: 300, y: 0 }, data: { label: 'Total Materials' } },
  { id: '2', position: { x: 0, y: 100 }, data: { label: 'Feedstock 1' } },
  { id: '3', position: { x: 200, y: 100 }, data: { label: 'Feedstock 2' } },
  { id: '4', position: { x: 400, y: 100 }, data: { label: 'Feedstock 3' } },
  { id: '5', position: { x: 600, y: 100 }, data: { label: 'Feedstock 4' } },
];
const initialEdges = [
  { id: 'e1-2', source: '1', target: '2' },
  { id: 'e1-3', source: '1', target: '3' },
  { id: 'e1-4', source: '1', target: '4' },
  { id: 'e1-5', source: '1', target: '5' },
  { id: 'e1-6', source: '1', target: '6' },
  { id: 'e1-7', source: '1', target: '7' }
];

let id = 0;
const getId = () => `costElement_${id++}`;

const PriceModelWorkbench = () => {

  const reactFlowWrapper = useRef(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
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
            snapGrid={snapGrid}
            snapToGrid={true}
            proOptions={options}
            fitView
          ><Controls />
          </ReactFlow>
        </div>
        <div className="left-panel">
          <CostElementLibrary />
        </div>
        <div className="right-panel">
          <CostingPanel />
        </div>
        <div className="bottom-panel">
          <FormulaBar />
        </div>
      </ReactFlowProvider>
    </div>
  );
};
export default PriceModelWorkbench;
