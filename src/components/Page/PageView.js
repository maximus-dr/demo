import React from 'react'
import { PageBody } from './PageStyled';


export default function Page(props) {

  return (
      <PageBody {...props.componentData}>
        {props.children}
      </PageBody>
  )
}
