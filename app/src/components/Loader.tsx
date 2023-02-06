import React from "react";
import { Spin } from "antd";

const Loader: React.FC = () => (
  <div
    style={{
      height: "100%",
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
    }}
  >
    <Spin size="large" />
  </div>
);

export default Loader;
