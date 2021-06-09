import React, { useEffect, useRef, useState } from 'react';
import { DropdownHead, DropdownMenu, DropdownOption, DropdownWrapper, HeadIcon, HeadCaption, Clear } from './DropdownStyled';
import icon from '../../assets/arrow-down.svg';
import { renderComponents } from '../../core/functions/render';
import { getRole, isCheckbox, isLabel } from '../../core/functions/components';
import { Provider } from '..';


const HeadItem = (props) => {
    return (
        <div style={{border: '1px solid gray'}} onClick={props.onClick}>
            {props.value}
        </div>
    );
}
const defaultItem = <HeadItem key="default-item" value="Выберите значение" />;


export default function Dropdown(props) {

    const [state, setState] = useState(() => new Set().add(defaultItem));
    const [isOpen, setIsOpen] = useState(true);
    const [resetSelect, setResetSelect] = useState(false);
    
    const childrenList = props.componentData.dropdownMenu && props.componentData.dropdownMenu.childrenList || null;
    const childrenComponents = childrenList && childrenList.map(component => renderComponents(component, {})) || null;

    const dropdownMenuRef = useRef(null);

    // закрывает выпадающее меню при клике вне этого меню
    useEffect(() => {
        const onClickOutside = (e) => {
            if (!dropdownMenuRef.current.contains(e.target) && e.target.id !== 'outlines') {
                setIsOpen(false);
            }
        }
        if (isOpen) {
            document.addEventListener('click', onClickOutside);
        }

        return () => document.removeEventListener('click', onClickOutside);
    }, [isOpen]);
    
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

    const onSelect = (e, props) => {
        const key = props.componentData.id;
        const value = props.componentData.value;
        const item = 
            <HeadItem key={key} value={value} />
        resetItems();
        addItem(item);
        setIsOpen(false);
    }

    const onMultipleSelect = (e, props) => {
        const key = props.componentData.id;
        const value = props.componentData.value;
        
        const item = 
            <HeadItem key={key} value={value} multiple={true} onClick={(e) => {
                e.stopPropagation();
                removeItem(item);

                if (props.componentData.typeName === 'input') {
                    props.switchCheckbox();
                }
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


        if (getRole(child) === 'dropdownOptionGroup') {
            const component = {
                item: Provider[componentData.typeName]
            }

            const children = child.props.children.map(child => {

                if (isLabel(child) && getRole(child) === 'dropdownOption') {
                    const onClick = child.props.componentData.multipleSelect ? onMultipleSelect : onSelect;

                    const component = {
                        item: Provider[child.props.componentData.typeName]
                    }
        
                    const newProps = {
                        ...child.props,
                        callbacks: {
                            onClick,
                            setResetSelect
                        }
                    }
        
                    optionComponent = <component.item {...newProps} />
        
                    return (
                        <DropdownOption key={child.key}>
                            {optionComponent}
                        </DropdownOption>
                    );
                }
                return child;
            });

            return (
                <component.item key={componentData.id} componentData={componentData}>
                    {children}
                </component.item>
            );    
        }

        
        
        if (isCheckbox(child) && getRole(child) === 'dropdownCheckbox') {
            optionComponent = <el.item 
                {...child.props}
                onClick={onMultipleSelect} 
                resetSelect={resetSelect}
                key={componentData.id}
            />
            return optionComponent;
        }

        if (isLabel(child) && getRole(child) === 'dropdownOption') {
            const onClick = child.props.componentData.multipleSelect ? onMultipleSelect : onSelect;

            const newProps = {
                ...child.props,
                callbacks: {
                    onClick,
                    setResetSelect
                }
            }

            optionComponent = <el.item {...newProps} />

            return (
                <DropdownOption key={componentData.id}>
                    {optionComponent}
                </DropdownOption>
            );
        }

        if (getRole(child) === 'dropdownResetButton') {
            return (
                <el.item key={componentData.id} {...child.props} onClick={resetItems} />
            );
        }

        return <el.item key={componentData.id} {...child.props} />
    }) || [];

    
    return (
        <DropdownWrapper>
            <DropdownHead onClick={(e) => {
                setIsOpen(!isOpen);
            }}>
                <HeadCaption>
                    {state}
                </HeadCaption>
                
                <HeadIcon>
                    <img src={icon} width="10" height="auto" />
                </HeadIcon>
            </DropdownHead>

            <DropdownMenu isOpen={isOpen} ref={dropdownMenuRef}>
                {optionsList}
            </DropdownMenu>
            {props.children}
        </DropdownWrapper>
    )
}
