import React, { useState } from 'react';
import "./Header.scss";
import logo from '../images/header-logo.png';
import background from '../images/header-background.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle, faBell, faGear, faQuestion } from '@fortawesome/free-solid-svg-icons'

const Header = () => {

    return (
        <header className="global-header">
            <img src={logo} id="header-logo" alt="P&G logo"></img>
            <img src={background} id="header-background" alt="background image"></img>
            <div className="user-menu">
                <FontAwesomeIcon icon={faQuestion} className="info-icon" />
                <FontAwesomeIcon icon={faGear} className="settings-icon" />
                <FontAwesomeIcon icon={faBell} className="notifications-icon" />
                <FontAwesomeIcon icon={faUserCircle} className="user-icon" />
            </div>
        </header>
    );
};
export default Header;