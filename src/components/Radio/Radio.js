import React, { useContext, useState } from 'react'
import { OutlinesContext } from '../../context/outlinesContext'
import { getHandler } from '../../core/functions/components';
import { getAttrs } from '../../core/functions/styles';
import { RadioButton, RadioGroup, RadioLabel, RadioWrapper, RadioOuterCircle, RadioInnerCircle } from './RadioStyled'


export default function Radio(props) {

    const radioProps = props.componentData.controlled 
        ? {
            checked: props.isActive,
            onChange: getHandler(props, 'onChange')
        }

        : {};

    return (
        <>
            <RadioButton type="radio"
                id={props.componentData.id}
                name={props.componentData.attrs && props.componentData.attrs.name || 'default'} 
                {...radioProps}
            />
            <RadioLabel htmlFor={props.componentData.id}>Radio</RadioLabel>
        </>
    );
}


