import React from 'react'
import { Select } from '../../components'

export default function SelectProvider(props) {
    return (
        <Select {...props}>
            {props.children}
        </Select>
    )
}
