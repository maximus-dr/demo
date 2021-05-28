import React from 'react'
import { ButtonBody } from './ButtonStyled'


export default function ButtonView(props) {

    return (
        <ButtonBody {...props.componentData}>
            {props.componentData && props.componentData.value || 'Button'}
            {props.children}
        </ButtonBody>
    )
}
