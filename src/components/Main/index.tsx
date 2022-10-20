import { Home } from '../Home'
import * as S from './styles'

export const Main = () => (
  <S.Main id="main" data-testid="main">
    <Home
      title={'SOU'}
      subtitle={'FALA GALERA!'}
      description={
        'Im a Freelance UI /UX Designer and Developer based in London, England.<br />I strives to build immersive and beautiful web applications through carefully crafted code and user - centric design.'
      }
      typing={['NATAN CARDOSO', 'DESENVOLVEDOR', 'GAMER']}
    />
  </S.Main>
)
