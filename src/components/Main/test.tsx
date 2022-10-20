import { render, screen } from '@testing-library/react'

import { Main } from '.'

describe('<Main />', () => {
  it('Test 001 - should render the heading', () => {
    const { container } = render(
      <Main
        title={'SOU'}
        subtitle={'Fala galera!'}
        description={'TypeScript, ReactJS, NextJS, e Styled Components'}
        typing={['DESENVOLVEDOR', 'GAMER']}
      />
    )

    expect(screen.getByRole('heading', { name: 'SOU' })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('Test 002 - should render the span typing', () => {
    const { container } = render(
      <Main
        title={'SOU'}
        subtitle={'Fala galera!'}
        description={'TypeScript, ReactJS, NextJS, e Styled Components'}
        typing={['DESENVOLVEDOR', 'GAMER']}
      />
    )

    expect(screen.queryByTestId('test-span'))

    expect(container.firstChild).toMatchSnapshot()
  })

  it('Test 003 - should render the colors correctly', () => {
    const { container } = render(
      <Main
        title={'SOU'}
        subtitle={'Fala galera!'}
        description={'TypeScript, ReactJS, NextJS, e Styled Components'}
        typing={['DESENVOLVEDOR', 'GAMER']}
      />
    )

    expect(container.firstChild).toHaveStyle({ 'background-color': '#06092b' })
  })
})
