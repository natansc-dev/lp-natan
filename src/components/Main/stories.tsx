import { Story, Meta } from '@storybook/react/types-7-0'
import { Main } from '.'

export default {
  title: 'Main',
  component: Main,
  args: {
    title: 'SOU',
    subtitle: 'FALA GALERA!',
    description:
      'Im a Freelance UI /UX Designer and Developer based in London, England.<br />I strives to build immersive and beautiful web applications through carefully crafted code and user - centric design.',
    typing: ['DESENVOLVEDOR', 'GAMER']
  }
} as Meta

type MainProps = {
  title: string
  subtitle: string
  description: string
  typing: string[]
}

export const Default: Story = (args: MainProps) => <Main {...args} />

Default.args = {
  title: 'SOU',
  subtitle: 'FALA GALERA!',
  description:
    'Im a Freelance UI /UX Designer and Developer based in London, England.<br />I strives to build immersive and beautiful web applications through carefully crafted code and user - centric design.',
  typing: ['DESENVOLVEDOR', 'GAMER']
}
