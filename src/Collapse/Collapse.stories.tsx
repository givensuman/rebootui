import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import {
  Collapse, CollapseButton, CollapseBody
} from '.'
import { type CollapseBodyProps } from './Collapse'
import { type ButtonProps } from '../Button/Button'

import ipsum from '../utils/ipsum'

export default {
  title: 'Collapse',
  component: Collapse
} as ComponentMeta<typeof Collapse>

const Template: ComponentStory<typeof Collapse> = (args: CollapseBodyProps & ButtonProps) => 
  <Collapse>
    <CollapseButton {...args}>
      Hi mom
    </CollapseButton>
    <CollapseBody horizontal={args.horizontal}>
      {ipsum()}
    </CollapseBody>
  </Collapse>
  
export const Default = Template.bind({})
