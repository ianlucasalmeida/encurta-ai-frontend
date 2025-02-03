import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../App.css';


const LoginPage = ({ onLogin }) => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => {
      const updatedFormData = { ...prevFormData, [name]: value };
      setIsButtonDisabled(!(updatedFormData.email && updatedFormData.password));
      return updatedFormData;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_BASE_URL}/api/users/login`,
        formData
      );
      alert(response.data.message || 'Login realizado com sucesso!');
      onLogin();
      navigate('/home');
    } catch (error) {
      alert(error.response?.data?.error || 'Erro ao fazer login.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <img src="/rede.png" alt="Logo" className="logo" />
        <h2 className="login-title">Entrar</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            value={formData.email}
            onChange={handleChange}
            required
            className="login-input"
          />
          <input
            type="password"
            name="password"
            placeholder="Senha"
            value={formData.password}
            onChange={handleChange}
            required
            className="login-input"
          />
          <button type="submit" disabled={isButtonDisabled} className="login-button">
            Entrar
          </button>
        </form>
        <p className="login-footer">
          Não tem uma conta?{' '}
          <a href="/register" className="login-link">
            Criar Conta
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
