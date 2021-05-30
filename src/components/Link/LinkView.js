import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { OutlinesContext } from '../../context/outlinesContext'
import { LinkBody, LinkWrapper } from './LinkStyled'


export default function LinkView(props) {

    const outlines = useContext(OutlinesContext);

    return (
        <LinkWrapper {...props.componentData} showOutlines={outlines}>
            <Link to='/link' style={{textDecoration: 'none'}}>
                <LinkBody {...props.componentData}>
                    {props.componentData && props.componentData.value || 'Link'}
                </LinkBody>
                    {props.children}
            </Link>
        </LinkWrapper> 
    )
}
