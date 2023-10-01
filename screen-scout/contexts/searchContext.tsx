import React, { createContext, useContext, useState } from 'react';

const SearchContext = createContext(null);

export const useSearch = () => {
  return useContext(SearchContext);
};

export const SearchProvider: React.FC = ({ children }) => {
  const [query, setQuery] = useState('');

  return (
    <SearchContext.Provider value={{ query, setQuery }}>
      {children}
    </SearchContext.Provider>
  );
};