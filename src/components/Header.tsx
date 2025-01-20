import React from 'react';
import {Link} from 'react-router-dom';

const Header: React.FC = () => {
    return(
        <header style={{padding: '10px', backgroundColor: '#f0f0f0'}}>
            <nav>
                <Link to="/">Dashboard</Link> |
                <Link to="/chat">Chat</Link> |
                <Link to="/history">Transaction History</Link>
            </nav>
        </header>
    );
};

export default Header;