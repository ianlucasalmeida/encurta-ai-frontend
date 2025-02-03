import React from 'react';
import '../App.css';

const Sidebar = ({ onLogout }) => {
  return (
    <div className="sidebar">
      <h2>Menu</h2>
      <ul>
        <li>Home</li>
        <li>Histórico</li>
        <li>Configurações</li>
      </ul>

      {/* Botão de Sair */}
      <button className="logout-button" onClick={onLogout}>
        Sair
      </button>
    </div>
  );
};

export default Sidebar;