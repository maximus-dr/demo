import React from 'react'
import { SectionWrapper, SectionBody } from './SectionStyled'


export default function Section(props) {

    const styles = props.componentData && props.componentData.styles
        ? props.componentData.styles
        : {};

    return (
        <SectionWrapper styles={styles}>
            <SectionBody styles={styles}>
                {props.children}
            </SectionBody>
        </SectionWrapper>
    )
}
