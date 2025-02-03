import React, { useState } from 'react';
import axios from 'axios';
import '../App.css';

const ShortenerForm = ({ onShorten }) => {
  const [url, setUrl] = useState('');

  // Função para encurtar a URL
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/shorten`, { url });
      const shortUrl = response.data.shortUrl; // Obtém o link encurtado do back-end
      onShorten(shortUrl); // Chama a função passada como prop
      setUrl(''); // Limpa o campo de entrada
    } catch (error) {
      console.error('Erro ao encurtar a URL:', error);
      alert(error.response?.data?.error || 'Erro ao encurtar a URL.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="shorten-form">
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Insira a URL longa aqui"
        required
        className="input-url"
      />
      <button type="submit" className="btn-shorten">
        Encurtar
      </button>
    </form>
  );
};

export default ShortenerForm;
