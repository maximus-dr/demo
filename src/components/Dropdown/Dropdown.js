import React, { useContext, useEffect, useRef, useState } from 'react';
import { DropdownMenuWrapper, DropdownWarning, DropdownWarningCaption, DropdownWrapper, HeadTag } from './DropdownStyled';
import { extractChildrenByRole } from '../../core/functions/components';
import { Provider } from '..';
import { OutlinesContext } from '../../context/outlinesContext';


const createMessage = (message) => {
    return <div>{message}</div>
}

const HeadItem = (props) => {
    return (
        <HeadTag onClick={props.onClick} multiple={props.multiple}>
            {props.value}
        </HeadTag>
    );
}
const defaultItem = <HeadItem key="default-item" value="Выберите значение" />;



export default function Dropdown(props) {

    const dropdownWrapperData = extractChildrenByRole(props, 'dropdownWrapper');
    const dropdownHeadItemData = extractChildrenByRole(props, 'dropdownHeadItem');
    const dropdownHeadData = extractChildrenByRole(props, 'dropdownHead');
    const dropdownHeadCaptionData = extractChildrenByRole(props, 'dropdownHeadCaption');
    const dropdownMenuData = extractChildrenByRole(props, 'dropdownMenu');

    const outlines = useContext(OutlinesContext);
    const dropdownMenuRef = useRef(null);

    const [state, setState] = useState(() => new Set().add(defaultItem));
    const [isOpen, setIsOpen] = useState(true);
    const [resetSelect, setResetSelect] = useState(false);

    const warnings = [];

    if (!dropdownWrapperData) warnings.push(createMessage('Добавьте dropdownWrapper'));
    if (!dropdownHeadItemData) warnings.push(createMessage('Добавьте dropdownHeadItem'));
    if (!dropdownHeadData) warnings.push(createMessage('Добавьте dropdownHead'));
    if (!dropdownHeadCaptionData) warnings.push(createMessage('Добавьте dropdownHeadCaption'));
    if (!dropdownMenuData) warnings.push(createMessage('Добавьте dropdownMenu'));

    const el = {
        DropdownWrapper: Provider[dropdownWrapperData[0].props.componentData.typeName],
        DropdownHead: Provider[dropdownHeadData[0].props.componentData.typeName],
        DropdownHeadCaption: Provider[dropdownHeadCaptionData[0].props.componentData.typeName],
        DropdownMenu: Provider[dropdownMenuData[0].props.componentData.typeName],
        DropdownOptionGroup: null,
        DropdownOption: null,
        DropdownReset: null
    };
    
    // закрывает выпадающее меню при клике вне этого меню
    useEffect(() => {
        const onClickOutside = (e) => {
            if (dropdownMenuRef.current 
                && !dropdownMenuRef.current.contains(e.target) 
                && e.target.id !== 'outlines') {
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
        const data = props.componentData;
        const key = data.id;
        const value = data.optionValue || data.value || `option id: ${key}`;
        const item = 
            <HeadItem key={key} value={value} />
        resetItems();
        addItem(item);
        setIsOpen(false);
    }

    const onMultipleSelect = (e, props) => {
        const data = props.componentData
        const target = e.currentTarget;
        const key = data.id;
        const value = data.optionValue || `option id: ${key}`;
        
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

    
    const dropdownHeadChildren = dropdownHeadData[0].props.children.map(child => {
        if (child && child.props.componentData.role && child.props.componentData.role === 'dropdownHeadCaption') {
            return (
                <el.DropdownHeadCaption key={child.key} {...dropdownHeadCaptionData[0].props}>
                    {state}
                </el.DropdownHeadCaption>
            );
        }
        return child;
    });

    const menuChildren = dropdownMenuData[0].props.children;

    const dropdownMenuChildren = menuChildren && menuChildren.map(child => {
        if (child && child.props.componentData.role === 'dropdownOptionGroup') {

            const options = child.props.children && child.props.children.map(option => {
                if (option.props.componentData.role === 'dropdownOption') {
                    el.DropdownOption = Provider[option.props.componentData.typeName];

                    const handlers = {
                        onClick: option.props.componentData.multiple || option.props.componentData.typeName === 'checkbox' ?  onMultipleSelect : onSelect
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
                }
                return option;
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

        if (child && child.props.componentData.role === 'dropdownReset') {
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


    if (warnings.length > 0) {
        return (
            <DropdownWarning>
                <DropdownWarningCaption>Warning!</DropdownWarningCaption>
                {warnings.map((item, i) => <div style={{}} key={i}>{item}</div>)}
            </DropdownWarning>
        );
    }

    
    return (
        <el.DropdownWrapper {...dropdownWrapperData[0].props} showOutlines={outlines}>
            <el.DropdownHead {...dropdownHeadData[0].props} onClick={() => {setIsOpen(!isOpen)}}>
                {dropdownHeadChildren}
            </el.DropdownHead>

            <DropdownMenuWrapper ref={dropdownMenuRef} isOpen={isOpen}>
                <el.DropdownMenu {...dropdownMenuData[0].props}>
                    {dropdownMenuChildren}
                </el.DropdownMenu>
            </DropdownMenuWrapper>
        </el.DropdownWrapper>
    )
}
