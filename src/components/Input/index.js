import React from 'react';
import './styles.css';

const Input = ({ placeholder, icon, onFocus, onBlur, required, type }) => {
  return (
    <div>
      <input
        required={required}
        type={type}
        onFocus={onFocus}
        onBlur={onBlur}
        placeholder={placeholder}
      />
      {icon}
    </div>
  );
};

export default Input;
