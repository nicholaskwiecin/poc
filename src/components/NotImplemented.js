import React from 'react';
import './NotImplemented.scss';
import logo from '../images/P_G_Logo_RGB.svg';

const NotImplemented = () => {
    return (
        <div className="not-implemented">
            <img src={logo} id="p-and-g-logo" alt="P&G logo"></img>
            <p>This functionality has not been implemented as part of this Proof of Concept</p>
        </div>
    );
}

export default NotImplemented;
