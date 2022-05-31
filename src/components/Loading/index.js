import React from 'react';
import './styles.css';
import gif from '../../assets/images/giphy-unscreen.gif';
const Loading = () => {
  return (
    <div className="loading__wrapper">
      <img alt="some gif" src={gif} />
    </div>
  );
};

export default Loading;
