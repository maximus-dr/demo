import React, { useRef, useState } from 'react'
import { DropdownHead, DropdownMenu, DropdownOption, DropdownWrapper, HeadIcon, HeadCaption, Clear } from './DropdownStyled';
import icon from '../../assets/arrow-down.svg';
import { renderComponents } from '../../core/functions/render';
import { isCheckbox, isLabel } from '../../core/functions/components';


const Item = (props) => {
    return (
        <div style={{border: '1px solid gray', cursor: 'pointer'}} onClick={props.onClick}>
            {props.value}
        </div>
    );
}

const defaultItem = <Item key="default-item" value="Выберите значение" />;



export default function Dropdown(props) {

    const [state, setState] = useState(() => new Set().add(defaultItem));

    

    const childrenList = props.componentData.dropdownMenu.childrenList;
    const options = childrenList && childrenList.map(component => renderComponents(component));

    const optionRefs = new Set();

    const addItem = item => {
        setState(prev => {
            const next = new Set(prev);
            next.delete(defaultItem);
            next.add(item);
            return next;
        });
    }

    const removeItem = item => {
        setState(prev => {
            const next = new Set(prev);
            next.delete(item);

            if (next.size === 0) {
                next.add(defaultItem);
            }
            return next;
        })
    }

    const clearItems = () => {
        setState(() => new Set().add(defaultItem));
        for (let item of optionRefs) {
            item.current.checked = false;
        }
    }

    const onChange = (e) => {
        const key = e.target.name;
        const value = e.target.name;
        const checkbox = e.target;

        const item = <Item key={key} value={value} multiple={true} onClick={() => {
            removeItem(item);
            checkbox.checked = false;
        }} />

        for (let item of state) {
            
            if (!item.props.multiple) {
                removeItem(item);
            }
            if (item.key === key) {
                removeItem(item);
                return;
            }
        }
        addItem(item);
    };

    const onClick = (props) => {
        const key = props.componentData.id;
        const value = props.componentData.value;

        const item = <Item key={key} value={value} onClick={() => {
            removeItem(item);
        }} />
        clearItems();
        addItem(item);
    }
    

    

    const optionsList = options.map(child => {
        let optionComponent = child;
        
        if (isCheckbox(child) && child.props.componentData.role && child.props.componentData.role === 'dropdownOption') {
            const ref = React.useRef();
            optionRefs.add(ref);
            
            
            optionComponent = React.cloneElement(child, 
                {
                    ...child.props,
                    componentData: {
                        ...child.props.componentData,
                        actions: {
                            dropdown: {
                                onChange: onChange
                            }
                        },
                        ref
                    }
                }
            );
        }

        if (isLabel(child) && child.props.componentData.role && child.props.componentData.role === 'dropdownOption') {
            optionComponent = React.cloneElement(child, {
                ...child.props,
                componentData: {
                    ...child.props.componentData,
                    actions: {
                        dropdown: {
                            onClick: onClick
                        }
                    }
                }
            })
        }

        return (
            <DropdownOption key={child.props.componentData.id}>
                {optionComponent}
            </DropdownOption>
        );
    });

    

    return (
        <DropdownWrapper>
            <DropdownHead>
                <HeadCaption>
                    {state}
                </HeadCaption>
                
                <HeadIcon>
                    <img src={icon} width="10" height="auto" />
                </HeadIcon>
            </DropdownHead>

            <DropdownMenu>
                {optionsList}
                <Clear onClick={clearItems}>Очистить</Clear>
            </DropdownMenu>

        </DropdownWrapper>
    )
}
