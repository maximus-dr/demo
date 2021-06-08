import React from 'react'
import { extractChildrenByRole } from '../../core/functions/components'


export default function Tab(props) {

    console.log(props);

    const tabs = extractChildrenByRole(props.componentData, 'tab');
    const tabBars = extractChildrenByRole(props.componentData, 'tabBar');
    const tabLists = extractChildrenByRole(props.componentData, 'tabList');


    return (
        <>
            Tab component
            {props.children}
        </>
    )
}
