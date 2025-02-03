import React from 'react';
import { useNavigate } from 'react-router-dom'; // Hook para navegação
import '../App.css';

const Sidebar = () => {
  const navigate = useNavigate();

  // Função para fazer logout
  const handleLogout = () => {
    // Remove o token do localStorage
    localStorage.removeItem('token');

    // Redireciona para a página de login
    navigate('/login');
  };

  return (
    <div className="sidebar">
      <h2>Menu</h2>
      <ul>
        <li>Home</li>
        <li>Histórico</li>
        <li>Configurações</li>
      </ul>

      {/* Botão de Sair */}
      <button className="logout-button" onClick={() => handleLogout()}>
        Sair
      </button>
    </div>
  );
};

export default Sidebar;