import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../App.css'; // Importe o CSS global do diretório pai

const LoginPage = ({ onLogin }) => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (value && formData.email && formData.password) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/users/login', formData);
      alert(response.data.message || 'Login realizado com sucesso!');
      onLogin();
      navigate('/home');
    } catch (error) {
      alert(error.response?.data?.error || 'Erro ao fazer login.');
    }
  };

  return (
    <div className="card">
      <h2>Entrar</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="E-mail"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Senha"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit" disabled={isButtonDisabled}>
          Entrar
        </button>
      </form>
      <p>
        Não tem uma conta?{' '}
        <a href="/register" style={{ color: 'blue' }}>
          Criar Conta
        </a>
      </p>
    </div>
  );
};

export default LoginPage;