import styled from 'styled-components'

export const Wrapper = styled.main`
  background-color: #06092b;
  color: white;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem;
`

export const Box = styled.div`
  width: 100%;
  max-width: 550px;
  a:last-child {
    margin-left: 2rem;
  }
`

export const Group = styled.div`
  display: flex;
  align-items: center;
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
`
