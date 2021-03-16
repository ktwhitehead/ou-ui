import React from 'react'
import { ThemeProvider } from 'styled-components';
import theme from './Theme';
import AppContextProvider from './Context/AppContextProvider';
import SocketContextProvider from './Context/SocketContextProvider';
import Routes from './Routes';
import { withAuthenticator } from '@aws-amplify/ui-react';

const App = () => {
  return (
    <div className="App">
      <AppContextProvider>
        <SocketContextProvider>
          <ThemeProvider theme={theme}>
            <Routes />
          </ThemeProvider>
        </SocketContextProvider>
      </AppContextProvider>
    </div>
  );
}

export default withAuthenticator(App);
