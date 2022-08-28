import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import {
    Alert, AlertLink, AlertHeading, AlertBody
} from '.'

import ipsum from '../utils/ipsum'

export default {
  title: 'Alert',
  component: Alert,
  argTypes: {
  },
} as ComponentMeta<typeof Alert>

const Template: ComponentStory<typeof Alert> = (args) => 
    <Alert {...args}>
        This is a <AlertLink href="#">link!</AlertLink>
        <AlertHeading>
            Hi mom
        </AlertHeading>
        <AlertBody>
            {ipsum()}
        </AlertBody>
    </Alert>

export const Default = Template.bind({})

Default.args = {
}