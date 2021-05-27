import React from 'react'
import { Link } from '../../components'


export default function LinkProvider(props) {
    return (
        <Link {...props}>
            {props.children}
        </Link>
    )
}
