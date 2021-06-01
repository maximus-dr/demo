import React, { useContext, useState, useEffect } from 'react'
import { OutlinesContext } from '../../context/outlinesContext';
import { getAttrs } from '../../core/functions/styles';
import { InputField, InputLabel, InputWrapper } from './InputStyled';


const DEFAULT_PLACEHOLDER = 'Text...';


export default function InputView(props) {
    
    const actions = props.componentData.actions ? props.componentData.actions : null;

    const actionProvider = (action) => {
        switch(action) {
            case 'onDropdownCheckboxChange':
                return (e) => console.log(e.target.value);
            default:
                return;
        }
    }

    const inputActions = {};
    if (actions && actions.onChange) {
        inputActions.onChange = actionProvider(actions.onChange[0]); 
    }



    const outlines = useContext(OutlinesContext);
    const attrs = getAttrs(props.componentData);
    const defalutValue = attrs && attrs.value || '';

    const [value, setValue] = useState(defalutValue);

    useEffect(() => {
        console.log(value);
    }, [value])
    // добавляет опциональные аттрибуты для компонента
    const inputAttrs = attrs || {};
    const labelAttrs = props.componentData.label && props.componentData.label.attrs || {};
    const optionAttrs = props.componentData.option && props.componentData.option.attrs || {};


    const input = 
        <InputField
            {...attrs}
            {...inputActions}
            type={attrs && attrs.type || 'text'}
            name={attrs && attrs.name || ''}
            value={attrs && attrs.type && attrs.type === 'submit' ? 'Submit' : value}
            placeholder={attrs && attrs.placeholder || DEFAULT_PLACEHOLDER}
            disabled={attrs && attrs.disabled || false}
            required={attrs && attrs.required || false}
            componentData={props.componentData}
            onChange={(e) => {
                setValue(e.target.value);
            }}
        />
    ;

    const label =
        <InputLabel {...labelAttrs} componentData={props.componentData}>
            {labelAttrs && labelAttrs.value || 'Label'}
        </InputLabel>
    ;

    return (
        <InputWrapper componentData={props.componentData} showOutlines={outlines}>
            {input}
            {label}
            {props.children}
        </InputWrapper>
    )
}
