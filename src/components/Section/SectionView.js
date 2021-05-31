import React, { useContext } from 'react'
import { SectionWrapper, SectionBody, SectionBackground } from './SectionStyled'
import { OutlinesContext } from './../../context/outlinesContext';


export default function Section(props) {

    const outlines = useContext(OutlinesContext);

    return (
        <SectionWrapper componentData={props.componentData} showOutlines={outlines}>
            <SectionBackground componentData={props.componentData}>
                <SectionBody componentData={props.componentData}>
                    {props.children}
                </SectionBody>
            </SectionBackground>
        </SectionWrapper>
    )
}
