import React from "react";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import { Route } from "react-router-dom";
import { PageLoader } from "./page-loader";

export const ProtectedRoute = ({ component, ...args }: any) => (
  <Route
    component={withAuthenticationRequired(component, {
      onRedirecting: () => (
        <div className="page-layout">
          <PageLoader />
        </div>
      ),
    })}
    {...args}
  />
);
