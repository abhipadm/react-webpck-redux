import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";
import Header from "./shared/Header";
import PageNotFound from "./PageNotFound";

import "./App.css";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={AboutPage} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
