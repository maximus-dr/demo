import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Outlines } from './context/outlinesContext';
import { renderComponents } from './core/functions/render';


export default function App(props) {
  const components = renderComponents(props.routes);

  return (
    <>
      <Router>
        <Outlines>
          { components }
        </Outlines>
        
      <Switch>
        <Route exact path="/about">
          About Page
        </Route>
      </Switch>
    </Router>
    </>
  )
}
