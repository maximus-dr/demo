import React from 'react'
import Container from './../../components/Container/ContainerView';


export default function PatternInfoProvider(props) {
  return (
    <Container componentsData={props.data}>
        {props.children}
    </Container>
  )
}
