import React from 'react'
import { DescriptionBody } from './DescriptionStyled'

export default function DescriptionView(props) {
    const componentData = props.componentData ? props.componentData : null;
    const content = componentData.value || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ';

    return (
        <DescriptionBody {...componentData}>
            {content}
        </DescriptionBody>
    )
}
