import React, { useState, useEffect } from 'react';
import AppContext from './AppContext';
import { onAuthUIStateChange } from '@aws-amplify/ui-components'

const AppContextProvider = ({children}) => {
  const [connected, setConnected] = useState(false);
  const [authState, setAuthState] = React.useState();
  const [user, setUser] = React.useState();

  useEffect(() => {
    return onAuthUIStateChange((nextAuthState, authData) => {
        setAuthState(nextAuthState);
        setUser(authData)
    });
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
