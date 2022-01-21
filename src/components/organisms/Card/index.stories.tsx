import {ComponentStory, ComponentMeta} from '@storybook/react';
import Card from '.';
export default {
  title: "organisms/Card",
  component: Card
}; 


const Template: ComponentStory<typeof Card> = (args) => <Card {...args}/>;

export const card = Template.bind({});

card.args = {
  imgsrc: "Assets/Capture.jpg",
  bookname: "Bring Your Human To Work",
  author: "Erica Keswin" 
}
    