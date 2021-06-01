import React, { useState } from 'react'
import { DropdownHead, DropdownMenu, DropdownOption, DropdownWrapper, HeadIcon } from './DropdownStyled';
import icon from '../../assets/arrow-down.svg';
import { renderComponents } from '../../core/functions/render';
import { nanoid } from 'nanoid';


export default function Dropdown(props) {

    const [headerValue, setHeaderValue] = useState('Dropdown Header');


    const childrenList = props.componentData.childrenList;
    const options = childrenList && childrenList.map(component => renderComponents(component));
    const optionsList = options.map(option => {
        option.props.componentData.setHeaderValue = (value) => setHeaderValue(value);
        return (
            <DropdownOption key={nanoid()}>
                {option}
            </DropdownOption>
        );
    });

    return (
        <DropdownWrapper>
            <DropdownHead>
                {headerValue}
                <HeadIcon>
                    <img src={icon} width="10" height="auto" />
                </HeadIcon>
            </DropdownHead>
            
            <DropdownMenu>
                {optionsList}
            </DropdownMenu>
        </DropdownWrapper>
    )
}
