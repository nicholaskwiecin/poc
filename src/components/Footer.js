import React from 'react';
import './Footer.scss';
import { Link } from 'react-router-dom';

const Footer = () => (
    <footer id="global-footer">
        <span className="copyright">© 2023 Procter & Gamble</span>
        <span className="links">
            <Link to='/not-implemented'>My Actions</Link>
            <Link to='/price-model-library'>Price Model Library</Link>
            <Link to='/not-implemented'>Price Executions</Link>
            <Link to='/not-implemented'>Price Maintenance</Link>
        </span>
    </footer>
);
export default Footer;