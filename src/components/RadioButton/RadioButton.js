import React, { useContext, useState } from 'react'
import { OutlinesContext } from '../../context/outlinesContext'
import { getAttrs } from '../../core/functions/styles';
import { RadioBody, RadioBox, RadioLabel, RadioWrapper } from './RadioButtonStyled'

export default function RadioButton(props) {
    const [checked, setChecked] = useState(false);
    console.log('checked', checked);

    const outlines = useContext(OutlinesContext);
    const attrs = getAttrs(props.componentData);
    const radioAttrs = attrs || {};
    const labelAttrs = props.componentData.label && props.componentData.label.attrs || {};

    return (
        <RadioWrapper showOutlines={outlines}>
            <div>
                <RadioBody {...radioAttrs} type="radio" checked={checked} onChange={() => setChecked(prev => !prev)}/>
                <RadioBox isChecked={checked}></RadioBox>
            </div>
            <RadioLabel {...labelAttrs} onClick={() => setChecked(!checked)}>
                radio Label
            </RadioLabel>
        </RadioWrapper>
    )
}
