import React, { useContext } from 'react'
import { OutlinesContext } from '../../context/outlinesContext'
import { getAttrs } from '../../core/functions/styles';
import { FormBody } from './FormStyled'


export default function FormView(props) {

    const outlines = useContext(OutlinesContext);
    const attrs = getAttrs(props.componentData);

    return (
        <div>
            <FormBody 
                componentData={props.componentData} 
                showOutlines={outlines}
                action={attrs && attrs.action || ''}
                method={attrs && attrs.method || ''}    
            >
                {props.children}
            </FormBody>
        </div>
    )
}
