import { render, screen } from '@testing-library/react'
import { FaUserAlt } from 'react-icons/fa'

import { Button } from '.'

describe('<Button />', () => {
  it('Test 001 - should render the link', () => {
    const { container } = render(
      <Button
        url={'#'}
        label={'MAIS SOBRE MIM'}
        icon={<FaUserAlt />}
        bg={'#fa5b0f'}
        color={'#FFF'}
      />
    )

    console.log(container)

    expect(screen.getByText('MAIS SOBRE MIM'))

    expect(container.firstChild).toMatchSnapshot()
  })

  it('Test 002 - should render a style button with background transparent', () => {
    const { container } = render(
      <Button
        url={'#'}
        label={'MAIS SOBRE MIM'}
        icon={<FaUserAlt />}
        bg={'transparent'}
        color={'#fa5b0f'}
      />
    )

    expect(container).toHaveStyle({
      border: '1px solid #fa5b0f;'
    })
  })
})
