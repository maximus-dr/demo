import React from 'react'
import { IconBody } from './IconStyled'

export default function IconView(props) {
    return (
        <IconBody {...props.componentData}>
            {props.children}
        </IconBody>
    )
}
