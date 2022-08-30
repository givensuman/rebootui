import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {
  Card,
  CardImage,
  CardImageOverlay,
  CardTitle,
  CardBody,
  CardText,
  CardLink,
  CardHeader,
  CardFooter
} from './Card';
import { type CardProps, type CardImageProps } from './Card';

import ipsum from '../utils/ipsum';

export default {
  title: 'Card',
  component: Card
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (
  args: CardProps & CardImageProps
) => (
  <Card {...args}>
    <CardHeader>Hi mom</CardHeader>
    <CardImage
      src="https://www.nasa.gov/sites/default/files/styles/full_width/public/thumbnails/image/main_image_star-forming_region_carina_nircam_final-1280.jpg"
      alt="logo"
      placement={args.placement}
    />
    <CardBody>
      <CardTitle>Hi mom</CardTitle>
      <CardText>{ipsum()}</CardText>
    </CardBody>
    <hr />
    <CardBody>
      <CardLink href="#">Hi</CardLink>
      <CardLink href="#">Mom</CardLink>
    </CardBody>
    <CardFooter>Bye mom</CardFooter>
  </Card>
);

export const Default = Template.bind({});

export const Overlay: ComponentStory<typeof Card> = (
  args: CardProps & CardImageProps
) => (
  <Card {...args}>
    <CardHeader>Hi mom</CardHeader>
    <CardImage
      src="https://www.nasa.gov/sites/default/files/styles/full_width/public/thumbnails/image/main_image_star-forming_region_carina_nircam_final-1280.jpg"
      alt="logo"
    />
    <CardImageOverlay>
      <CardBody>
        <CardTitle>Hi mom</CardTitle>
        <CardText>{ipsum()}</CardText>
      </CardBody>
      <hr />
      <CardBody>
        <CardLink href="#">Hi</CardLink>
        <CardLink href="#">Mom</CardLink>
      </CardBody>
    </CardImageOverlay>
    <CardFooter>Bye mom</CardFooter>
  </Card>
);
