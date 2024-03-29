import React, { useContext } from 'react'
import { OutlinesContext } from '../../context/outlinesContext'
import { IconBody } from './IconStyled'

export default function IconView(props) {
    
    const outlines = useContext(OutlinesContext);

    return (
        <IconBody {...props.componentData} showOutlines={outlines}>
            {props.children}
        </IconBody>
    )
}
