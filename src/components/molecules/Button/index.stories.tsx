import Button from "."
import { ComponentStory } from "@storybook/react";

export default {
    title: 'molecules/Button',
    component: Button
}   

const Template: ComponentStory<typeof Button> = (args) => <Button {...args}/>;


export const Resting = Template.bind({})

Resting.args = {
    resting: true
}

export const Hover = Template.bind({})

Hover.args = {
    resting: false
}

