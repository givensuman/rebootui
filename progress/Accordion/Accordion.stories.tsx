import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Accordion, AccordionItem, AccordionHeader, AccordionBody } from '.';
import { type AccordionProps, type AccordionBodyProps } from './Accordion';

import ipsum from '../utils/ipsum';

export default {
  title: 'Accordion',
  component: Accordion,
  argTypes: {}
} as ComponentMeta<any>;

const Template: ComponentStory<any> = (
  args: AccordionProps & AccordionBodyProps
) => (
  <Accordion flush={args.flush}>
    <AccordionItem>
      <AccordionHeader>Hi mom</AccordionHeader>
      <AccordionBody stayOpen={args.stayOpen}>{ipsum()}</AccordionBody>
    </AccordionItem>
    <AccordionItem>
      <AccordionHeader>Hi mom</AccordionHeader>
      <AccordionBody stayOpen={args.stayOpen}>{ipsum()}</AccordionBody>
    </AccordionItem>
  </Accordion>
);

export const Default = Template.bind({});
export const Flush = Template.bind({});
export const stayOpen = Template.bind({});

Default.args = {};
Flush.args = {
  flush: true
};
stayOpen.args = {
  stayOpen: true
};
