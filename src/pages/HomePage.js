import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import ShortenerForm from '../components/ShortenerForm';
import UrlList from '../components/UrlList';

const HomePage = () => {
  const [urls, setUrls] = useState([]);

  const handleShorten = (shortUrl) => {
    setUrls([...urls, shortUrl]);
  };

  return (
    <div className="home-container">
      <Sidebar />
      <div className="main-content">
        <h1>Bem-vindo ao Encurta Ai!</h1>
        <ShortenerForm onShorten={handleShorten} />
        <UrlList urls={urls} />
      </div>
    </div>
  );
};

export default HomePage;