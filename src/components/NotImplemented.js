import React from 'react';
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import './NotImplemented.scss';
import logo from '../images/P_G_Logo_RGB.svg';

const NotImplemented = () => {
    const navigate = useNavigate();
    const goBack = () => navigate(-1);
    
    return (
        <div className="not-implemented">
            <button className="back-arrow" onClick={goBack}>
                <FontAwesomeIcon icon={faArrowLeft} />
                &nbsp; Back
            </button>
            <div className="container">
                <img src={logo} id="p-and-g-logo" alt="P&G logo"></img>
                <p>This functionality has not been implemented as part of this Proof of Concept</p>
            </div>
        </div>
    );
}

export default NotImplemented;
