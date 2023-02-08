import React from "react";
import Routes from "./routes";
import { Auth0Provider } from "@auth0/auth0-react";

// fonts
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App() {
  return (
    <Auth0Provider
      domain="myshuniaiev.us.auth0.com"
      clientId="C5qieZueHgTjC0i71IH7PHOjCDw2Z6yk"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <Routes />
    </Auth0Provider>
  );
}

export default App;
