import React, { useState } from 'react';
import axios from 'axios';

const ComposeEmail = () => {
    const [to, setTo] = useState('');
    const [subject, setSubject] = useState('');
    const [body, setBody] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:5000/api/email/send', {
            to,
            subject,
            body
        }, { withCredentials: true });

        setTo('');
        setSubject('');
        setBody('');
    };

    return (
        <div>
            <h2>Compose Email</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>To:</label>
                    <input type="email" value={to} onChange={e => setTo(e.target.value)} required />
                </div>
                <div>
                    <label>Subject:</label>
                    <input type="text" value={subject} onChange={e => setSubject(e.target.value)} required />
                </div>
                <div>
                    <label>Body:</label>
                    <textarea value={body} onChange={e => setBody(e.target.value)} required></textarea>
                </div>
                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default ComposeEmail;
