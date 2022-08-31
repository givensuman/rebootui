import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Spinner from '.';

export default {
  title: 'Spinner',
  component: Spinner
} as ComponentMeta<typeof Spinner>;

const Template: ComponentStory<typeof Spinner> = (args) => (
  <Spinner {...args} />
);

export const Default = Template.bind({});
export const Grow = Template.bind({});

Default.args = {};
Grow.args = {
  type: 'grow'
};
