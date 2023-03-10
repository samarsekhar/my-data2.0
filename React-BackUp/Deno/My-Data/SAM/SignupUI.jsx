import React, { useState } from 'react';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isSignedUp, setIsSignedUp] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleUsernameChange = event => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = event => {
        setPassword(event.target.value);
    };

    const handleSignUp = event => {
        event.preventDefault();
        setIsSignedUp(true);
    };

    const handleLogin = event => {
        event.preventDefault();
        if (!isSignedUp) {
            alert('Please sign up first.');
            return;
        }
        setIsLoggedIn(true);
    };

    const handleLogout = event => {
        event.preventDefault();
        setIsLoggedIn(false);
    };

    return (
        <div>
            {isLoggedIn ? (
                <button onClick={handleLogout}>Logout</button>
            ) : (
                <form>
                    {!isSignedUp && (
                        <>
                            <input
                                type="text"
                                placeholder="Username"
                                value={username}
                                onChange={handleUsernameChange}
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={handlePasswordChange}
                            />
                            <button onClick={handleSignUp}>Sign Up</button>
                        </>
                    )}
                    <button onClick={handleLogin}>Login</button>
                </form>
            )}
        </div>
    );
};

export default LoginForm;
