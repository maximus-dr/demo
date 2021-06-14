import React, { useCallback, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Outlines } from './context/outlinesContext';
import { renderComponents } from './core/functions/render';


const RadioItem = (props) => {
  return (

      <input type="radio" name={props.name} id={props.id} checked={props.id === props.activeTab} onChange={() => props.onChange(props.id)} />

  );
}

const RadioGroup = () => {
  const [activeTab, setActiveTab] = useState('1');


  return (
    <div>
      <RadioItem name="group" id="1" activeTab={activeTab} onChange={setActiveTab} />
      <RadioItem name="group" id="2" activeTab={activeTab} onChange={setActiveTab} />
      <RadioItem name="group" id="3" activeTab={activeTab} onChange={setActiveTab} />
    </div>
  );
}

export default function App(props) {
  const components = renderComponents(props.routes);

  return (
    <>
      <Router>
        <RadioGroup />
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
