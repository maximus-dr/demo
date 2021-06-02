import React, { useState } from 'react'
import { DropdownHead, DropdownMenu, DropdownOption, DropdownWrapper, HeadIcon } from './DropdownStyled';
import icon from '../../assets/arrow-down.svg';
import { renderComponents } from '../../core/functions/render';
import { nanoid } from 'nanoid';


export default function Dropdown(props) {

    const [headerValue, setHeaderValue] = useState('Dropdown Header');


    const childrenList = props.componentData.childrenList;
    const childrenComponents = childrenList && childrenList.map(component => renderComponents(component));

    const onChange = (e) => setHeaderValue(e.target.name);
    const optionsList = childrenComponents.map(child => {

        let optionComponent;
        
        if (child.props.componentData.typeName === 'input' && child.props.componentData.attrs && child.props.componentData.attrs.type && child.props.componentData.attrs.type === 'checkbox') {
            optionComponent = React.cloneElement(child, 
                {
                    ...child.props,
                    componentData: {
                        ...child.props.componentData,
                        actions: {
                            onDropdownCheckboxChange: (e) => {setHeaderValue(e.target.name)}
                        }
                    },
                    key: nanoid()
                }
            );
        }

        

        return (
            <DropdownOption key={nanoid()}>
                {optionComponent}
            </DropdownOption>
        );
    });

    return (
        <DropdownWrapper>
            <DropdownHead key={nanoid()}>
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
