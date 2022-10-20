import * as S from './styles'
import Typewriter from 'typewriter-effect'
import { Button } from '../Button'
import { FaUserAlt, FaBriefcase } from 'react-icons/fa'

type MainProps = {
  title: string
  subtitle: string
  description: string
  typing: string[]
}

export const Main = ({ title, subtitle, description, typing }: MainProps) => (
  <S.Wrapper>
    <S.Video autoPlay loop muted>
      <source src="/bg-video.mp4" type="video/mp4" />
    </S.Video>

    <S.Illustration
      src="/images/perfil_b.png"
      alt="Um desenvolvedor de frente para um tela com código."
    />
    <S.Box>
      <S.SubTitle>{subtitle}</S.SubTitle>

      <S.Group>
        <S.Title>{title}</S.Title>

        <S.Highlight id="test-span">
          <Typewriter
            options={{
              strings: typing,
              autoStart: true,
              loop: true
            }}
          />
        </S.Highlight>
      </S.Group>

      <S.Description>
        <span dangerouslySetInnerHTML={{ __html: description }} />
      </S.Description>

      <Button
        url={''}
        label={'MAIS SOBRE MIM'}
        icon={<FaUserAlt />}
        bg={'#fa5b0f'}
        color={'#FFF'}
      />

      <Button
        url={''}
        label={'PORTFÓLIO'}
        icon={<FaBriefcase />}
        bg={'transparent'}
        color={'#fa5b0f'}
      />
    </S.Box>
  </S.Wrapper>
)
