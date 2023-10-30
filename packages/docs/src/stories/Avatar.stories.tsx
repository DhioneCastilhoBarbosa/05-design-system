import type {StoryObj, Meta} from '@storybook/react'
import {Avatar, AvatarProps} from "@ignite-ui/react";


export default {
  title: 'Data Display/Avatar',
  component: Avatar,
  args:{
    src:'https://github.com/DhioneCastilhoBarbosa.png',
    alt: 'Dhione Castilho Barbosa',
  },
  argTypes:{
    src:{
      control:{
        type: 'text',
      }
    }
  }
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> ={}
export const withFallback: StoryObj<AvatarProps> ={
  args:{
    src: undefined,
  }
}

