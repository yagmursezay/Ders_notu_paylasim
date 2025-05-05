import React, { useState } from 'react';

function RegisterForm({ onLoginClick }) {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [school, setSchool] = useState('');
    const [grade, setGrade] = useState('');
    const [department, setDepartment] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Burada backend'e istek atabilirsin
        alert(
            `Kullanıcı Adı: ${username}\nEmail: ${email}\nOkul: ${school}\nSınıf: ${grade}\nBölüm: ${department}`
        );
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
                <h2 style={{ textAlign: "center", marginBottom: 28, fontWeight: 400, fontSize: 18, color: "#444" }}>Kayıt Ol</h2>
                <form onSubmit={handleSubmit}>
                    <div style={{ marginBottom: 16 }}>
                        <label style={{ display: "block", marginBottom: 6, fontWeight: 500 }}>Kullanıcı Adı</label>
                        <input
                            type="text"
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                            required
                            style={{ width: "100%", padding: 10, borderRadius: 5, border: "1px solid #ccc" }}
                            placeholder="Kullanıcı adınızı girin"
                        />
                    </div>
                    <div style={{ marginBottom: 16 }}>
                        <label style={{ display: "block", marginBottom: 6, fontWeight: 500 }}>Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            required
                            style={{ width: "100%", padding: 10, borderRadius: 5, border: "1px solid #ccc" }}
                            placeholder="Email adresinizi girin"
                        />
                    </div>
                    <div style={{ marginBottom: 16 }}>
                        <label style={{ display: "block", marginBottom: 6, fontWeight: 500 }}>Okuduğunuz Okul</label>
                        <input
                            type="text"
                            value={school}
                            onChange={e => setSchool(e.target.value)}
                            required
                            style={{ width: "100%", padding: 10, borderRadius: 5, border: "1px solid #ccc" }}
                            placeholder="Üniversite/Fakülte adı"
                        />
                    </div>
                    <div style={{ marginBottom: 16 }}>
                        <label style={{ display: "block", marginBottom: 6, fontWeight: 500 }}>Sınıf</label>
                        <input
                            type="text"
                            value={grade}
                            onChange={e => setGrade(e.target.value)}
                            required
                            style={{ width: "100%", padding: 10, borderRadius: 5, border: "1px solid #ccc" }}
                            placeholder="Hazırlık, 1, 2, 3, 4..."
                        />
                    </div>
                    <div style={{ marginBottom: 18 }}>
                        <label style={{ display: "block", marginBottom: 6, fontWeight: 500 }}>Bölüm</label>
                        <input
                            type="text"
                            value={department}
                            onChange={e => setDepartment(e.target.value)}
                            required
                            style={{ width: "100%", padding: 10, borderRadius: 5, border: "1px solid #ccc" }}
                            placeholder="Bölümünüzü girin"
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
                        Kayıt Ol
                    </button>
                </form>
                <div style={{ textAlign: "center", marginTop: 18 }}>
                    <span>Zaten üye misiniz? </span>
                    <button
                        onClick={onLoginClick}
                        style={{
                            background: "none",
                            border: "none",
                            color: "#1976d2",
                            textDecoration: "underline",
                            cursor: "pointer",
                            fontWeight: "bold"
                        }}
                    >
                        Giriş Yap
                    </button>
                </div>
            </div>
        </div>
    );
}

export default RegisterForm;