import React from 'react'
import Button from '../../components/Button/ButtonView'

export default function ButtonProvider(props) {
  return (
    <Button componentsData={props.data}>
      {props.data.componentsDescription.value}
    </Button>
  )
}
