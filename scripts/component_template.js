// component.tsx
exports.component = (name) =>
  `import React from 'react'
import cn from 'classnames'

export type ${name}Props = {
} & React.HTMLAttributes<HTMLElement>

export const ${name} = ({
  ...props
}: ${name}Props) => {
  return (
  )
}
`;

// component.stories.jsx
exports.story = (name) =>
  `import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import ${name} from '.'

export default {
  title: '${name}',
  component: ${name}
} as ComponentMeta<typeof ${name}>

const Template: ComponentStory<typeof ${name}> = (args) => 
  <${name} {...args}>Hi mom</${name}>
  
export const Default = Template.bind({})

Default.args = {}
`;

// index.ts
exports.barrel = (name) =>
  `export { ${name} as default } from './${name}'
`;
