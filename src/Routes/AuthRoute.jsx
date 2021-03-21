import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AppContext from '../Context/AppContext';

const AuthRoute = ({ attributes, component }) => {
  const { user, authState } = useContext(AppContext);

  return (user) ? 
    <Route {...attributes} component={component} />
    :
    <Redirect to="/login" />
};

export default AuthRoute;
