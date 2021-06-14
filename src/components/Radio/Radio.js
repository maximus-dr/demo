import React, { useContext, useState } from 'react'
import { OutlinesContext } from '../../context/outlinesContext'
import { getHandler } from '../../core/functions/components';
import { getAttrs } from '../../core/functions/styles';
import { RadioButton, RadioGroup, RadioLabel, RadioWrapper, RadioOuterCircle, RadioInnerCircle } from './RadioStyled'


export default function Radio(props) {

    return (
        <>
            <RadioButton type="radio"
                id={props.componentData.id}
                name={props.componentData.attrs && props.componentData.attrs.name || 'default'} 
                checked={props.componentData.id === props.activeRadio}
                onChange={() => props.onChange(props.componentData.id)}
            />
            <RadioLabel htmlFor={props.componentData.id}>Label</RadioLabel>
        </>
    );
}


