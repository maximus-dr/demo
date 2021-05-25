import React from 'react'
import Label from '../../components/Label/LabelView'

export default function LabelProvider(props) {
    return (
        <Label {...props}>
            {props.children}
        </Label>
    )
}
