import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { renderComponents } from './core/render';




export default function App(props) {
  return (
    <Router>
      { renderComponents(props.routes) }

      <Switch>
        <Route exact path="/about">
          About Page
        </Route>
      </Switch>
    </Router>
  )
}
