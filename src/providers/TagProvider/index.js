import React from 'react'
import Tag from './../../components/Tag/TagView';

export default function TagProvider(props) {
  const content = props.data.componentsDescription.value;
  
  return (
    <Tag componentData={props.data}>
      {content}
    </Tag>
  )
}
