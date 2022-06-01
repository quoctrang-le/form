import React, { useState } from 'react';
import { createContext } from 'react';
import userApi from '../../api/userApi';

const LoadingContext = createContext();

function GlobalDataProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);

  const Register = async () => {
    const data = await userApi.register();
    data && setIsLoading(false);
    data && document.querySelector('.bModel').classList.add('boxModel');
    setTimeout(() => {
      document.querySelector('.bModel').classList.remove('boxModel');
    }, 2000);
  };

  const valueProvider = {
    isLoading,
    setIsLoading,
    Register,
  };

  return (
    <LoadingContext.Provider value={valueProvider}>
      {children}
    </LoadingContext.Provider>
  );
}

export { GlobalDataProvider, LoadingContext };
