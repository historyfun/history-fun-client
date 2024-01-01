import React, { createContext, useContext, useState, ReactNode } from 'react';

type MyContextType = {
  sharedVariable: string;
  updateSharedVariable: (newValue: string) => void;
};

const MyContext = createContext<MyContextType | undefined>(undefined);

type MyProviderProps = {
  children: ReactNode;
};

export const MyProvider: React.FC<MyProviderProps> = ({ children }) => {
  const [sharedVariable, setSharedVariable] = useState<string>('Initial Value');

  const updateSharedVariable = (newValue: string) => {
    setSharedVariable(newValue);
  };

  return (
    <MyContext.Provider value={{ sharedVariable, updateSharedVariable }}>
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = (): MyContextType => {
  const context = useContext(MyContext);
  if (context === undefined) {
    throw new Error('useMyContext must be used within a MyProvider');
  }
  return context;
};
