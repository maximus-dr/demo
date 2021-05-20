import React from 'react';
import { renderComponents } from './core/render';



export default function App(props) {
  return (
    <>
      { renderComponents(props.routes) }
    </>
  )
}
