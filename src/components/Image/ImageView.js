import React from 'react'
import { ImageBody, ImageWrapper } from './ImageStyled'


export default function ImageView(props) {

    return (
        <ImageWrapper {...props.componentData}>
            <ImageBody {...props.componentData}/>
            {props.children}
        </ImageWrapper>
    )
}
