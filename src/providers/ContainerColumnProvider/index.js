import React from 'react'
import ContainerColumn from './../../components/ContainerColumn/ContainerColumnView';

export default function ContainerColumnProvider(props) {
  return (
    <ContainerColumn componentsData={props.data}>
      {props.children}
    </ContainerColumn>
  )
}
