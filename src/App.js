import React from "react";
import "./App.css";
import Banner from "./component/banner";
import Nav from "./component/nav";
import { Route, Switch, Redirect } from "react-router-dom";
import Tour from "./page/tour";
import Orginizer from "./page/orginizer";
import Hulu from "./page/hulu";
import Traffic from "./page/traffic";
import Workshop from "./page/workshop";
import Exhibition from "./page/exhibition";
import Footer from "./component/footer";

const App = () => {
  return (
    <main className="container">
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
      <Footer />
    </main>
  );
};

export default App;
