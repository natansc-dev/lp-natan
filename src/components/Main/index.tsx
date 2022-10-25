import { Home } from '../Home'
import * as S from './styles'

type MainProps = {
  photo_url: string
  regards: string
}

export const Main = ({ photo_url, regards }: MainProps) => (
  <S.Main id="main" data-testid="main">
    <Home
      photo={photo_url}
      title={'SOU'}
      regards={regards}
      description={
        'Sou um desenvolvedor do interior de São Paulo, moro em Piracicaba <br /> Me esforço para criar aplicatições Web imersivos e bonitos por meio de código cuidadosamente elaborado e design intuitivo para o usuário.'
      }
      typing={['NATAN CARDOSO', 'DESENVOLVEDOR', 'GAMER']}
    />
  </S.Main>
)
