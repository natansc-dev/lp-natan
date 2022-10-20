import { Home } from '../Home'
import * as S from './styles'

export const Main = () => (
  <S.Main id="main" data-testid="main">
    <Home
      title={'SOU'}
      subtitle={'FALA GALERA!'}
      description={
        'Sou um desenvolvedor do interior de São Paulo, moro em Piracicaba <br /> Me esforço para criar aplicatições Web imersivos e bonitos por meio de código cuidadosamente elaborado e design intuitivo para o usuário.'
      }
      typing={['NATAN CARDOSO', 'DESENVOLVEDOR', 'GAMER']}
    />
  </S.Main>
)
