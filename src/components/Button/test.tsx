import { render, screen } from '@testing-library/react'
import { FaUserAlt } from 'react-icons/fa'

import { Button } from '.'

describe('<Button />', () => {
  it('Test 001 - should render the link', () => {
    const { container } = render(
      <Button
        url={'#'}
        label={'Mais sobre mim'}
        icon={<FaUserAlt />}
        color={'#FFF'}
      />
    )

    expect(screen.getByText('Mais sobre mim'))

    expect(container.firstChild).toMatchSnapshot()
  })

  it('Test 002 - should render a style button with background transparent', () => {
    const { container } = render(
      <Button
        url={'#'}
        label={'Mais sobre mim'}
        icon={<FaUserAlt />}
        color={'#fa5b0f'}
      />
    )

    expect(container).toHaveStyle({
      border: '1px solid #fa5b0f;'
    })
  })
})
