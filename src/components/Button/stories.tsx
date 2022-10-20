import { Story, Meta } from '@storybook/react'
import { Button } from '.'

export default {
  title: 'Button',
  component: Button,
  args: {
    label: 'SOU',
    icon: 'FALA GALERA!',
    url: 'string'
  }
} as Meta

export const Default: Story = () => (
  <Button label={''} icon={''} url={''} color={''} />
)

Default.args = {
  label: 'SOU',
  icon: 'FALA GALERA!',
  url: 'string'
}
