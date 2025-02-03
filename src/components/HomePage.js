import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../App.css';

const HomePage = () => {
  const [url, setUrl] = useState('');
  const [shortenedUrls, setShortenedUrls] = useState([]);
  const [history, setHistory] = useState([]);

  // Função para encurtar a URL
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/shorten`, { url }, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }, // Token de autenticação
      });
      setShortenedUrls((prevUrls) => [response.data.shortUrl, ...prevUrls]);
      setUrl('');
    } catch (error) {
      alert(error.response?.data?.error || 'Erro ao encurtar a URL.');
    }
  };

  // Carrega o histórico de URLs do usuário
  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/users/history`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setHistory(response.data);
      } catch (error) {
        console.error('Erro ao buscar o histórico:', error);
      }
    };
    fetchHistory();
  }, []);

  return (
    <div className="home-container">
      <h1>Encurta Ai!</h1>
      <form onSubmit={handleSubmit} className="shorten-form">
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Insira a URL longa aqui"
          required
        />
        <button type="submit">Encurtar</button>
      </form>

      <div className="url-list">
        <h2>Histórico de Links Encurtados</h2>
        <ul>
          {history.map((item, index) => (
            <li key={index}>
              <div>
                <strong>Original:</strong> {item.originalUrl}
              </div>
              <div>
                <strong>Encurtado:</strong>{' '}
                <a href={item.shortUrl} target="_blank" rel="noopener noreferrer">
                  {item.shortUrl}
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HomePage;