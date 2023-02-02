import React, { useEffect } from "react";
import Routes from "./routes";

function App() {
  useEffect(() => {
    const apiUrl = "http://127.0.0.1:8000/api/";
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => console.log("%c%s", "color: #a6ffb6", "all set: ", data));
  }, []);
  return <Routes />;
}

export default App;
