import React from 'react'
import { extractChildrenDataByRole, extractChildrenByRole } from './../../core/functions/components';
import { Provider } from './../index';



export default function Tab(props) {

    const tabs = extractChildrenDataByRole(props.componentData, 'tab');
    
    const onCLick = () => console.log('click');


    const tabEls = tabs.map(tab => {
        const component = {
            item: Provider[tab.typeName]
        }
        return <component.item key={tab.id} {...tab} onClick={(e) => console.log(e.target)} />
    })


    return (
        <>
            Tab component
            {props.children}
            <div>
                {tabEls}
            </div>
        </>
    )
}
