import React from "react";
import { Switch, Route } from "react-router-dom";
import Series from "../../containers/Series/Series";
import SignleSeries from "../../containers/SingleSeries/index";

const Main = props => (
  <Switch>
    <Route exact path="/" component={Series} />
    <Route path="/series/:id" component={SignleSeries} />
  </Switch>
);

export default Main;
