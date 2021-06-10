import React, { useContext } from 'react'
import { OutlinesContext } from '../../context/outlinesContext';
import { getAttrs } from '../../core/functions/styles';
import { LabelSpan, LabelH1, LabelH2, LabelH3, LabelH4, LabelH5, LabelH6, Label } from './LabelStyled'


const getHandler = (props, action) => {
    return (
        (e) => props.handlers 
        && props.handlers[action] 
        && props.handlers[action](e, props) || null
    );
}


export default function LabelView(props) {

    const outlines = useContext(OutlinesContext);
    const componentData = props.componentData ? props.componentData : null;
    const attrs = getAttrs(props.componentData);

    // const handlers = {
    //     onClick: props.callbacks ? (e) => props.callbacks.onClick(e, props) : null
    // }

    const label = (heading) => {

        const text = componentData.value || 'Label';
        const htmlFor = attrs && componentData.attrs['for'] || '';

        switch(heading) {
            case 'h1':
                return (
                    <LabelH1
                        {...props} 
                        {...props.componentData} 
                        showOutlines={outlines}
                        onClick={getHandler(props, 'onClick')}
                    >
                        {text}
                        {props.children}
                    </LabelH1>
                );
            case 'h2':
                return (
                    <LabelH2
                        {...props}
                        {...props.componentData} 
                        showOutlines={outlines}
                        onClick={getHandler(props, 'onClick')}
                    >
                        {text}
                        {props.children}
                    </LabelH2>
                );
            case 'h3':
                return (
                    <LabelH3 
                        {...props}
                        {...props.componentData} 
                        showOutlines={outlines}
                        onClick={getHandler(props, 'onClick')}
                    >
                        {text}
                        {props.children}
                    </LabelH3>
                );
            case 'h4':
                return (
                    <LabelH4
                        {...props}
                        {...props.componentData} 
                        showOutlines={outlines}
                        onClick={getHandler(props, 'onClick')}
                    >
                        {text}
                        {props.children}
                    </LabelH4>
                );
            case 'h5':
                return (
                    <LabelH5
                        {...props}
                        {...props.componentData} 
                        showOutlines={outlines}
                        onClick={getHandler(props, 'onClick')}
                    >
                        {text}
                        {props.children}
                    </LabelH5>
                );
            case 'h6':
                return (
                    <LabelH6
                        {...props}
                        {...props.componentData} 
                        showOutlines={outlines}
                        onClick={getHandler(props, 'onClick')}
                    >
                        {text}
                        {props.children}
                    </LabelH6>
                );
            case 'label':
                return (
                    <Label 
                        htmlFor={htmlFor} 
                        {...props}
                        {...props.componentData} 
                        showOutlines={outlines}
                        onClick={getHandler(props, 'onClick')}
                    >
                        {text}
                        {props.children}
                    </Label>
                );
            default:
                return (
                    <LabelSpan 
                        showOutlines={outlines}
                        {...props}
                        {...props.componentData}
                        {...props.handlers}
                        onClick={getHandler(props, 'onClick')}
                    >
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
