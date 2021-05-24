import React from 'react'
import { ImageBody, ImageWrapper } from './ImageStyled'

export default function ImageView(props) {
    return (
        <ImageWrapper>
            <ImageBody {...props.componentData}>
                {props.children}
            </ImageBody>
        </ImageWrapper>
    )
}
