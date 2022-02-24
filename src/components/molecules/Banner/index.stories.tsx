import Banner from ".";
import { ComponentStory } from "@storybook/react";

export default {
    title: 'molecules/Banner',
    component: Banner
}

export const Template: ComponentStory<typeof Banner>  = () => (
    <Banner></Banner>
)