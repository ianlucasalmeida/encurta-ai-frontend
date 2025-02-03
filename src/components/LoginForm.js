import React, { useState } from 'react';
import axios from 'axios';

const LoginForm = ({ onLogin }) => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Habilita o botão apenas se ambos os campos estiverem preenchidos
    if (value && formData.email && formData.password) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_BASE_URL}/api/users/login`,
        formData
      );
    } catch (error) {
      alert(error.response?.data?.error || 'Erro ao fazer login.');
    }
  };

  return (
    <div className="card">
      <h2>Entrar</h2>
      <form onSubmit={handleSubmit} className="card">
        <h2>Entrar</h2>
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
        <p>
          Não tem uma conta?{' '}
          <a href="/register">Criar Conta</a>
        </p>
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

export default LoginForm;