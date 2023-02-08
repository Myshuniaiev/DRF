import { Box } from "@mui/material";
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
  <Box style={formStyles}>
    <Outlet />
  </Box>
);

export default MinimalLayout;
