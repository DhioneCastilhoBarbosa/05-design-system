import type {StoryObj, Meta} from '@storybook/react'
import {Text, TextProps} from "@castilho-ui/react";


export default {
  title: 'Typography/Text',
  component: Text,
  args:{
    size: 'md',
    children: 
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos quam odit dignissimos assumenda, saepe atque dolor nam vitae enim officiis autem neque exercitationem debitis maxime amet sed omnis earum magnam.'
  },
  argTypes:{
    size:{
      options: ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '4xl', '5xl', '6xl', '7xl', '8xl', '9xl',],
      control:{
        type: 'inline-radio',
      }
    },
  }
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> ={}
export const CustomTag: StoryObj<TextProps> ={
  args:{
    children: 'Strong Text',
    as: 'strong',
  }
}
