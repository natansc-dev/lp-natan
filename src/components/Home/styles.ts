import styled from 'styled-components'

export const Section = styled.section`
  background-color: #06092b;
  color: white;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem;
  &::after {
    content: '';
    position: absolute;
    background-color: rgba(0, 0, 0, 0.85);
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    z-index: 0;
  }
`

export const Box = styled.div`
  width: 100%;
  max-width: 550px;
  z-index: 1;
  a:last-child {
    margin-left: 2rem;
  }
`

export const Group = styled.div`
  display: flex;
  align-items: center;
`

export const Video = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  max-width: 100%;
  min-height: 100%;
`

export const Title = styled.h1`
  font-size: 4.2rem;
  line-height: 4.2rem;
  font-weight: 500;
  margin: 18px 8px 8px 0px;
  color: #fff;
  white-space: nowrap;
  position: relative;
`

export const Highlight = styled.span`
  color: var(--main-color);
  font-size: 4.2rem;
  line-height: 4.2rem;
  font-weight: 500;
  margin: 18px 0 8px;
`
export const SubTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 400;
`

export const Description = styled.p`
  font-size: 1.6rem;
  margin: 12px 0 22px;
  line-height: 32px;
  font-weight: 400;
`

export const Illustration = styled.img`
  width: min(30rem, 320px);
  border-radius: 50%;
  border: 10px solid #ffffff1a;
  margin-right: 4rem;
  z-index: 1;
`
