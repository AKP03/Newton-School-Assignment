
import React, { createContext, useState } from 'react';

const MyContext = createContext();

const MyContextProvider = ({ children }) => {
 

  return (
    <div>
      {/* Placeholder content */}
      {children}
    </div>
  );
};

export { MyContext, MyContextProvider };