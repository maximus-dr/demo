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

function extractChildrenByRole(componentData, role) {
    const result = new Set();

    function getChild(data) {
    
        if (data.childrenList && data.childrenList.length > 0) {
            data.childrenList.forEach(child => {
                if (child.role === role) {
                    result.add(child);
                }
                if (child.childrenList && child.childrenList.length > 0) {
                    getChild(child);
                }
            });
        } 
        return;
    }
    getChild(componentData);
    return result;
}

export {
    isLabel,
    isCheckbox,
    getRole,
    extractChildrenByRole
}