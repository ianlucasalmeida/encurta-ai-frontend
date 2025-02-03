import React from 'react';
import '../App.css';

const UrlList = ({ urls }) => {
  return (
    <ul className="url-list">
      {urls.map((url, index) => (
        <li key={index}>
          <a href={url} target="_blank" rel="noopener noreferrer">
            {url}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default UrlList;