import React, { useState } from 'react';

function LoginForm({ onRegisterClick }) {
    const [identifier, setIdentifier] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Giriş: ${identifier} / Şifre: ${password}`);
    };

    return (
        <div style={{
            minHeight: "100vh",
            width: "100vw",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "#f4f6fa"
        }}>
            <div style={{
                width: "100%",
                maxWidth: 400,
                padding: 32,
                background: "#fff",
                borderRadius: 12,
                boxShadow: "0 4px 24px rgba(0,0,0,0.10)"
            }}>
                <h1 style={{ textAlign: "center", color: "#1976d2", marginBottom: 8 }}>UniNote</h1>
                <h2 style={{ textAlign: "center", marginBottom: 28, fontWeight: 400, fontSize: 18, color: "#444" }}>Kullanıcı Girişi</h2>
                <form onSubmit={handleSubmit}>
                    <div style={{ marginBottom: 18 }}>
                        <label style={{ display: "block", marginBottom: 6, fontWeight: 500 }}>Email veya Kullanıcı Adı</label>
                        <input
                            type="text"
                            value={identifier}
                            onChange={e => setIdentifier(e.target.value)}
                            required
                            style={{ width: "100%", padding: 10, borderRadius: 5, border: "1px solid #ccc" }}
                            placeholder="Email veya kullanıcı adınızı girin"
                        />
                    </div>
                    <div style={{ marginBottom: 18 }}>
                        <label style={{ display: "block", marginBottom: 6, fontWeight: 500 }}>Şifre</label>
                        <input
                            type="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            required
                            style={{ width: "100%", padding: 10, borderRadius: 5, border: "1px solid #ccc" }}
                            placeholder="Şifrenizi girin"
                        />
                    </div>
                    <button type="submit" style={{
                        width: "100%",
                        padding: 12,
                        background: "#1976d2",
                        color: "white",
                        border: "none",
                        borderRadius: 5,
                        fontWeight: "bold",
                        fontSize: 16
                    }}>
                        Giriş Yap
                    </button>
                </form>
                <div style={{ textAlign: "center", marginTop: 18 }}>
                    <span>Üye değil misiniz? </span>
                    <button
                        onClick={onRegisterClick}
                        style={{
                            background: "none",
                            border: "none",
                            color: "#1976d2",
                            textDecoration: "underline",
                            cursor: "pointer",
                            fontWeight: "bold"
                        }}
                    >
                        Üye Olun
                    </button>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;