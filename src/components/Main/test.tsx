import { render, screen } from '@testing-library/react'

import { Main } from '.'

describe('<Main />', () => {
  it('Test 001 - should render the main', () => {
    const { container } = render(<Main data-testid="main" />)

    expect(screen.getByTestId('main')).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
