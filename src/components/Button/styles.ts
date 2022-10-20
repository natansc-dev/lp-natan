import styled from 'styled-components'

type Props = {
  background: string
  color: string
}

export const Button = styled.a(({ background, color }: Props) => ({
  backgroundColor: background,
  color: color,
  // eslint-disable-next-line no-constant-condition
  border: background == 'transparent' ? `1px solid ${color}` : 'none',
  borderRadius: '26px',
  height: '46px',
  lineHeight: '46px',
  fontSize: '1.6rem',
  padding: '0 32px',
  display: 'inline-flex',
  span: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    svg: {
      fontSize: '1.2rem',
      marginRight: '8px'
    }
  }
}))

// export const Button = styled.a`
//   background-color: var(--main-color);
//   color: white;
//   border-radius: 26px;
//   height: 46px;
//   line-height: 46px;
//   font-size: 1.6rem;
//   padding: 0 32px;
//   text-transform: uppercase;
//   display: inline-flex;
//   span {
//     svg {
//       font-size: 1.2rem;
//       margin-right: 8px;
//     }
//   }
// `
