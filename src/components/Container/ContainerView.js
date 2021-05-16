import React from 'react'
import { ContainerBackground, ContainerBody, ContainerWrapper } from './ContainerStyled';

export default function Container(props) {
  return (
    <ContainerWrapper data={props.componentsData}>
      <ContainerBackground data={props.componentsData} />
      <ContainerBody>
        {props.children}
      </ContainerBody>
    </ContainerWrapper>
  )
}
