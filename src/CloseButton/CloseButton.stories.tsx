import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import CloseButton from '.';

export default {
  title: 'CloseButton',
  component: CloseButton
} as ComponentMeta<typeof CloseButton>;

const Template: ComponentStory<typeof CloseButton> = (args) => (
  <CloseButton {...args} />
);

export const Default = Template.bind({});
export const White = Template.bind({});

White.args = {
  white: true
};
