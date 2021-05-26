import React from 'react'
import Description from '../../components/Description/DescriptionView'


export default function DescriptionProvider(props) {
    return (
        <Description {...props}>
            {props.children}
        </Description>
    )
}
