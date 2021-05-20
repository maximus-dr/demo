import React from 'react'
import { Outline } from '../../components/index'
import { SHOW_OUTLINES } from '../../core/config/index'


export default function OutlineProvider(props) {
    
    return (
        <Outline enabled={SHOW_OUTLINES} outlineColor={props.outlineColor}>
            {props.children}
        </Outline>
    )
}
