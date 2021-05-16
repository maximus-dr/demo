import React from 'react';
import {LabelText, LabelWrapper} from './LabelStyled';

export default function Label(props) {
  return (
    <LabelWrapper data={props.componentData}>
      <LabelText data={props.componentData}>
        {props.children}
      </LabelText>
    </LabelWrapper>
  )
}
