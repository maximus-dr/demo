import React, { useContext, useEffect, useRef, useState } from 'react'
import { OutlinesContext } from '../../context/outlinesContext';
import { getAttrs } from '../../core/functions/styles';
import { Input, InputLabel, InputWrapper } from './InputStyled';


export default function InputView(props) {
    console.log(props);

    const outlines = useContext(OutlinesContext);
    const attrs = getAttrs(props.componentData);
    const [checked, setChecked] = useState(false);
    
    useEffect(() => {
        if (props.resetSelect) {
            setChecked(false);
        }
        
    }, [props.resetSelect]);

    function switchCheckbox() {
        setChecked(prev => !prev);
    }


    // добавляет опциональные аттрибуты для компонента
    const inputAttrs = attrs || {};
    const labelAttrs = props.componentData.label && props.componentData.label.attrs || {};

    const input = 
        <Input
            {...inputAttrs}
            id={attrs && attrs.id || props.componentData.id}
            type={attrs && attrs.type || 'text'}
            name={attrs && attrs.name || 'name'}
            componentData={props.componentData}
            checked={checked}
            onChange={() => {}}
        />
    ;

    const label =
        <InputLabel 
            {...labelAttrs} 
            componentData={props.componentData}
        >
            {labelAttrs && labelAttrs.value || 'Label'}
        </InputLabel>
    ;

    const handlers = {
        onClick: (e) => {
            switchCheckbox();
            props.onClick(e, {...props, switchCheckbox});
        }
    }

    return (
        <InputWrapper 
            componentData={props.componentData}
            showOutlines={outlines}
            
            {...handlers} 
        >
            {input}
            {label}
            {props.children}
        </InputWrapper>
    )
}
