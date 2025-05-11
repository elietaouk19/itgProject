import React, { createContext, useContext, useState } from 'react';

const TokenContext = createContext();

export const useToken = () => {
  return useContext(TokenContext);
};

export const TokenProvider = ({ children }) => {
  const [bearerToken, setBearerToken] = useState(localStorage.getItem('token') || null);

  const updateToken = (token) => {
    setBearerToken(token);
    localStorage.setItem('token', token);
  };

  return (
    <TokenContext.Provider value={{ bearerToken, updateToken }}>
      {children}
    </TokenContext.Provider>
  );
};
