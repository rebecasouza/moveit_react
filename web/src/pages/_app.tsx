import React from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '../styles/global';
import theme from '../styles/theme';

import { ChallengesProvider } from '../contexts/ChallengesContext';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ChallengesProvider>
        <Component {...pageProps} />;
      </ChallengesProvider>
    </ThemeProvider>
  );
};

export default MyApp;
