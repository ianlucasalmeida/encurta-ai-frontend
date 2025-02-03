import React, { useState } from 'react';
import axios from 'axios';

const ShortenerForm = ({ onShorten }) => {
  const [url, setUrl] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/shorten', { url });
      onShorten(response.data.shortUrl);
    } catch (error) {
      console.error('Erro ao encurtar URL:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Insira a URL"
        required
      />
      <button type="submit">Encurtar</button>
    </form>
  );
};

export default ShortenerForm;