import React, { useContext, useEffect, useRef, useState } from 'react'
import { OutlinesContext } from '../../context/outlinesContext';
import { getAttrs } from '../../core/functions/styles';
import { Input, InputLabel, InputWrapper } from './InputStyled';


export default function InputView(props) {

    const outlines = useContext(OutlinesContext);
    const attrs = getAttrs(props.componentData);
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        if (props.resetSelect) {
            setChecked(false);
        }
        
    }, [props.resetSelect]);

    // добавляет опциональные аттрибуты для компонента
    const inputAttrs = attrs || {};
    const labelAttrs = props.componentData.label && props.componentData.label.attrs || {};
    const optionAttrs = props.componentData.option && props.componentData.option.attrs || {};

    const input = 
        <Input
            {...inputAttrs}
            id={attrs && attrs.id || props.componentData.id}
            type={attrs && attrs.type || 'text'}
            name={attrs && attrs.name || 'name'}
            componentData={props.componentData}
            checked={checked}
            onChange={(e) => {
                setChecked(!checked);
                props.onChange(e);
            }}
        />
    ;

    const label =
        <InputLabel 
            {...labelAttrs} 
            componentData={props.componentData}
            htmlFor={labelAttrs.htmlFor || props.componentData.id}
        >
            {labelAttrs && labelAttrs.value || 'Label'}
        </InputLabel>
    ;

    return (
        <InputWrapper componentData={props.componentData} showOutlines={outlines} onClick={(e) => {
            if (e.target === e.currentTarget) {
                setChecked(!checked);
            }
        }} >
            {input}
            {label}
            {props.children}
        </InputWrapper>
    )
}
