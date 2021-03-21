import React, { useState, useEffect } from 'react';
import AppContext from './AppContext';
import { onAuthUIStateChange } from '@aws-amplify/ui-components'
import Auth from '@aws-amplify/auth';

const AppContextProvider = ({ children }) => {
  const [connected, setConnected] = useState(false);
  const [authState, setAuthState] = useState();
  const [user, setUser] = useState();

  onAuthUIStateChange((nextAuthState, authData) => {
    setAuthState(nextAuthState);
    setUser(authData)
  });

  const getCurrentUser = async () => {
    try {
      const userData = await Auth.currentAuthenticatedUser();
      setUser(userData);
    } catch(e) {
      setUser();
    }
  }

  useEffect(() => {
    getCurrentUser();
  }, []);

    const context = {
        connected,
        setConnected,
        authState,
        user
    };

    return <AppContext.Provider value={context}>{children}</AppContext.Provider>
}

export default AppContextProvider;
