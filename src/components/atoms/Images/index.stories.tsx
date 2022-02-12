import Img from "."
import { ComponentStory } from '@storybook/react';

export default {
    title: "atoms/images",
    component: Img,
};

const Template: ComponentStory<typeof Img> = (args) => <Img {...args}/>;

export const cardImage = Template.bind({})
cardImage.args = {
    src: "Assets/Blinklist 1.jpg",
    height: "292px",
    width: "294.1px"
}