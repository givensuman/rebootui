import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Tooltip from '.';

export default {
  title: 'Tooltip',
  component: Tooltip
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = (args) => (
  <Tooltip {...args}>
    <button>Hi mom</button>
  </Tooltip>
);

export const Default = Template.bind({
  label: 'Hi mom'
});

Default.args = {};
