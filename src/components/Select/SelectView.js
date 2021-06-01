import React, { useContext } from 'react'
import { OutlinesContext } from '../../context/outlinesContext'
import { getAttrs } from '../../core/functions/styles';
import { SelectBody, SelectLabel, SelectOption, SelectWrapper } from './SelectStyled'


export default function Select(props) {

    const outlines = useContext(OutlinesContext);
    const attrs = getAttrs(props.componentData);

    const selectAttrs = attrs && attrs.select || null;
    const optionAttrs = attrs && attrs.option || null;
    const labelAttrs = attrs && attrs.label || null;

    const selectOpts = selectAttrs ? selectAttrs : {};
    const optionOpts = optionAttrs ? optionAttrs : {};
    const labelOpts = labelAttrs ? labelAttrs : {};


    return (
        <SelectWrapper componentData={props.componentData} showOutlines={outlines}>
            <SelectBody {...selectOpts} name="select">
                <SelectOption>option1</SelectOption>
                <SelectOption>option2</SelectOption>
            </SelectBody>
            <SelectLabel {...labelAttrs} componentData={props.componentData}>
                label
            </SelectLabel>
        </SelectWrapper>
    )
}
