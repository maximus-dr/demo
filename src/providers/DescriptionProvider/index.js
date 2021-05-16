import React from 'react'
import Description from './../../components/Description/DescriptionView';

export default function DescriptionProvider(props) {
  const { data } = props;
  const text = data.componentsDescription.value;

  return (
    <Description componentsData={props.data}>
      {text}
    </Description>
  )
}
