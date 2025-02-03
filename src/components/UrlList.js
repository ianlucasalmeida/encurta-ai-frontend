import React from 'react';

const UrlList = ({ urls }) => {
  return (
    <ul>
      {urls.map((url, index) => (
        <li key={index}>
          <a href={`http://localhost:3000/${url}`} target="_blank" rel="noopener noreferrer">
            {url}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default UrlList;