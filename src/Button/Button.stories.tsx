import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from '.';

export default {
  title: 'Button',
  component: Button,
  argTypes: {}
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>Hi mom</Button>
);

export const Default = Template.bind({});

Default.args = {};
