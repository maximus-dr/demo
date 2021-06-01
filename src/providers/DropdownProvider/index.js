import React from 'react'
import { Dropdown } from '../../components'

export default function DropdownProvider(props) {
    return (
        <Dropdown {...props}>
            {props.children}
        </Dropdown>
    )
}
