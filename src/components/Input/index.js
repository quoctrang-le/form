import React from 'react';
import './styles.css';

const Input = ({ placeholder, icon, onFocus, onBlur, required, type, onChange }) => {
  return (
    <div>
      <input
        required={required}
        type={type}
        onFocus={onFocus}
        onBlur={onBlur}
        placeholder={placeholder}
        onChange={onChange}
      />
      {icon}
    </div>
  );
};

export default Input;
