import React from 'react'
import { Icon } from '../../components'


export default function IconProvider(props) {
    return (
        <Icon {...props}>
            {props.children}
        </Icon>
    )
}
