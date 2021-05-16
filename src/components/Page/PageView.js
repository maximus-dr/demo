import React from 'react'
import { PageBody, PageWrapper } from './PageStyled';

export default function Page(props) {
  return (
    <PageWrapper>
      <PageBody>
        {props.children}
      </PageBody>
    </PageWrapper>
  )
}
