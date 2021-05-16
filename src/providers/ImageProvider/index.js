import React from 'react'
import ImageView from '../../components/Image/ImageView'

export default function ImageProvider(props) {
  return (
    <>
      <ImageView componentsData={props.data} />
    </>
  )
}
