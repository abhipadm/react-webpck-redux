import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";
import Header from "./shared/Header";
import PageNotFound from "./PageNotFound";

import "./App.css";
import CoursesPage from "./courses/CoursesPage";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/courses" component={CoursesPage} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
