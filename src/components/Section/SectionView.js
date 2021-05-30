import React, { useContext } from 'react'
import { SectionWrapper, SectionBody } from './SectionStyled'
import { OutlinesContext } from './../../context/outlinesContext';


export default function Section(props) {

    const outlines = useContext(OutlinesContext);

    return (
        <SectionWrapper {...props.componentData} showOutlines={outlines}>
            <SectionBody {...props.componentData}>
                {props.children}
            </SectionBody>
        </SectionWrapper>
    )
}
