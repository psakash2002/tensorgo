import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            <Link to="/">Login</Link>
            <Link to="/history">Communication History</Link>
            <Link to="/compose">Compose Email</Link>
        </nav>
    );
};

export default Header;
