import React, { useState } from 'react';

function UserForm() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Kullanıcı adı: ${username}\nEmail: ${email}`);
        // Burada API'ye istek atabilirsin
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Kullanıcı Oluştur</h2>
            <div>
                <label>Kullanıcı Adı:</label>
                <input
                    type="text"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Kaydet</button>
        </form>
    );
}

export default UserForm;