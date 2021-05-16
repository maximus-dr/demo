import React from 'react';
import { providerByComponentTitle } from './providers/index';
import { nanoid } from 'nanoid';


function getProviders(props) {

  const getChildrenProviders = (props) => {
    return (
      props.component.childrenList &&
      props.component.childrenList.length > 0 &&
      props.component.childrenList.map(child => {
        const provider = providerByComponentTitle(child.typeName);

        if (provider) {
          const childProps = {
            id: child.id,
            provider: providerByComponentTitle(child.typeName),
            component: child
          }
          return getProviders(childProps);
        }

        if (!provider) {
          console.log(`Провайдер "${child.typeName}" не найден`);
        }
      })
    );
  }

  return (
    <props.provider key={nanoid()} data={props.component}>
      { getChildrenProviders(props) }
    </props.provider>
  );
}

function renderComponents(component) {
  const props = {
    id: component.id,
    provider: providerByComponentTitle(component.typeName),
    component
  }
  return getProviders(props);
}

 

export default function App(props) {
  return (
    <>
      { renderComponents(props.routes) }
    </>
  )
}
