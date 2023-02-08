import React from "react";

// project import
import MinimalLayout from "../layout/MinimalLayout";

// render - login
import AuthLogin from "../pages/authentication/Login";
import AuthRegister from "../pages/authentication/Register";

const LoginRoutes = {
  path: "/",
  element: <MinimalLayout />,
  children: [
    {
      path: "login",
      element: <AuthLogin />,
    },
    {
      path: "register",
      element: <AuthRegister />,
    },
  ],
};

export default LoginRoutes;
