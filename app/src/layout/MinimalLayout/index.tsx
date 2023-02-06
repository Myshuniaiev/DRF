import { Content } from "antd/es/layout/layout";
import React from "react";
import { Outlet } from "react-router-dom";


const formStyles: React.CSSProperties = {
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

const MinimalLayout = () => (
  <Content style={formStyles}>
    <Outlet />
  </Content>
);

export default MinimalLayout;
