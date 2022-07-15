import React from "react";
import { CreateGlobalStyles } from "./styles/globlaStyles";
import Home from "./pages/Home";

export const App = () => {
  return (
    <>
      <CreateGlobalStyles />
      <Home />
    </>
  );
};

export default App;
