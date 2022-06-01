import React, { useContext } from 'react';
import { LoadingContext } from '../GlobalDataProvider';
import './styles.css';

const Button = ({ text, submit, handleClick }) => {
  return (
    <button onClick={handleClick} disabled={submit}>
      {text}
    </button>
  );
};

export default Button;
