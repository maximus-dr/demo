import React, { useCallback, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Outlines } from './context/outlinesContext';
import { renderComponents } from './core/functions/render';


const Simple = () => {
  const ref = useCallback(node => {
    if (node) {
      node.focus()
    }
  }, [])
  return <div ref={ref}>Ref test</div>
}

const NormalRef = () => {
  const inputRef = React.useRef();
  const onClick = () => {
    inputRef.current.focus();
  }

  return (
    <>
      <input ref={inputRef} />
      <button onClick={onClick}>Click to Focus</button>
    </>
  );
}



export default function App(props) {
  const components = renderComponents(props.routes);

  return (
    <>

      <NormalRef />
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
