import { Story, Meta } from '@storybook/react/types-7-0'
import { Home } from '.'

export default {
  title: 'Home',
  component: Home,
  args: {
    photo: '/uploads/perfil_b.png',
    title: 'SOU',
    regards: 'Fala galera!',
    description:
      'Sou um desenvolvedor do interior de São Paulo, moro em Piracicaba <br /> Me esforço para criar aplicatições Web imersivos e bonitos por meio de código cuidadosamente elaborado e design intuitivo para o usuário.',
    typing: ['NATAN CARDOSO', 'DESENVOLVEDOR', 'GAMER']
  }
} as Meta

type HomeProps = {
  photo: string
  title: string
  regards: string
  description: string
  typing: string[]
}

export const Default: Story = (args: HomeProps) => <Home {...args} />

Default.args = {
  photo: '/uploads/perfil_b.png',
  title: 'SOU',
  regards: 'Fala galera!',
  description:
    'Sou um desenvolvedor do interior de São Paulo, moro em Piracicaba <br /> Me esforço para criar aplicatições Web imersivos e bonitos por meio de código cuidadosamente elaborado e design intuitivo para o usuário.',
  typing: ['NATAN CARDOSO', 'DESENVOLVEDOR', 'GAMER']
}
