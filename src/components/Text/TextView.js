import React from 'react'
import { noPropWarning } from '..';
import { TextBody } from './TextStyled'

export default function TextView(props) {
    const componentData = props.componentData ? props.componentData : null;
    const content = componentData.value || noPropWarning('value');

    return (
        <TextBody {...componentData}>
            {content}
        </TextBody>
    )
}
