import React from 'react';
import { SearchProvider } from '../contexts/searchContext';
import GlobalStyles from '../styles/GlobalStyles';

function MyApp({ Component, pageProps }) {
  return (
    <SearchProvider>
      <GlobalStyles />
      <Component {...pageProps} />
    </SearchProvider>
  );
}

export default MyApp;