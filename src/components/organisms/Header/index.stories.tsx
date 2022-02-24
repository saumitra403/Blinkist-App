import Header from ".";
import {ComponentStory} from '@storybook/react';
import { BrowserRouter as Router} from "react-router-dom";
export default {
    title: "organisms/Header",
    component: Header
}; 

export const Template: ComponentStory<typeof Header> = () => <Router><Header/></Router>;