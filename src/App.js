import React from "react";
import "./App.css";
import Banner from "./component/banner";
import Nav from "./component/nav";
import { Route, Switch, Redirect } from "react-router-dom";
import Tour from "./page/tour";
import Orginizer from "./page/orginizer";
import Hulu from "./page/hulu";
import Traffic from "./page/traffic";
import Travel from "./page/travel";
import Workshop from "./page/workshop";
import Exhibition from "./page/exhibition";

const App = () => {
  return (
    <div>
      <div>This is main App</div>
      <Banner />
      <Nav />
      <Switch>
        <Route exact path="/">
          <Tour />
        </Route>
        <Route exact path="/workshop">
          <Workshop />
        </Route>
        <Route exact path="/exhibition">
          <Exhibition />
        </Route>
        <Route exact path="/hulu">
          <Hulu />
        </Route>
        <Route exact path="/organizer">
          <Orginizer />
        </Route>
        <Route exact path="/traffic">
          <Traffic />
        </Route>
        <Redirect to="/" />
      </Switch>
    </div>
  );
};

export default App;
