import React, { useEffect, useRef, useState } from 'react';
import { DropdownHead, DropdownMenu, DropdownOption, DropdownWrapper, HeadIcon, HeadCaption, Clear } from './DropdownStyled';
import icon from '../../assets/arrow-down.svg';
import { renderComponents } from '../../core/functions/render';
import { extractChildrenByRole, getRole, isCheckbox, isLabel } from '../../core/functions/components';
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
    // useEffect(() => {
    //     const onClickOutside = (e) => {
    //         if (!dropdownMenuRef.current.contains(e.target) && e.target.id !== 'outlines') {
    //             setIsOpen(false);
    //         }
    //     }
    //     if (isOpen) {
    //         document.addEventListener('click', onClickOutside);
    //     }

    //     return () => document.removeEventListener('click', onClickOutside);
    // }, [isOpen]);
    
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
        const target = e.currentTarget;
        const key = props.componentData.id;
        const value = props.componentData.value;
        
        const item = 
            <HeadItem key={key} value={value} multiple={true} onClick={(e) => {
                e.stopPropagation();
                removeItem(item);
                target.checked = false;
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


    const dropdownMenuData = extractChildrenByRole(props, 'dropdownMenu');
    const dropdownHeadData = extractChildrenByRole(props, 'dropdownHead');

    const el = {
        DropdownHead: Provider[dropdownHeadData[0].props.componentData.typeName],
        DropdownMenu: Provider[dropdownMenuData[0].props.componentData.typeName],
        DropdownOptionGroup: null,
        DropdownOption: null,
        DropdownReset: null
    };

    const dropdownMenuChildren = dropdownMenuData[0].props.children.map(child => {
        if (child.props.componentData.role === 'dropdownOptionGroup') {

            const options = child.props.children && child.props.children.map(option => {
                if (option.props.componentData.role !== 'dropdownOption') return;
                el.DropdownOption = Provider[option.props.componentData.typeName];

                const handlers = {
                    onClick: option.props.componentData.multiple ?  onMultipleSelect : onSelect
                }
                // Option element
                return (
                    <el.DropdownOption 
                        key={option.key} 
                        {...option.props} 
                        reset={resetSelect} 
                        handlers={handlers}         
                    />
                );
            });

            
            el.DropdownOptionGroup = Provider[child.props.componentData.typeName];
            const optionGroupProps = {
                ...child.props,
                children: options
            }
            // OptionGroup element
            return (
                <el.DropdownOptionGroup 
                    key={child.key} 
                    {...optionGroupProps}    
                />
            );
        }

        if (child.props.componentData.role === 'dropdownReset') {
            el.DropdownReset = Provider[child.props.componentData.typeName];
            // Reset button element
            return (
                <el.DropdownReset 
                    key={child.key} 
                    {...child.props} 
                    handlers={{onClick: resetItems}}     
                />
            );
        }

        return child;
    });

    const dropdownMenuProps = {
        ...dropdownMenuData[0].props,
        children: dropdownMenuChildren
    }

    
    return (
        <DropdownWrapper>
            <el.DropdownHead {...dropdownHeadData[0].props}>
                {state}
            </el.DropdownHead>
            <el.DropdownMenu {...dropdownMenuProps} />
        </DropdownWrapper>
    )
}



{/* <DropdownWrapper>
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
</DropdownWrapper> */}



