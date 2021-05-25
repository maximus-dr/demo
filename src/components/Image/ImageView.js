import React from 'react'
import { ImageBody } from './ImageStyled'


export default function ImageView(props) {

    return (
        <ImageBody {...props.componentData} />
    )
}
