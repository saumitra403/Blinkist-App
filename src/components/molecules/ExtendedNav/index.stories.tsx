import Nav from "."
import { ComponentStory } from "@storybook/react";

export default {
    title: 'molecules/Button',
    component: Nav
}   

export const Button: ComponentStory<typeof Nav> = () => <Nav/>;
