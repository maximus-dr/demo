import React from 'react'
import { ImageWrapper } from './ImageStyled';

export default function ImageView(props) {

  const data = props.componentsData;
  const url = data.componentsDescription.source;
  const styles = {
    width: 'auto',
    height: 'auto',
    maxWidth: '100%',
    borderRadius: data.styles.borderRadius
  }

  return (
    <ImageWrapper data={data}>
      <img src={url} style={styles} alt="alt"/>
    </ImageWrapper>
  )
}
