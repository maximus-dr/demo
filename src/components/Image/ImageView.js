import React, { useContext } from 'react'
import { OutlinesContext } from '../../context/outlinesContext'
import { ImageBody, ImageWrapper } from './ImageStyled'


export default function ImageView(props) {

    const outlines = useContext(OutlinesContext);

    return (
        <ImageWrapper {...props.componentData}>
            <ImageBody {...props.componentData} showOutlines={outlines} />
            {props.children}
        </ImageWrapper>
    )
}
