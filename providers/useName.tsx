'use client';

import React, { createContext, useContext } from 'react';

interface NameContextType {
  name: string;
}

const NameContext = createContext<NameContextType | undefined>(undefined);

export const NameProvider = ({
  name,
  children,
}: {
  name: string;
  children: React.ReactNode;
}) => {
  return (
    <NameContext.Provider value={{ name }}>{children}</NameContext.Provider>
  );
};

export const useName = () => {
  const context = useContext(NameContext);
  if (!context) {
    throw new Error('useName must be used within a NameProvider');
  }
  return context.name;
};
