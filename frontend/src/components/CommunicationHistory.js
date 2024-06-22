import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CommunicationHistory = () => {
    const [history, setHistory] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/email/history', { withCredentials: true })
            .then(response => {
                setHistory(response.data);
            });
    }, []);

    return (
        <div>
            <h2>Communication History</h2>
            <ul>
                {history.map((email, index) => (
                    <li key={index}>
                        <p><strong>Type:</strong> {email.type}</p>
                        <p><strong>Subject:</strong> {email.subject}</p>
                        <p><strong>Body:</strong> {email.body}</p>
                        <p><strong>Date:</strong> {new Date(email.date).toLocaleString()}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CommunicationHistory;
