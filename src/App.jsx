import React from "react";
import User from "./User";
import Home from "../src/containers/HomeContainer.jsx";
import Header from "../src/containers/HeaderContainer.jsx";
const App = () => {
  return (
    <div className="App">
      <h1>App component</h1>
      <Header />
      <Home />
    </div>
  );
};

export default App;
