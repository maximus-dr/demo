import React from 'react'
import { ContainerColumnBody, ContainerColumnWrapper } from './ContainerColumnStyled';

export default function ContainerColumn(props) {

  return (
    <ContainerColumnWrapper data={props.componentsData}>
      <ContainerColumnBody>
        {props.children}
      </ContainerColumnBody>
    </ContainerColumnWrapper>
  )
}
