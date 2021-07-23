import React from "react";

import {  BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import "./App.css"

import ViewBox from "./viewbox"
import ViewProduct from "./viewproduct"
import ViewResults from "./viewresults";

function App() {
  return(
        <Router>
          <Switch>
            <Route exact path="/">
              <ViewBox/>
            </Route>
            <Route exact path="/items">
              <ViewResults/>
            </Route>
            <Route path="/items/:id">
              <ViewProduct/>
            </Route>
          </Switch>
        </Router>
      )
}

export default App;
