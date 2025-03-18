'use client';
import React, { createContext, useState } from "react";

const GlobalState = createContext();

export const GlobalStateProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  return (
    <GlobalState.Provider value={{ count, setCount }}>
      {children}
    </GlobalState.Provider>
  );
};

export default GlobalState;
