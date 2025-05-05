import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';

function App() {
    const [showRegister, setShowRegister] = useState(false);

    return (
        <div>
            {showRegister ? (
                <RegisterForm onLoginClick={() => setShowRegister(false)} />
            ) : (
                <LoginForm onRegisterClick={() => setShowRegister(true)} />
            )}
        </div>
    );
}

export default App;