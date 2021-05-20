import React from 'react'
import { Section } from '../../components';


export default function SectionProvider(props) {

    return (
            <Section {...props}>
                {props.children}
            </Section>
    )
}
