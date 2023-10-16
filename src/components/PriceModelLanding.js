import React from 'react';
import { Link } from 'react-router-dom';

const PriceModelLanding = () => {
  return (
    <div className="price-model-landing">
      <h1>This is the price model landing page</h1>
      <Link to='/price-model-library'>Price Model Library</Link>
    </div>
  );
};
export default PriceModelLanding;
