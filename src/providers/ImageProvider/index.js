import React from 'react'
import { Image } from '../../components'

export default function ImageProvider(props) {
    return (
        <Image {...props}>
            {props.children}
        </Image>
    )
}
