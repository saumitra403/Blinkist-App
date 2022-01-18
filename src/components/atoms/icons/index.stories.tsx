import Icon from "./index";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { MoreHoriz,PersonSharp } from "@mui/icons-material";
// import Icons from ".";
export default {
  title: "atoms/icons",
  component: Icon,
};

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args}/>;

export const more = Template.bind({});

more.args = {
  Icons: <MoreHoriz></MoreHoriz>
}

export const person = Template.bind({});

person.args = {
  Icons: <PersonSharp></PersonSharp>
}