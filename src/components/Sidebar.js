import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <img src="/logo.png" alt="Logo" />
        <h1>Encurta Ai!</h1>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/home">Encurtar URL</Link>
          </li>
          <li>
            <Link to="/my-urls">Minhas URLs</Link>
          </li>
          <li>
            <Link to="/settings">Configurações</Link>
          </li>
          <li>
            <Link to="/logout">Sair</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;