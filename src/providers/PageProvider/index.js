import React from 'react'
import Page from './../../components/Page/PageView';

export default function PageProvider(props) {
  return (
    <Page>
      {props.children}
    </Page>
  )
}
