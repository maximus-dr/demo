import React, { useState } from 'react'
import { Provider } from '..';
import { extractChildrenByRole } from '../../core/functions/components';
import { TabWarning, TabWarningCaption } from './TabStyled';


const createMessage = (message) => {
    return <div>{message}</div>
}


export default function Tab(props) {
    
    const tabBarData = extractChildrenByRole(props, 'tabBar');
    const tabHeadData = extractChildrenByRole(props, 'tabHead');
    const tabListData = extractChildrenByRole(props, 'tabList');
    const tabsData = tabListData && extractChildrenByRole(tabListData[0].props, 'tab') || null;
    const tabContentData = extractChildrenByRole(props, 'tabContent');

    const warnings = [];

    if (!tabBarData) warnings.push(createMessage('Добавьте tabBar'));
    if (!tabHeadData) warnings.push(createMessage('Добавьте tabHead'));
    if (!tabListData) warnings.push(createMessage('Добавьте tabList'));
    if (!tabsData) warnings.push(createMessage('Добавьте tab'));
    if (!tabContentData) warnings.push(createMessage('Добавьте tabContent'));
    
    if (warnings.length > 0) {
        return (
            <TabWarning>
                <TabWarningCaption>Warning!</TabWarningCaption>
                {warnings.map((item, i) => <div style={{}} key={i}>{item}</div>)}
            </TabWarning>
        );
    }

    const [activeTab, setActiveTab] = useState(tabsData && tabsData[0].props.componentData.tabKey || null);

    const el = {
        TabBar: Provider[tabBarData[0].props.componentData.typeName],
        TabHead: Provider[tabHeadData[0].props.componentData.typeName],
        TabList: Provider[tabListData[0].props.componentData.typeName],
        Tab,
        TabContent: Provider[tabContentData[0].props.componentData.typeName]
    }
    
    // Tabs
    const tabItems = tabsData.map(tab => {
        el.Tab = Provider[tab.props.componentData.typeName];

        const tabProps = {
            ...tab.props,
            handlers: {
                onClick: (e, props) => {
                    e.preventDefault();
                    setActiveTab(props.componentData.tabKey);
                }
            }
        }
        return (
            <el.Tab
                {...tabProps}
                key={tab.key}
                isActive={tab.props.componentData.tabKey === activeTab}    
            />
        );
    });

    // TabContent
    const tabContentProps = {
        ...tabContentData.props
    }

    // предотвращает отрисовку табов из таб-баров на других уровнях  вложенности
    const tabHeadChildren = tabHeadData.props.children.map(child => {
        if (child.props.componentData.role && child.props.componentData.role === 'tabList') {
                return
            }
        return child;
    });


    return (
        <el.TabBar key={tabBarData.key} {...tabBarData.props}>
            <el.TabHead key={tabHeadData.key} {...tabHeadData.props}>
                <el.TabList key={tabListData.key} {...tabListData.props}>
                    {tabItems}
                </el.TabList>
                {tabHeadChildren}
            </el.TabHead>
            
            <el.TabContent key={tabContentData.key} {...tabContentProps}>
                Active tab: {activeTab}
                {tabContentData.props.children}
            </el.TabContent>
        </el.TabBar>
    )
}
