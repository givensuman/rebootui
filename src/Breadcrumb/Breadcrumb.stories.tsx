import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { 
  Breadcrumb, BreadcrumbItem
} from '.'

export default {
  title: 'Breadcrumb',
  component: Breadcrumb
} as ComponentMeta<typeof Breadcrumb>

const Template: ComponentStory<typeof Breadcrumb> = (args) => 
  <Breadcrumb {...args}>
    <BreadcrumbItem>Hi</BreadcrumbItem>
    <BreadcrumbItem active>Mom</BreadcrumbItem>
  </Breadcrumb>
  
export const Default = Template.bind({})
