import React, { useContext } from 'react'
import { OutlinesContext } from '../../context/outlinesContext';
import { ButtonBody } from './ButtonStyled'


function sayHi() {
    alert('hi');
}

function sayHello() {
    alert('hello');
}


function actionProvider(action) {
    switch(action) {
        case 'sayHi':
            return sayHi;
        case 'sayHello':
            return sayHello;
        default:
            return () => {}
    }
}


export default function ButtonView(props) {

    const outlines = useContext(OutlinesContext);
    const action = props.componentData && props.componentData.action && props.componentData.action.onClick ? props.componentData.action.onClick : () => {};

    return (
        <ButtonBody
            showOutlines={outlines}
            onClick={actionProvider(action)} {...props.componentData} {...props}
        >
            {props.componentData && props.componentData.value || 'Button'}
            {props.children}
        </ButtonBody>
    )
}
