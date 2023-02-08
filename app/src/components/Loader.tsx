import React from "react";
import { CircularProgress } from "@mui/material";

const Loader: React.FC = () => (
  <div
    style={{
      height: "100%",
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
    }}
  >
    <CircularProgress />
  </div>
);

export default Loader;
