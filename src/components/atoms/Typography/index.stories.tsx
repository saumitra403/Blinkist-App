import {ComponentStory, ComponentMeta} from '@storybook/react';
import Typography from ".";
const TypographyComponent = {
  title: "atoms/Typography",
  component: Typography,
} as ComponentMeta<typeof Typography>;


export const Template: ComponentStory<typeof Typography>  = (args:any) => (
    <Typography {...args} >Erica Keswin</Typography>
)

export default TypographyComponent;