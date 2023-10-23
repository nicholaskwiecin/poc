import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [selectedOption, setSelectedOption] = useState('admin');
    const navigate = useNavigate();

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleLogin = () => {
        navigate('/landing/'+selectedOption);
    };

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <div>
                    <label htmlFor="user-type">User:</label>
                    <select id="user-type" value={selectedOption} onChange={handleOptionChange}>
                        <option value="admin">Business Admin</option>
                        <option value="buyer">Buyer</option>
                    </select>
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};
export default Login;
