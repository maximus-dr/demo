import React from 'react'
import { TagText, TagWrapper } from './TagStyled'

export default function Tag(props) {

  return (
    <TagWrapper data={props.componentData}>
      <TagText data={props.componentData}>
        {props.children}
      </TagText>
    </TagWrapper>
  )
}
