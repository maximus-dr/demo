import React, { useContext } from 'react'
import { OutlinesContext } from '../../context/outlinesContext';
import { getHandler } from '../../core/functions/components';
import { ButtonBody } from './ButtonStyled'


export default function Button(props) {
    console.log(props);

    const outlines = useContext(OutlinesContext);

    return (
        <ButtonBody
            {...props}
            {...props.componentData}
            showOutlines={outlines}
            onClick={getHandler(props, 'onClick')}
        >
            {props.componentData && props.componentData.value || 'Button'}
            {props.children}
        </ButtonBody>
    )
}
