import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './Login.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import logo from '../images/P_G_Logo_RGB.svg';
import background from '../images/login-panel-background.png';

const Login = () => {
    const [selectedOption, setSelectedOption] = useState('admin');
    const navigate = useNavigate();

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleLogin = () => {
        navigate('/landing/' + selectedOption);
    };

    return (
        <div className="login-background">
            <div className="login-panel">
                <img src={logo} id="p-and-g-logo"></img>
                <h1 className="login-header">Login</h1>
                <form onSubmit={handleLogin} className="login-panel-content">
                    <div className="login-user-type">
                        <label htmlFor="user-type">Please select user type:</label>
                        <select id="user-type" value={selectedOption} onChange={handleOptionChange}>
                            <option value="admin">Business Admin</option>
                            <option value="buyer">Buyer</option>
                        </select>
                    </div>
                    <div className="login-user-email">
                        <label htmlFor="user-email">Email</label>
                        <input type="text" id="user-email"></input>
                    </div>
                    <div className="login-user-password">
                        <label htmlFor="user-password">Password</label>
                        <input type="text" id="user-password"></input>
                    </div>
                    <div className="login-options">   
                        <span>
                            <input type="checkbox" id="remember-me"></input>
                            <label htmlFor="remember-me">Remember Me</label>
                        </span>
                        <span>
                            <a href="#">Forgot your password?</a>
                        </span>
                    </div>
                    <button type="submit" className="login-button">
                        <FontAwesomeIcon icon={faLock} className="lock-icon" />
                        Sign In
                    </button>
                    <div className="login-sign-up">
                        <p>Don't have an account?</p>&nbsp;<a href="#">Sign Up</a>
                    </div>
                </form>
                <img src={background} id="panel-background"></img>
            </div>
        </div>
    );
};
export default Login;
