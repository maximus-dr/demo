import React from 'react'
import { ButtonBody, ButtonLink, ButtonWrapper } from './ButtonStyled'

export default function Button(props) {
  return (
    <ButtonWrapper data={props.componentsData}>
      <ButtonLink>
        <ButtonBody data={props.componentsData}>
          {props.children}
        </ButtonBody>
      </ButtonLink>
    </ButtonWrapper>
  )
}
