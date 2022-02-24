import AddButton from "."
import { ComponentStory } from "@storybook/react";

export default {
    title: 'molecules/Button',
    component: AddButton
}   

export const Button: ComponentStory<typeof AddButton> = () => <AddButton/>;