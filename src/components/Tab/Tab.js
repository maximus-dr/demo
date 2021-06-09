import React, { useState } from 'react'
import { Provider } from '..';
import { extractChildrenByRole } from '../../core/functions/components';






export default function Tab(props) {
    
    const tabBarData = extractChildrenByRole(props, 'tabBar')[0];
    const tabHeadData = extractChildrenByRole(props, 'tabHead')[0];
    const tabListData = extractChildrenByRole(props, 'tabList')[0];
    const tabsData = extractChildrenByRole(props, 'tab');
    const tabContentData = extractChildrenByRole(props, 'tabContent')[0];

    const [activeTab, setActiveTab] = useState(tabsData[0].props.componentData.tabKey);

    const el = {
        TabBar: Provider[tabBarData.props.componentData.typeName],
        TabHead: Provider[tabHeadData.props.componentData.typeName],
        TabList: Provider[tabListData.props.componentData.typeName],
        Tab,
        TabContent: Provider[tabContentData.props.componentData.typeName]
    }
    
    // Tabs
    const tabItems = tabsData.map(tab => {
        el.Tab = Provider[tab.props.componentData.typeName];

        const tabProps = {
            ...tab.props,
            handlers: {
                onClick: (e, props) => {
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
