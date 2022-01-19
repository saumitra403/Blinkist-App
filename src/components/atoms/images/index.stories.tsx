import Img from './index'
import { ComponentStory } from '@storybook/react';

export default {
    title: "atoms/images",
    component: Img,
};

const Template: ComponentStory<typeof Img> = (args) => <Img {...args}/>;

export const cardImage = Template.bind({})
cardImage.args = {
    src: "Assets/Capture.jpg",
    height: "292px",
    width: "294.1px"
}