import React from 'react';
import { Link } from 'react-router-dom';
import './PriceModelLanding.css';

const PriceModelLanding = () => {
  return (
    <div className='nav-wrapper'>
      <h1 className='nav-header'>Buyers Portal</h1>
      <div className="nav-cards">
        <div className="nav-card">
          <Link to='/my-actions'>My Actions</Link>
        </div>
        <div className="nav-card">
          <Link to='/price-model-library'>Price Model Library</Link>
        </div>
        <div className="nav-card">
          <Link to='/price-executions'>Price Executions</Link>
        </div>
        <div className="nav-card">
          <Link to='/price-maintenance'>Price Maintenance</Link>
        </div>
      </div>
    </div>
  );
};
export default PriceModelLanding;
