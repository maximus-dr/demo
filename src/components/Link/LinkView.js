import React from 'react'
import { Link } from 'react-router-dom'
import { LinkBody, LinkWrapper } from './LinkStyled'


export default function LinkView(props) {
    return (
        <LinkWrapper {...props.componentData}>
            <Link to='/link' style={{textDecoration: 'none'}}>
                <LinkBody {...props.componentData}>
                    {props.componentData && props.componentData.value || 'Link'}
                </LinkBody>
                    {props.children}
            </Link>
        </LinkWrapper> 
    )
}
