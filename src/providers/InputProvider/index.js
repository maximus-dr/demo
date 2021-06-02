import { nanoid } from 'nanoid'
import React from 'react'
import { Input } from '../../components'


export default function InputProvider(props) {

    return (
        <Input {...props}>
            {props.children}
        </Input>
    )
}
