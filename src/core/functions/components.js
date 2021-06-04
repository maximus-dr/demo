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

const getRole = (component) => {
    return component.props.componentData.role && component.props.componentData.role || null;
}

export {
    isLabel,
    isCheckbox,
    getRole
}