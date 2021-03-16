import React, { useContext, useEffect, useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AppContext from '../Context/AppContext';

const AuthRoute = ({ key, attributes, children }) => {
  const [uh, setUh] = useState(false);
  const { user, authState } = useContext(AppContext);

  useEffect(() => {
    setUh(!setUh);
  }, [user, authState]);

  return authState === 'signedin' && user ? (
    <Route key={key} {...attributes}>{children}</Route>
  ) : (
    <Redirect to="/login" />
  )
};

export default AuthRoute;
