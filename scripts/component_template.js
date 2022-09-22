// component.tsx
exports.component = (name) =>
  `/** @jsx jsx */
/** @jsxRuntime classic */
import React from 'react'
import classnames from 'classnames'
import { jsx } from '@emotion/react'
import handleCssProp, { type CssProp } from './_reboot/handleCssProp'
import handleUtilityClasses, { type UtilityProps } from './_reboot/handleUtilityClasses'

type ${name}Props = {
} & React.HTMLAttributes<HTMLElement> & UtilityProps & CssProp

const ${name} = React.forwardRef((
  {

    css,
    ...props
  }: ${name}Props, 
  ref: React.Ref<any>
) => {

  const [ utilityClasses, filteredProps ] = handleUtilityClasses(props)

  return (
    <div
      className={classnames(utilityClasses)}

      css={handleCssProp(css)}
      ref={ref}

      {...filteredProps}
    >
      {props.children}
    </div>
  )
})

export default ${name}`;

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
