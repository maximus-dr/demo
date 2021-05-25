import React from 'react'
import { SectionWrapper, SectionBody } from './SectionStyled'


export default function Section(props) {

    return (
        <SectionWrapper {...props.componentData}>
            <SectionBody {...props.componentData}>
                {props.children}
            </SectionBody>
        </SectionWrapper>
    )
}
