import React from 'react';
import ReactFlow from 'reactflow';
import './PriceModelWorkbench.scss';
import 'reactflow/dist/style.css';


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

const PriceModelWorkbench = () => {
  return (
    <div className="container">
      <section className="left-panel">
        <div className="panel-content">
          <h2>Cost Element Library</h2>
        </div>
      </section>

      <section className="center-panel">
        <div className="panel-content">
        <ReactFlow 
        defaultViewport={defaultViewport} 
        nodes={initialNodes} 
        edges={initialEdges}
        snapGrid={snapGrid}
        snapToGrid={true}
        proOptions={options}
         />
        </div>
      </section>

      <section className="right-panel">
        <div className="panel-content">
          <h2>Costing Panel</h2>
        </div>
      </section>

      <section className="bottom-panel">
        <div className="panel-content">
          <h2>Formula Bar</h2>
        </div>
      </section>
    </div>
  );
};
export default PriceModelWorkbench;
