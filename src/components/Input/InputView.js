import { nanoid } from 'nanoid';
import React from 'react'
import { InputField, InputWrapper } from './InputStyled';


export default function InputView(props) {

    const inputId = nanoid();
    return (
        <InputWrapper>
            <InputField>
                <input id={inputId} type={props.componentData.inputType || 'text'} />
            </InputField>
            
            <label htmlFor={inputId}>{props.componentData.value || ''}</label>
        </InputWrapper>
    )
}
