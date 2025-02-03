import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => {
      const updatedFormData = { ...prevFormData, [name]: value };
      setIsButtonDisabled(!(updatedFormData.name && updatedFormData.email && updatedFormData.password));
      return updatedFormData;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_BASE_URL}/api/users/register`,
        formData
      );
      alert(response.data.message || 'Cadastro realizado com sucesso!');
      navigate('/login');
    } catch (error) {
      alert(error.response?.data?.error || 'Erro ao cadastrar usuário.');
    }
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <img src="/rede.png" alt="Logo" className="logo" />
        <h2 className="register-title">Criar Conta</h2>
        <form onSubmit={handleSubmit} className="register-form">
          <input
            type="text"
            name="name"
            placeholder="Nome"
            value={formData.name}
            onChange={handleChange}
            required
            className="register-input"
          />
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            value={formData.email}
            onChange={handleChange}
            required
            className="register-input"
          />
          <input
            type="password"
            name="password"
            placeholder="Senha"
            value={formData.password}
            onChange={handleChange}
            required
            className="register-input"
          />
          <button type="submit" disabled={isButtonDisabled} className="register-button">
            Cadastrar
          </button>
        </form>
        <p className="register-footer">
          Já tem uma conta?{' '}
          <a href="/login" className="register-link">
            Entrar
          </a>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
