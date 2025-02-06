import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const Sidebar = () => {
  const navigate = useNavigate();
  const user = "Usuário Exemplo"; // Nome do usuário estático por enquanto

  // Função para navegar para uma página específica
  const handleNavigation = (path) => {
    navigate(path);
  };

  // Função para fazer logout
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className="sidebar">
      <h2>Menu</h2>
      <p className="user-info">Bem-vindo, {user}</p>
      <ul>
        <li onClick={() => handleNavigation('/')}>Home</li>
        <li onClick={() => handleNavigation('/historico')}>Histórico</li>
        <li onClick={() => handleNavigation('/configuracoes')}>Configurações</li>
      </ul>

      {/* Botões adicionais */}
      <button className="history-button" onClick={() => handleNavigation('/historico')}>
        Ver Histórico
      </button>
      
      <button className="logout-button" onClick={handleLogout}>
        Sair
      </button>
    </div>
  );
};

export default Sidebar;
