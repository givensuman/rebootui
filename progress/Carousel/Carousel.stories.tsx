import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import {
  Carousel, CarouselItem, CarouselCaption
} from '.'

export default {
  title: 'Carousel',
  component: Carousel
} as ComponentMeta<typeof Carousel>

const Template: ComponentStory<typeof Carousel> = (args) => 
  <Carousel {...args}>
    <CarouselItem>
      <img
        src="https://www.nasa.gov/sites/default/files/styles/full_width/public/thumbnails/image/main_image_star-forming_region_carina_nircam_final-1280.jpg"
        alt="Picture of space"
      />
      <CarouselCaption>
        Slide 1
      </CarouselCaption>
    </CarouselItem>
    <CarouselItem>
      <img
        src="https://www.nasa.gov/sites/default/files/styles/full_width/public/thumbnails/image/main_image_star-forming_region_carina_nircam_final-1280.jpg"
        alt="Picture of space"
      />
      <CarouselCaption>
        Slide 2
      </CarouselCaption>
    </CarouselItem>
  </Carousel>
  
export const Default = Template.bind({})

Default.args = {
  withControls: true,
  withIndicators: true
}
