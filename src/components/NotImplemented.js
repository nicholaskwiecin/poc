import React from 'react';
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import './NotImplemented.scss';

function NotImplemented() {
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    }
    return (
        <div>
            <button onClick={goBack}><FontAwesomeIcon className="fa-lg" icon={faArrowLeft}></FontAwesomeIcon></button>
            <p>This functionality has not been implemented as part of this Proof of Concept</p>
        </div>
    );
}

export default NotImplemented;
