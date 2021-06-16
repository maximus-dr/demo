import React, { useContext, useEffect, useRef } from 'react'
import { OutlinesContext } from '../../context/outlinesContext';
import { getHandler } from '../../core/functions/components'
import { CheckboxInput, CheckboxLabel, CheckboxValue, CheckboxWrapper } from './CheckboxStyled';


export default function Checkbox(props) {

    const outlines = useContext(OutlinesContext);
    const ref = useRef(null);

    useEffect(() => {
        if (props.reset) {
            ref.current.checked = false;
        }
    }, [ref, props.reset]);

    
    return (
            <CheckboxLabel 
                showOutlines={outlines}
                htmlFor={props.componentData.id} 
                {...props}
            >
                <CheckboxInput
                    ref={ref}
                    type="checkbox" 
                    id={props.componentData.id} 
                    onClick={getHandler(props, 'onClick')}
                />
                <CheckboxValue>
                    {props.componentData.label && props.componentData.label || null}
                </CheckboxValue>
            </CheckboxLabel>
    )
}
