import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import './App.css'; // Importe o arquivo CSS para estilização global

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado para verificar se o usuário está logado

  // Função para lidar com o login
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  // Função para lidar com o logout
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <div className="app-container">
        {/* Rotas da aplicação */}
        <Routes>
          {/* Rota para a tela de login */}
          <Route
            path="/login"
            element={!isLoggedIn ? <LoginPage onLogin={handleLogin} /> : <Navigate to="/home" />}
          />
          {/* Rota para a tela de cadastro */}
          <Route path="/register" element={<RegisterPage />} />
          {/* Rota para a tela inicial (protegida) */}
          <Route
            path="/home"
            element={isLoggedIn ? <HomePage onLogout={handleLogout} /> : <Navigate to="/login" />}
          />
          {/* Redireciona para /login se nenhuma rota for encontrada */}
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;