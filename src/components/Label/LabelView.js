import React from 'react'
import { LabelSpan, LabelH1, LabelH2, LabelH3, LabelH4, LabelH5, LabelH6, LabelWarning } from './LabelStyled'


export default function LabelView(props) {

    const componentData = props.componentData ? props.componentData : null;

    const label = (heading) => {
        const warning = <LabelWarning>Не задано свойство value !</LabelWarning>;
        const text = componentData.value || warning;

        switch(heading) {
            case 'h1':
                return (
                    <LabelH1 {...props.componentData}>
                        {text}
                    </LabelH1>
                );
            case 'h2':
                return (
                    <LabelH2 {...props.componentData}>
                        {text}
                    </LabelH2>
                );
            case 'h3':
                return (
                    <LabelH3 {...props.componentData}>
                        {text}
                    </LabelH3>
                );
            case 'h4':
                return (
                    <LabelH4 {...props.componentData}>
                        {text}
                    </LabelH4>
                );
            case 'h5':
                return (
                    <LabelH5 {...props.componentData}>
                        {text}
                    </LabelH5>
                );
            case 'h6':
                return (
                    <LabelH6 {...props.componentData}>
                        {text}
                    </LabelH6>
                );
            default:
                return (
                    <LabelSpan {...props.componentData}>
                        {text}
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
