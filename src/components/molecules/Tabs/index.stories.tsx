import TabComponent from ".";
import { ComponentStory } from "@storybook/react";

export default {
    title: 'molecules/Tabs',
    component: TabComponent
}   

const tabData = [
    { 
      'value': 0,
      'label': 'Explore by category',
    },
    { 
      'value': 1,
      'label': 'See recently added titles'
    }
]

const stateHandler = () => {};
export const Tab: ComponentStory<typeof TabComponent> = (...args) => <TabComponent tabData={tabData} stateHandler={stateHandler}/>;

