import React from "react";
import {
  AmplifyAuthenticator,
  AmplifySignUp,
  AmplifySignIn,
} from "@aws-amplify/ui-react";

const Login = () => {
  return (
    <AmplifyAuthenticator>
      <AmplifySignUp
        slot='sign-up'
        usernameAlias='email'
        formFields={[
          {
            type: "email",
            label: "Email",
            placeholder: "Email",
            required: true,
          },
          {
            type: "password",
            label: "Password",
            placeholder: "Password",
            required: true,
          },
        ]}
      />
      <AmplifySignIn
        slot='sign-in'
        usernameAlias='email'
        formFields={[
          {
            type: "email",
            label: "Email",
            placeholder: "Email",
            required: true,
          },
          {
            type: "password",
            label: "Password",
            placeholder: "Password",
            required: true,
          }
        ]}
      />
    </AmplifyAuthenticator>
  );
};

export default Login;
