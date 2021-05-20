import React from 'react'
import { PageBody } from './PageStyled';


export default function Page(props) {
  console.log('page props', props);
  return (
      <PageBody styles={props.componentData.styles}>
        {props.children}
      </PageBody>
  )
}
