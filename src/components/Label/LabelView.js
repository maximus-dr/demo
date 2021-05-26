import React from 'react'
import { LabelSpan, LabelH1, LabelH2, LabelH3, LabelH4, LabelH5, LabelH6, LabelWarning } from './LabelStyled'


export default function LabelView(props) {

    const componentData = props.componentData ? props.componentData : null;

    const label = (heading) => {

        const text = componentData.value || 'Заголовок';

        switch(heading) {
            case 'h1':
                return (
                    <LabelH1 {...props.componentData}>
                        {text}
                        {props.children}
                    </LabelH1>
                );
            case 'h2':
                return (
                    <LabelH2 {...props.componentData}>
                        {text}
                        {props.children}
                    </LabelH2>
                );
            case 'h3':
                return (
                    <LabelH3 {...props.componentData}>
                        {text}
                        {props.children}
                    </LabelH3>
                );
            case 'h4':
                return (
                    <LabelH4 {...props.componentData}>
                        {text}
                        {props.children}
                    </LabelH4>
                );
            case 'h5':
                return (
                    <LabelH5 {...props.componentData}>
                        {text}
                        {props.children}
                    </LabelH5>
                );
            case 'h6':
                return (
                    <LabelH6 {...props.componentData}>
                        {text}
                        {props.children}
                    </LabelH6>
                );
            default:
                return (
                    <LabelSpan {...props.componentData}>
                        {text}
                        {props.children}
                    </LabelSpan>
                );
        }
    } 

    return (
        <>
            {label(componentData.heading)}
        </>
    );
}
