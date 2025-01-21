import React from 'react';
import {Link} from 'react-router-dom';

const Header: React.FC = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Budget Tracker</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Dashboard</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/chat">Chat</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/history">Transaction History</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    );
};

export default Header;