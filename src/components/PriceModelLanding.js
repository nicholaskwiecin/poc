import React from 'react';
import { Link } from 'react-router-dom';
import './PriceModelLanding.scss';
import { useParams } from 'react-router';

const PriceModelLanding = () => {

  const { userType } = useParams();
  console.log(userType);

  return (
    <div className='nav-wrapper'>
      <h1 className='nav-header'>{userType === 'admin' ? 'Business Admin Portal' : 'Buyers Portal'}</h1>
      {
        userType === 'admin' ?
          <div className="nav-cards">
            <div className="nav-card">
              <Link to='/my-actions'>Missing Reference Data</Link>
            </div>
            <div className="nav-card">
              <Link to='/price-model-library'>Cost Element Maintenance</Link>
            </div>
            <div className="nav-card">
              <Link to='/price-executions'>Price Maintenance</Link>
            </div>
          </div>
          :
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
      }

    </div>
  );
};
export default PriceModelLanding;
