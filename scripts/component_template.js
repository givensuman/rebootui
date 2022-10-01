// component.tsx
exports.component = (name) =>
  `import React from 'react';
import classnames from 'classnames';
import Box from './Box';
import { type GlobalProps } from './_reboot/types';

type ${name}Props = {
} & GlobalProps

const ${name} = React.forwardRef(
  (
    {
      as = 'div',
      ...props
    }: ${name}Props,
    ref: React.Ref<any>
  ) => {
    return (
      <Box
        as={as}
        className={classnames('')}
        ref={ref}
        {...props}
      >
        {props.children}
      </Box>
    );
  }
);

export default ${name};`;

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
