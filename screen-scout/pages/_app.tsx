import React from 'react';
import { SearchProvider } from '../contexts/searchContext';
import GlobalStyles from '../styles/GlobalStyles';
import Layout from '../components/layout';

function MyApp({ Component, pageProps }) {
  return (
    <SearchProvider>
      
        <GlobalStyles />
        <Component {...pageProps} />
      
    </SearchProvider>
  );
}

export default MyApp;