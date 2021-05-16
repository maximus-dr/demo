import React from 'react'
import Label from './../../components/Label/LabelView';

export default function LabelProvider(props) {
  const {data} = props;
  const label = data.componentsDescription.value;

  return (
    <Label componentData={props.data}>
      {label}
    </Label>
  )
}
