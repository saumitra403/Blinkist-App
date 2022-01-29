import ProgressBar from ".";
import { ComponentStory } from "@storybook/react";
export default {
    title: 'atoms/ProgressBar',
    component: ProgressBar
}

export const LinearProgress: ComponentStory<typeof ProgressBar> = (args) => <ProgressBar {...args}/>; 

