import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";

import "./App.css";

function App() {
  return (
    <div className="container-fluid">
      <switch>
        <Route exact path="/" component={HomePage} />{" "}
        <Route exact path="/about" component={AboutPage} />{" "}
      </switch>{" "}
    </div>
  );
}

export default App;
