import React, { useContext, useState } from 'react'
import { OutlinesContext } from '../../context/outlinesContext';
import { getAttrs } from '../../core/functions/styles';
import { InputField, InputWrapper } from './InputStyled';


const DEFAULT_PLACEHOLDER = 'Text...';


export default function InputView(props) {
    
    const outlines = useContext(OutlinesContext);
    const attrs = getAttrs(props.componentData);
    const defalutValue = attrs && attrs.defalutValue || '';

    const [value, setValue] = useState(defalutValue);

    const onInputChange = (e) => {
        setValue(e.target.value);
    }

    // добавляет опциональные аттрибуты для компонента
    let opts = {};

    if (attrs.id) {
        opts.id = attrs['id'];
    }

    const input = 
        <InputField
            {...opts}
            type={attrs && attrs.type || 'text'}
            name={attrs && attrs.name || ''}
            value={attrs && attrs.type && attrs.type === 'submit' ? 'Submit' : value}
            onChange={onInputChange}
            placeholder={attrs && attrs.placeholder || DEFAULT_PLACEHOLDER}
            disabled={attrs && attrs.disabled || false}
            required={attrs && attrs.required || false}
            componentData={props.componentData}
        />
    ;

    return (
        <InputWrapper componentData={props.componentData} showOutlines={outlines}>
            {input}
            {props.children}
        </InputWrapper>
    )
}
