import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import ShortenerForm from '../components/ShortenerForm';
import UrlList from '../components/UrlList';
import '../App.css';

const HomePage = () => {
  const [urls, setUrls] = useState([]);

  // Função para adicionar uma nova URL encurtada à lista
  const handleShorten = (shortUrl) => {
    setUrls((prevUrls) => [...prevUrls, shortUrl]);
  };

  return (
    <div className="home-container">
      {/* Sidebar com botão de sair */}
      <Sidebar onLogout={() => alert('Você saiu!')} />

      {/* Conteúdo principal */}
      <div className="main-content">
        <header className="header">
          <img src="/rede.png" alt="Logo" className="logo" />
          <h1>Bem-vindo ao Encurta Ai!</h1>
        </header>

        {/* Formulário para encurtar URLs */}
        <section className="shortener-section">
          <ShortenerForm onShorten={handleShorten} />
        </section>

        {/* Lista de URLs encurtadas */}
        <section className="url-list-section">
          <UrlList urls={urls} />
        </section>
      </div>
    </div>
  );
};

export default HomePage;