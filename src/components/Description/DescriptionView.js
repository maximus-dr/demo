import React from 'react'
import { DescriptionText, DescriptionWrapper } from './DescriptionStyled'

export default function Description(props) {
  return (
    <DescriptionWrapper data={props.componentsData}>
      <DescriptionText data={props.componentsData}>
        {props.children}
      </DescriptionText>
    </DescriptionWrapper>
  )
}
