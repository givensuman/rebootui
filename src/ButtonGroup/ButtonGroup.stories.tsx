import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ButtonGroup } from './ButtonGroup';
import Button from '../Button';

export default {
  title: 'ButtonGroup',
  component: ButtonGroup
} as ComponentMeta<typeof ButtonGroup>;

const Template: ComponentStory<typeof ButtonGroup> = (args) => (
  <ButtonGroup {...args}>
    <Button active>Hi</Button>
    <Button>Mom</Button>
  </ButtonGroup>
);

export const Default = Template.bind({});

Default.args = {
  role: 'group',
  label: 'Default example'
};
