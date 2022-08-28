import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Badge from '.'

export default {
  title: 'Badge',
  component: Badge
} as ComponentMeta<typeof Badge>

const Template: ComponentStory<typeof Badge> = (args) => 
  <Badge {...args}>Hi mom</Badge>

export const Default = Template.bind({})
