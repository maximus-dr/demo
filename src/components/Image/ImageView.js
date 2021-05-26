import React from 'react'
import { ImageBody, ImageWrapper } from './ImageStyled'


export default function ImageView(props) {

    return (
            <ImageBody {...props.componentData}/>
    )
}
