import React from 'react';
import { Link } from 'react-router-dom';
import { useParams} from 'react-router';
import './PriceModelLanding.scss';


const PriceModelLanding = () => {
  const { userType } = useParams();

  return (
    <div className='nav-wrapper'>
      <h1 className='nav-header'>{userType === 'admin' ? 'Business Admin Portal' : 'Buyers Portal'}</h1>
      {userType === 'admin' ?
      <>
      <h2 className="welcome">Welcome to the Business Admin Portal</h2>
      <div className="nav-cards">
        <Link to='/not-implemented'>
          <div className="nav-card" id="missing-data">Missing Reference Data</div>
        </Link>
        <Link to='/not-implemented'>
          <div className="nav-card">Cost Element Maintenance</div>
        </Link>
        <Link to='/not-implemented'>
          <div className="nav-card">Price Maintenance</div>
        </Link>
      </div>
      </>
      :
      <>
      <h2 className="welcome">Welcome to the Buyers Portal</h2>
      <div className="nav-cards">
        <Link to='/not-implemented'>
          <div className="nav-card" id="my-actions">My Actions</div>
        </Link>
        <Link to='/price-model-library'>
          <div className="nav-card">Price Model Library</div>
        </Link>
        <Link to='/not-implemented'>
          <div className="nav-card">Price Executions</div>
        </Link>
        <Link to='/not-implemented'>
          <div className="nav-card">Price Maintenance</div>
        </Link>
      </div>
      </>
      }
    </div>
  );
};
export default PriceModelLanding;
