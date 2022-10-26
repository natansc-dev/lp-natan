import { Story, Meta } from '@storybook/react/types-7-0'
import { ReactNode } from 'react'
import { FaUserAlt } from 'react-icons/fa'

import { Button } from '.'

export default {
  title: 'Button',
  component: Button,
  args: {
    label: 'Mais sobre mim',
    icon: <FaUserAlt />,
    url: '#',
    color: '#FFFFFF'
  }
} as Meta

type ButtonProps = {
  label: string
  icon: ReactNode
  url: string
  color: string
}

export const Default: Story = (args: ButtonProps) => <Button {...args} />

Default.args = {
  label: 'Mais sobre mim',
  icon: <FaUserAlt />,
  url: '#',
  color: '#FFFFFF'
}
