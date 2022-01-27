import Header from ".";
import {ComponentStory} from '@storybook/react';

export default {
    title: "organisms/Header",
    component: Header
}; 

export const Template: ComponentStory<typeof Header> = () => <Header/>;