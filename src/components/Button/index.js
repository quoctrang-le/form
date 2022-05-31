import React, { useContext } from 'react';
import { LoadingContext } from '../GlobalDataProvider';
import './styles.css';

const Button = ({ text, submit }) => {
  const { setIsLoading, register } = useContext(LoadingContext);
  return (
    <button
      onClick={() => {
        setIsLoading(true);
      }}
      disabled={submit}
    >
      {text}
    </button>
  );
};

export default Button;
