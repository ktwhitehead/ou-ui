import React from 'react';
import { AmplifyAuthenticator, AmplifySignUp, AmplifySignIn } from "@aws-amplify/ui-react";

const Login = () => {
  return (
  <AmplifyAuthenticator>
    {/* <AmplifySignUp
      slot="sign-up"
      usernameAlias="email"
      formFields={[
        {
          type: "email",
          label: "Custom email Label",
          placeholder: "custom email placeholder",
          required: true,
        },
        {
          type: "password",
          label: "Custom Password Label",
          placeholder: "custom password placeholder",
          required: true,
        }
      ]}
    />
    <AmplifySignIn slot="sign-in" usernameAlias="email" /> */}
  </AmplifyAuthenticator>
  )
}

export default Login;
