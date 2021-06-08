
import { Provider } from '../../components';


// рендерит провайдеры на страницу
export function renderComponents(componentData) {
    const props = {
        componentData,
        id: componentData.id,
        component: Provider[componentData.typeName]
    }

    return getComponents(props);
}


// рекурсивно перебирает childrenList в структуре и возвращает массив провайдеров по typeName
function getComponents(props) {

    if (!props.componentData) return;
    if (!props.componentData.id) console.log(`Не задан id у компонента ${props.componentData.typeName}`);

    const getChildrenComponents = (props) => {
        return (
        props.componentData.childrenList &&
        props.componentData.childrenList.length > 0 &&
        props.componentData.childrenList.map(child => {
            const component = Provider[child.typeName];

            if (component) {
            const childProps = {
                id: child.id,
                component: Provider[child.typeName],
                componentData: child
            }
            return getComponents(childProps);
            }

            if (!component) {
            console.log(`Компонент "${child.typeName}" не найден`);
            }
        }));
    }

    return (
            <props.component key={props.id} componentData={props.componentData} >
                { getChildrenComponents(props) }
            </props.component>
    );
}


export function renderComponent(componentData) {
    const component = {
        item: Provider[componentData.typeName]
    }
    return <component.item key={componentData.id} componentData={componentData} />
}