import React, { useContext } from 'react'
import { OutlinesContext } from '../../context/outlinesContext';
import { ButtonBody } from './ButtonStyled'

const getHandler = (props, action) => {
    return (
        (e) => props.handlers 
        && props.handlers[action] 
        && props.handlers[action](e, props) || null
    );
} 


export default function ButtonView(props) {

    const outlines = useContext(OutlinesContext);

    return (
        <ButtonBody
            showOutlines={outlines}
            {...props.componentData}
            {...props}
            onClick={getHandler(props, 'onClick')}
        >
            {props.componentData && props.componentData.value || 'Button'}
            {props.children}
        </ButtonBody>
    )
}
