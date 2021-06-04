import React, { useState } from 'react';
import { DropdownHead, DropdownMenu, DropdownOption, DropdownWrapper, HeadIcon, HeadCaption, Clear } from './DropdownStyled';
import icon from '../../assets/arrow-down.svg';
import { renderComponents } from '../../core/functions/render';
import { getRole, isCheckbox, isLabel } from '../../core/functions/components';
import { Provider } from '..';


const Item = (props) => {
    return (
        <div style={{border: '1px solid gray'}} onClick={props.onClick}>
            {props.value}
        </div>
    );
}
const defaultItem = <Item key="default-item" value="Выберите значение" onClick={(e) => e.stopPropagation()}/>;


export default function Dropdown(props) {

    const [state, setState] = useState(() => new Set().add(defaultItem));
    const [resetSelect, setResetSelect] = useState(false);
    
    const childrenList = props.componentData.dropdownMenu && props.componentData.dropdownMenu.childrenList || null;
    const childrenComponents = childrenList && childrenList.map(component => renderComponents(component)) || null;
    
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

    const resetItems = () => {
        setState(() => new Set().add(defaultItem));
        setResetSelect(true);
    }

    const onSelect = (props) => {
        const key = props.componentData.id;
        const value = props.componentData.value;
        const item = 
            <Item key={key} value={value} onClick={(e) => {
                e.stopPropagation();
                removeItem(item);
            }} />
        resetItems();
        addItem(item);
    }

    const onMultipleSelect = (e) => {
        const key = e.currentTarget.name;
        const value = e.currentTarget.name;
        const item = 
            <Item key={key} value={value} multiple={true} onClick={(e) => {
                e.stopPropagation();
                removeItem(item);
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
        setResetSelect(false);
    };
    

    const optionsList = childrenComponents && childrenComponents.map(child => {
        let optionComponent = child;
        const componentData = child.props.componentData;   
        const type = componentData.typeName;
        
        const el ={
            item: Provider[type]
        }
        
        if (isCheckbox(child) && getRole(child) === 'dropdownOption') {
            optionComponent = <el.item 
                {...child.props} 
                onChange={onMultipleSelect} 
                resetSelect={resetSelect} 
                setResetSelect={setResetSelect} />
            return (
                <DropdownOption key={componentData.id}>
                    {optionComponent}
                </DropdownOption>
            );
        }

        if (isLabel(child) && getRole(child) === 'dropdownOption') {
            optionComponent = <el.item 
                {...child.props} 
                onClick={onSelect} 
                setResetSelect={setResetSelect} />
            return (
                <DropdownOption key={componentData.id}>
                    {optionComponent}
                </DropdownOption>
            );
        }

        return <el.item key={componentData.id} {...child.props} />
    }) || [];

    
    return (
        <DropdownWrapper>
            <DropdownHead onClick={(e) => {
                console.log('close');
            }}>
                <HeadCaption>
                    {state}
                </HeadCaption>
                
                <HeadIcon>
                    <img src={icon} width="10" height="auto" />
                </HeadIcon>
            </DropdownHead>

            <DropdownMenu>
                {optionsList}
                <Clear onClick={resetItems}>Очистить</Clear>
            </DropdownMenu>
            {props.children}
        </DropdownWrapper>
    )
}
