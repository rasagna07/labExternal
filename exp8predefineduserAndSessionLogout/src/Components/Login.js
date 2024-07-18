// Login.js

import React, { useState, useEffect } from 'react';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // Function to handle login
    const handleLogin = () => {
        // Replace with your authentication logic
        if (username === 'admin' && password === 'password') {
            setIsLoggedIn(true);
        } else {
            alert('Invalid credentials');
        }
    };

    // Function to handle logout after 1 minute
    useEffect(() => {
        let timeoutId;
        if (isLoggedIn) {
            timeoutId = setTimeout(() => {
                setIsLoggedIn(false);
            }, 6000); // 60000 milliseconds = 1 minute
        }

        return () => clearTimeout(timeoutId);
    }, [isLoggedIn]);

    // Function to handle logout
    const handleLogout = () => {
        setIsLoggedIn(false);
        setUsername('');
        setPassword('');
    };

    // Render UI
    if (isLoggedIn) {
        return (
            <div>
                <p>Welcome, {username}!</p>
                <button onClick={handleLogout}>Logout</button>
            </div>
        );
    }

    return (
        <div>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default Login;
