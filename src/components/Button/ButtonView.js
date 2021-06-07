import React, { useContext } from 'react'
import { OutlinesContext } from '../../context/outlinesContext';
import { ButtonBody } from './ButtonStyled'


export default function ButtonView(props) {

    const outlines = useContext(OutlinesContext);

    return (
        <ButtonBody
            showOutlines={outlines}
             {...props.componentData} {...props}
        >
            {props.componentData && props.componentData.value || 'Button'}
            {props.children}
        </ButtonBody>
    )
}
