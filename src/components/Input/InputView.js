import React, { useContext, useState } from 'react'
import { OutlinesContext } from '../../context/outlinesContext';
import { getAttrs } from '../../core/functions/styles';
import { InputField, InputLabel, InputWrapper } from './InputStyled';


const DEFAULT_PLACEHOLDER = 'Text...';


export default function InputView(props) {
    console.log(props);

    const outlines = useContext(OutlinesContext);
    const attrs = getAttrs(props.componentData);


    // добавляет опциональные аттрибуты для компонента
    const inputAttrs = attrs || {};
    const labelAttrs = props.componentData.label && props.componentData.label.attrs || {};
    const optionAttrs = props.componentData.option && props.componentData.option.attrs || {};


    const input = 
        <InputField
            type={attrs && attrs.type || 'text'}
            name={attrs && attrs.name || 'name'}
            componentData={props.componentData}
            onChange={props.componentData.actions.onDropdownCheckboxChange} 
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
