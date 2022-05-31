import React, { useState } from 'react';
import { createContext } from 'react';
import userApi from '../../api/userApi';

const LoadingContext = createContext();

function GlobalDataProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  isLoading && setTimeout(() => setIsLoading(false), 2000);

  const register = async () => {
    const data = await userApi.register();
    return data;
  };

  const valueProvider = {
    isLoading,
    setIsLoading,
    register,
  };

  return (
    <LoadingContext.Provider value={valueProvider}>
      {children}
    </LoadingContext.Provider>
  );
}

export { GlobalDataProvider, LoadingContext };
