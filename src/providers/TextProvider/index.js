import React from 'react'
import Text from '../../components/Text/TextView'


export default function TextProvider(props) {
    return (
        <Text {...props}>
            {props.children}
        </Text>
    )
}
