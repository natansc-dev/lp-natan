import * as S from './styles'
import Typewriter from 'typewriter-effect'
import { Button } from '../Button'
import { FaUserAlt, FaBriefcase } from 'react-icons/fa'
import { getImageUrl } from '../../utils/getImageUrl'

type HomeProps = {
  photo: string
  title: string
  regards: string
  description: string
  typing: string[]
}

export const Home = ({
  title,
  regards,
  description,
  typing,
  photo
}: HomeProps) => (
  <S.Section>
    <S.Video autoPlay loop muted>
      <source src="/bg-video.mp4" type="video/mp4" />
    </S.Video>

    <S.Illustration
      src={getImageUrl(photo)}
      alt="Um desenvolvedor de frente para um tela com código."
    />
    <S.Box>
      <S.SubTitle>{regards}</S.SubTitle>

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
        label={'Mais sobre mim'}
        icon={<FaUserAlt />}
        color={'#FFFFFF'}
      />

      <Button
        url={''}
        label={'Portfólio'}
        icon={<FaBriefcase />}
        color={'#FA5B0F'}
      />
    </S.Box>
  </S.Section>
)
