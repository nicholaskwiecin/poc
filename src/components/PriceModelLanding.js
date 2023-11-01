import React from 'react';
import { Link } from 'react-router-dom';
import './PriceModelLanding.scss';
import { useParams} from 'react-router';

const PriceModelLanding = () => {
  const { userType } = useParams();


  return (
    <div className='nav-wrapper'>
      <h1 className='nav-header'>{userType === 'admin' ? 'Business Admin Portal' : 'Buyers Portal'}</h1>
      {userType === 'admin' ?
      <>
      <h2>Welcome to the Business Admin Portal</h2>
      <div className="nav-cards">
        <div className="nav-card" id="missing-data">
          <Link to='/not-implemented'>Missing Reference Data</Link>
        </div>
        <div className="nav-card">
          <Link to='/not-implemented'>Cost Element Maintenance</Link>
        </div>
        <div className="nav-card">
          <Link to='/not-implemented'>Price Maintenance</Link>
        </div>
      </div>
      </>
      :
      <>
      <h2>Welcome to the Buyers Portal</h2>
      <div className="nav-cards">
        <div className="nav-card" id="my-actions">
          <Link to='/not-implemented'>My Actions</Link>
        </div>
        <div className="nav-card">
          <Link to='/price-model-library'>Price Model Library</Link>
        </div>
        <div className="nav-card">
          <Link to='/not-implemented'>Price Executions</Link>
        </div>
        <div className="nav-card">
          <Link to='/not-implemented'>Price Maintenance</Link>
        </div>
      </div>
      </>
      }
    </div>
  );
};
export default PriceModelLanding;
