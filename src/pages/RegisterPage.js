import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../App.css'; // Importe o CSS global do diretório pai

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
    setFormData({ ...formData, [name]: value });

    // Habilita o botão apenas se todos os campos forem preenchidos
    if (formData.name && formData.email && formData.password) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/users/register', formData);
      alert(response.data.message || 'Cadastro realizado com sucesso!');
      navigate('/login'); // Redireciona para a página de login após o cadastro
    } catch (error) {
      alert(error.response?.data?.error || 'Erro ao cadastrar usuário.');
    }
  };

  return (
    <div className="card">
      <h2>Criar Conta</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nome"
          value={formData.name}
          onChange={handleChange}
          required
        />
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
          Cadastrar
        </button>
      </form>
      <p>
        Já tem uma conta?{' '}
        <a href="/login" style={{ color: 'blue' }}>
          Entrar
        </a>
      </p>
    </div>
  );
};

export default RegisterPage;