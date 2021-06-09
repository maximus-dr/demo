import React, { useCallback, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Outlines } from './context/outlinesContext';
import { renderComponents } from './core/functions/render';

const HandlerProvider = {
  tab: {
      onClick: (e) => {
          e.stopPropagation();
          console.log(e.target);
      }
  },
  tabBar: {
      onClick: (e) => {
          e.stopPropagation();
          console.log(e.target);
      }
  },
  tabList: {
      onClick: (e) => {
          e.stopPropagation();
          console.log(e.target);
      }
  }
}


export default function App(props) {
  const components = renderComponents(props.routes, HandlerProvider);

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
