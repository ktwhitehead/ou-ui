import React, { useContext, useEffect, useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AppContext from '../Context/AppContext';

const AuthRoute = ({ key, attributes, children }) => {
  const { user, authState } = useContext(AppContext);

  return authState === 'signedin' && user ? (
    <Route key={key} {...attributes}>{children}</Route>
  ) : (
    <Redirect to="/login" />
  )
};

export default AuthRoute;
