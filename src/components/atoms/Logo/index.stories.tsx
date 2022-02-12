import Logo from './index';
import { ComponentStory } from '@storybook/react';
export default {
    title: 'atoms/Logo',
    component: Logo
};

export const Template: ComponentStory<typeof Logo> = (args) => <Logo {...args}/>;