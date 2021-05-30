import React from 'react';
import { Page } from './../../components/index';


export default function PageProvider(props) {
  
  return (
    <Page {...props}>
      {props.children}
    </Page>
  )
}
