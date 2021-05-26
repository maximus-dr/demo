import React from 'react'
import Button from '../../components/Button/ButtonView'


export default function ButtonProvider(props) {
    return (
        <Button {...props}>
            {props.children}
        </Button>
    )
}
