import styled from 'styled-components'

export const Button = styled.a`
  background-color: ${(props) =>
    props.color == '#FA5B0F' ? 'transparent' : '#FA5B0F'};
  color: ${(props) => props.color};
  border: ${(props) =>
    props.color != '#FA5B0F' ? 'none' : `1px solid ${props.color}`};
  border-radius: 26px;
  height: 46px;
  line-height: 46px;
  font-size: 1.6rem;
  padding: 0 32px;
  display: inline-flex;
  cursor: pointer;
  position: relative;
  text-transform: uppercase;
  display: inline-block;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  outline: none;
  overflow: hidden;
  span {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
    svg {
      font-size: 1.2rem;
      margin-right: 8px;
    }
  }
  &::before {
    position: absolute;
    content: '';
    top: 0;
    height: 102%;
    left: -25%;
    width: 0%;
    background-color: ${(props) =>
      props.color == '#FA5B0F' ? '#FA5B0F' : '#555'};
    transform: skew(-22deg);
    transition-duration: 0.6s;
    z-index: 1;
  }
  &:hover {
    color: ${(props) => props.color == '#FA5B0F' && '#FFFFFF'};
  }
  &:hover::before {
    width: 180%;
  }
`
