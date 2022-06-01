import React from 'react';
import './styles.css';

const Button = ({ text, handleClick }) => {
  return (
    <button onMouseEnter={() => console.log('click')} onClick={handleClick} >
      {text}
    </button>
  );
};

export default Button;
