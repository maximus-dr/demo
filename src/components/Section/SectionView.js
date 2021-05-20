import React from 'react'
import { SectionWrapper } from './SectionStyled'


export default function Section(props) {

    const styles = props.componentData && props.componentData.styles
        ? props.componentData.styles
        : {};

    return (
        <SectionWrapper styles={styles}>
            {props.children}
        </SectionWrapper>
    )
}
