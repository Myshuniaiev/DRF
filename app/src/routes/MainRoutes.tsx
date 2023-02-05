import React from "react";
import { lazy } from "react";

// project import
import Loadable from "../components/Loadable";
import MainLayout from "../layout/MainLayout";

// render - dashboard
const DashboardDefault = Loadable(lazy(() => import("../pages/dashboard")));
const Profile = Loadable(lazy(() => import("../pages/profile")));
const Settings = Loadable(lazy(() => import("../pages/settings")));

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
