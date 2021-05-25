
import { nanoid } from 'nanoid';
import { providerByComponentTitle } from '../providers'


// рекурсивно перебирает childrenList в структуре и возвращает массив провайдеров по type
export function getProviders(props) {

    const getChildrenProviders = (props) => {
        return (
        props.component.childrenList &&
        props.component.childrenList.length > 0 &&
        props.component.childrenList.map(child => {
            const provider = providerByComponentTitle(child.type);

            if (provider) {
            const childProps = {
                id: child.id,
                provider: providerByComponentTitle(child.type),
                component: child
            }
            return getProviders(childProps);
            }

            if (!provider) {
            console.log(`Провайдер "${child.type}" не найден`);
            }
        })
        );
    }

    return (
            <props.provider key={nanoid()} componentData={props.component}>
                { getChildrenProviders(props) }
            </props.provider>
    );
}

// рендерит провайдеры на страницу
export function renderComponents(component) {
    const props = {
        id: component.id,
        provider: providerByComponentTitle(component.type),
        component
    }
    return getProviders(props);
}



