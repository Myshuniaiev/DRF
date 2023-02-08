import React from "react";

// project import
import MainLayout from "../layout/MainLayout";

// render - dashboard
import DashboardDefault from "../pages/dashboard";
import Profile from "../pages/profile";
import Settings from "../pages/settings";

const MainRoutes = {
  path: "/",
  element: <MainLayout />,
  children: [
    {
      path: "/",
      element: <DashboardDefault />,
    },
    {
      path: "/profile",
      element: <Profile />,
    },
    {
      path: "/settings",
      element: <Settings />,
    },
  ],
};

export default MainRoutes;
