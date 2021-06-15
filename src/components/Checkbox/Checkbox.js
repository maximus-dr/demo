import React, { useEffect, useRef } from 'react'
import { getHandler } from '../../core/functions/components'


export default function Checkbox(props) {

    const inputRef = useRef(null);

    useEffect(() => {
        if (props.reset) {
            inputRef.current.checked = false;
        }
    }, [inputRef, props.reset]);

    
    return (
        <div>
            <input
                ref={inputRef}
                type="checkbox" 
                id={props.componentData.id} 
                onClick={getHandler(props, 'onClick')}
            />
            <label htmlFor={props.componentData.id}>{props.componentData.label && props.componentData.label || 'Checkbox'}</label>
        </div>
    )
}
