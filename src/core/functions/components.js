const isCheckbox = (component) => {
    return (
        component.props.componentData.typeName === 'input' 
        && component.props.componentData.attrs 
        && component.props.componentData.attrs.type 
        && component.props.componentData.attrs.type === 'checkbox'
        || null
    );
}

const isLabel = (component) => {
    return component.props.componentData.typeName === 'label' || null; 
}

export {
    isLabel,
    isCheckbox
}