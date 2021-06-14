import React, { useState } from 'react'
import { Provider } from '..';
import { extractChildrenByRole } from '../../core/functions/components';

export default function RadioGroup(props) {

    

    const RadioContainerData = extractChildrenByRole(props, 'radioContainer');

    const [activeRadio, setActiveRadio] = useState(RadioContainerData[0].props.children[0].key);

    // const onChange = (e, props) => {
    //     setActiveRadio(props.componentData.id);
    // } 

    const el = {
        RadioContainer: Provider[RadioContainerData[0].props.componentData.typeName],
        RadioButton: null
    }

    const radioButtons = RadioContainerData[0].props.children.map(child => {
        el.RadioButton = Provider[child.props.componentData.typeName];

        const radioProps = {
            handlers: {
                onChange: (e, props) => {
                    setActiveRadio(props.componentData.id);
                }
            }
        }

        return (
            <el.RadioButton 
                key={child.key} 
                {...child.props} 
                activeRadio={activeRadio}
                {...radioProps}
                isActive={child.key === activeRadio}
                 
            />
        );
    });


    return (
        <el.RadioContainer {...RadioContainerData[0].props}>
            RadioGroup
            {radioButtons}
        </el.RadioContainer>
    )
}
