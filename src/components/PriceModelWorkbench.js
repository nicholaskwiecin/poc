import React from 'react';
import ReactFlow from 'reactflow';
import './PriceModelWorkbench.css';

const initialNodes = [
  { id: '1', position: { x: 0, y: 0 }, data: { label: '1' } },
  { id: '2', position: { x: 0, y: 100 }, data: { label: '2' } },
];
const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];
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
        <h2>Price Model</h2>
        </div>
        {/* <div style={{ width: '100vw', height: '100vh' }}>
          <ReactFlow nodes={initialNodes} edges={initialEdges} />
        </div> */}
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
